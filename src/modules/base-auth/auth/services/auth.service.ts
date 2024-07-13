import { Injectable } from '@nestjs/common';
import { AuthProvider } from './auth.provider.service';

@Injectable()
export class AuthService {
  constructor(private readonly providerService: AuthProvider) {}

  registerAs() {}

  emailAndPasswordLogin() {}
  
  signOut() {}
}
