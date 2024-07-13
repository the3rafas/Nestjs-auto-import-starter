import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthResolver } from './auth.resolver';
import { AuthProvider } from './services/auth.provider.service';
import { Config } from 'project.config';
import { EmailProviderStrategy } from '@/libs/strategies/auth/email.strategy';
import { PhoneProviderStrategy } from '@/libs/strategies/auth/phone.strategy';
import { UserModules } from '@/modules/user/user.module';

export const AuthUseClass = {
email:EmailProviderStrategy,
phone:PhoneProviderStrategy,
}
  Config.authentication.strategy === 'email'
    ? EmailProviderStrategy
    : PhoneProviderStrategy;

@Module({
  imports: [UserModules],
  providers: [
    AuthService,
    AuthResolver,
    { useClass: AuthUseClass[  Config.authentication.strategy ], provide: AuthProvider },
  ],
  exports: [],
})
export class AuthModules {}
