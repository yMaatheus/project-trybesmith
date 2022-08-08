import Joi, { ValidationResult } from 'joi';
import joiCustomExceptionUtil from '../../utils/joiCustomException.util';

export const validateProductsIds = (productsIds: number[]): ValidationResult => {
  const schema = Joi.object({
    productsIds: Joi.array().items(Joi.number().required()).required().messages({
      'array.includesRequiredUnknowns': '"productsIds" must include only numbers',
    }),
  });

  const { error, value } = schema.validate({ productsIds });

  if (error) throw joiCustomExceptionUtil(error);

  return value;
};

export const a = 'hello world';