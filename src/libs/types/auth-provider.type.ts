export interface IAuthProvider {
  checkExistence(provider: string): boolean;
  deleteDublication(provider: string): boolean;
  sendVerificationCode(provider: string): boolean;
  verifyVerificationCode(provider: string, opt: string): boolean;
}
