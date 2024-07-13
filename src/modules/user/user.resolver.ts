import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  constructor() {}

  @Query((of) => String)
  me() {
    return 'user';
  }
}
