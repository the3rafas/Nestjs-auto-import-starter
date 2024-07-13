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
import { TypeOrmModule } from '@nestjs/typeorm';

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
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: env.DB_HOST,
        port: env.DB_PORT,
        username: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        database: env.DB_NAME,
        synchronize: env.NODE_ENV !== 'prod' ? true : false,
        entities: [join(__dirname, '..', 'src/**/*.model.{ts,js}')],
        logging: env.NODE_ENV === 'dev' ? true : false,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
