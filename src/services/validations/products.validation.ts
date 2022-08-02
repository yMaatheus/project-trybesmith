import Joi, { ValidationResult } from 'joi';
import IProduct from '../../interfaces/product.interface';

export const validateCreateProduct = (product: IProduct): ValidationResult => {
  const schema = Joi.object({
    name: Joi.string().required(),
    amount: Joi.string().required(),
  });

  const { error, value } = schema.validate(product);

  if (error) throw error;

  return value;
};

export const a = 'hello world';