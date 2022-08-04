import Joi, { ValidationResult } from 'joi';
import IUser from '../../interfaces/user.interface';
import joiCustomExceptionUtil from '../../utils/joiCustomException.util';

export const validateCreate = (user: IUser): ValidationResult => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  });

  const { error, value } = schema.validate(user);

  if (error) throw joiCustomExceptionUtil(error);

  return value;
};

export const validateUsernamePassword = (username: string, password: string): ValidationResult => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(8).required(),
  });

  const { error, value } = schema.validate({ username, password });

  if (error) throw joiCustomExceptionUtil(error);

  return value;
};