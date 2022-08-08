import dotenv from 'dotenv';
import { verify, sign, SignOptions, JwtPayload } from 'jsonwebtoken';
import IUser from '../interfaces/user.interface';
import CustomError from './customError.util';

dotenv.config();

const SECRET = `${process.env.JWT_SECRET}`;

export const createToken = (user: IUser) => {
  const signInOptions: SignOptions = {
    algorithm: 'HS256',
    expiresIn: '7d',
  };

  const payload = {
    user,
  };

  const token = sign(payload, SECRET, signInOptions);
  return token;
};

export const verifyToken = (token: string): JwtPayload => {
  try {
    const payload = verify(token, SECRET);
    
    return payload as JwtPayload;
  } catch (_err) {
    throw new CustomError('Unauthorized', 'Invalid token');
  }
};
