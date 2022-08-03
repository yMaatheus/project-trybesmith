import Joi, { ValidationResult } from 'joi';
import IUser from '../../interfaces/user.interface';

export const validateCreate = (user: IUser): ValidationResult => {
  const schema = Joi.object({
    username: Joi.string().required(),
    classe: Joi.string().required(),
    level: Joi.number().required(),
    password: Joi.string().required(),
  });

  const { error, value } = schema.validate(user);

  if (error) throw error;

  return value;
};

export const a = 'hello world';