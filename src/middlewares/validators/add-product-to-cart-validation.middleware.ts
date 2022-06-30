import {NextFunction, Response} from 'express';
import { addProductToCartValidator } from '../../validators';
import { ErrorHandler } from '../../errors';
import { ResponseStatusCodesEnum } from '../../constants';
import { IRequestExtended } from '../../models';

export const addProductToCartValidatorMiddleware = (req: IRequestExtended, res: Response, next: NextFunction) => {
  const {error} = addProductToCartValidator.validate(req.product);
  console.log(error);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, error.details[0].message));
  }
  next();
};
