import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './services/auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query((of) => String)
  me() {
    return 'user';
  }

  @Mutation((of) => Boolean)
  registerAs() {
    this.authService.registerAs();
  }
}
