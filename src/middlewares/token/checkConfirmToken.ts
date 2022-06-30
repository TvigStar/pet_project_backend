import { NextFunction, Response } from 'express';
import { ActionEnum, RequestHeadersEnum, ResponseStatusCodesEnum } from '../../constants';
import { customErrors, ErrorHandler } from '../../errors';
import { userService } from '../../services';
import { IRequestExtended } from '../../models';
import { tokenVerification } from '../../helpers';

export const checkConfirmTokenMiddleware = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.get(RequestHeadersEnum.AUTHORIZATION);

    if (!token) {
      throw new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, customErrors.BAD_REQUEST_NO_TOKEN.message);
    }

    await tokenVerification(ActionEnum.USER_REGISTER, token);

    const userByToken = await userService.findUserByActionToken(ActionEnum.USER_REGISTER, token);

    if (!userByToken) {
      throw new ErrorHandler(ResponseStatusCodesEnum.NOT_FOUND, customErrors.NOT_FOUND.message);
    }
    req.user = userByToken;
    next();
  } catch (err) {
    next(err);
  }

};
