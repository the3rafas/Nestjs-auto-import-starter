import { Injectable } from '@nestjs/common';
import { IAuthProvider } from 'src/libs/types';

@Injectable()
export class AuthProvider implements IAuthProvider {
  checkExistence(provider: string): boolean {
    return true;
  }
  deleteDublication(provider: string): boolean {
    return true;
  }
  sendVerificationCode(provider: string): boolean {
    return true;
  }
  verifyVerificationCode(provider: string, opt: string): boolean {
    return true;
  }
}
