import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class FindUniqueUserInput {
  @IsNotEmpty()
  @Field(() => String)
  id: string;
}
