import { NextFunction, Response } from 'express';
import { userService } from '../../services';
import { customErrors, ErrorHandler } from '../../errors';
import { ResponseStatusCodesEnum } from '../../constants';
import { IRequestExtended } from '../../models';

export const checkIsUserExistByEmailMiddleware = async (req: IRequestExtended, res: Response, next: NextFunction) => {
  try {
    const {email} = req.body;
    const userByEmail = await userService.findOneByParams({email});

    if (!userByEmail) {
      throw new ErrorHandler(ResponseStatusCodesEnum.NOT_FOUND,
        customErrors.NOT_FOUND.message
      );
    }

    req.user = userByEmail;
    next();
  } catch (err) {
    next(err);
  }
};
