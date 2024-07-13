import { IAuthProvider } from '../../types';

export class PhoneProviderStrategy implements IAuthProvider {
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
