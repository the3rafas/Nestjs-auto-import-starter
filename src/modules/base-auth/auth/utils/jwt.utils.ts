import * as jwt from 'jsonwebtoken';
import { Config } from 'project.config';
import { AuthPaylaodType } from 'src/libs/types';

function generateAuthToken(payload: AuthPaylaodType): string {
  return jwt.sign(payload, Config.jwtSecret);
}

export function AppendAuthToken(res: Response, payload: AuthPaylaodType) {
  const accessToken = generateAuthToken(payload);
  res.headers.append('access-token', accessToken);
}

export function VerifyAuthToken(
  token: string,
  secret: string = Config.jwtSecret,
): AuthPaylaodType | null {
  try {
    return <AuthPaylaodType>jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}
