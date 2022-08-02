import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const errorHandler: ErrorRequestHandler = async (
  err, 
  _req: Request, 
  res: Response, 
  _next: NextFunction,
) => {
  const { name, message } = err;
  
  if (name === 'ValidationError') {
    res.status(StatusCodes.BAD_REQUEST).json({ message });
  }
  
  res.status(500).json({ message });
};

export default errorHandler;