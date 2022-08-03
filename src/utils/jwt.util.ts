import dotenv from 'dotenv';
import { verify, sign, SignOptions } from 'jsonwebtoken';
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

export const verifyToken = (token: string) => {
  try {
    const payload = verify(token, SECRET);
    
    return payload;
  } catch (_err) {
    throw new CustomError('Unauthorized', 'Expired or invalid token');
  }
};
