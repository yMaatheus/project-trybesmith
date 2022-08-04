import { StatusCodes } from 'http-status-codes';

enum ErrorsCodes {
  ValidationError = StatusCodes.BAD_REQUEST,
  Unauthorized = StatusCodes.UNAUTHORIZED,
  UnprocessableEntity = StatusCodes.UNPROCESSABLE_ENTITY,
}

export default ErrorsCodes;