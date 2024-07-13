import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamicModules } from './modules/modules';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { env } from 'process';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { IContext } from './libs/types';

@Module({
  imports: [
    DynamicModules.register(),
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: env.NODE_ENV !== 'prod' ? true : false,
      context: async ({ req, res, extra }): Promise<IContext> => {
        // implement context logic here

        return {
          req,
          res,
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
