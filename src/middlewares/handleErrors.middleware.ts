import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

enum ErrorsCodes {
  ValidationError = StatusCodes.BAD_REQUEST,
  Unauthorized = StatusCodes.UNAUTHORIZED,
}

const error: ErrorRequestHandler = async (err, _r: Request, res: Response, _next: NextFunction) => {
  const { name, message } = err;

  const code = ErrorsCodes[name];

  if (!code) return res.status(500).json({ message });
  
  return res.status(+code).json({ message });
};

export default error;