import { NextFunction, Request, Response } from 'express';
import {emailValidator} from '../../validators';
import {ErrorHandler} from '../../errors';
import { ResponseStatusCodesEnum } from '../../constants';

export const emailValidatorMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const {error} = emailValidator.validate(req.body);

    if (error) {
      throw new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, error.details[0].message);
    }

    next();
  } catch (err){
    next(err);
  }

};
