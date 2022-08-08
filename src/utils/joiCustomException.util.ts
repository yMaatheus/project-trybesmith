import { ValidationError } from 'joi';
import CustomError from './customError.util';

type Names = {
  [key: string]: string
};

const errorName: Names = {
  'string.base': 'UnprocessableEntity',
  'string.min': 'UnprocessableEntity',
  'number.base': 'UnprocessableEntity',
  'number.min': 'UnprocessableEntity',
  'array.base': 'UnprocessableEntity',
  'array.includesRequiredUnknowns': 'UnprocessableEntity',
};

export default (error: ValidationError) => {
  const { type, message } = error.details[0];

  const name = errorName[type];

  if (name) return new CustomError(name, message);
  return error;
};