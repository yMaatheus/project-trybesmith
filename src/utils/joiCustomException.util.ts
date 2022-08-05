import { ValidationError } from 'joi';
import CustomError from './customError.util';

export default (error: ValidationError) => {
  const { type, message } = error.details[0];

  if (type === 'string.base' || type === 'string.min' 
  || type === 'number.base' || type === 'number.min') {
    return new CustomError('UnprocessableEntity', message);
  }
  return error;
};