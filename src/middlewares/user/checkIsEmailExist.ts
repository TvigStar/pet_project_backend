import { NextFunction, Request, Response } from 'express';
import { userService } from '../../services';
import { customErrors, ErrorHandler } from '../../errors';
import { ResponseStatusCodesEnum } from '../../constants';

export const checkIsEmailExistMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {email} = req.body;
    const userByEmail = await userService.findOneByParams({email});

    if (userByEmail) {
      throw new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST,
        customErrors.BAD_REQUEST_USER_REGISTERED.message,
        customErrors.BAD_REQUEST_USER_REGISTERED.customCode
      )
      ;
    }
    next();
  } catch (err) {
    next(err);
  }

};
