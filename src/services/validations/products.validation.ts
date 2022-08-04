import Joi, { ValidationResult } from 'joi';
import IProduct from '../../interfaces/product.interface';
import joiCustomExceptionUtil from '../../utils/joiCustomException.util';

export const validateCreateProduct = (product: IProduct): ValidationResult => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });

  const { error, value } = schema.validate(product);

  if (error) throw joiCustomExceptionUtil(error);

  return value;
};

export const a = 'hello world';