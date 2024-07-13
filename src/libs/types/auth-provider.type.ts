export interface IAuthProvider {
  checkExistence(provider: string): boolean;
  deleteDuplication(provider: string): boolean;
  sendVerificationCode(provider: string): boolean;
  verifyVerificationCode(provider: string, opt: string): boolean;
}
