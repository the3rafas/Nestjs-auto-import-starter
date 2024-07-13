import { IAuthProvider } from '../../types';

export class EmailProviderStrategy implements IAuthProvider {
  constructor() {}
  checkExistence(provider: string): boolean {
    return true;
  }
  deleteDuplication(provider: string): boolean {
    return true;
  }
  sendVerificationCode(provider: string): boolean {
    return true;
  }
  verifyVerificationCode(provider: string, opt: string): boolean {
    return true;
  }
}
