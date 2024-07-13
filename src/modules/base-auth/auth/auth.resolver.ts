import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AuthResolver {
  constructor() {}

  @Query((of) => String)
  me() {
    return 'user';
  }
}
