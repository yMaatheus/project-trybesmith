import Joi, { ValidationError, ValidationResult } from 'joi';
import IProduct from '../../interfaces/product.interface';
import CustomError from '../../utils/customError.util';

const joiCustomException = (error: ValidationError) => {
  const { type, message } = error.details[0];

  if (type === 'string.base' || type === 'string.min') {
    return new CustomError('UnprocessableEntity', message);
  }
  return error;
};

export const validateCreateProduct = (product: IProduct): ValidationResult => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });

  const { error, value } = schema.validate(product);

  if (error) throw joiCustomException(error);

  return value;
};

export const a = 'hello world';