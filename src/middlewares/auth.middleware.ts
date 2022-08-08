import { NextFunction, Request, Response } from 'express';
import CustomError from '../utils/customError.util';
import { verifyToken } from '../utils/jwt.util';

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;

  if (!token) throw new CustomError('Unauthorized', 'Token not found');

  const { user } = verifyToken(token);

  res.locals.user = user;

  next();
};