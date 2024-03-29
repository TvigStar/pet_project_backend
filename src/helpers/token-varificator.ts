import { verify, VerifyErrors } from 'jsonwebtoken';

import { customErrors, ErrorHandler } from '../errors';
import { config } from '../config';
import { ActionEnum, ResponseStatusCodesEnum } from '../constants';

export const tokenVerification = async (action: ActionEnum, token: string): Promise<VerifyErrors | null> => {
  try {
    let isValid;
    switch (action) {
      case ActionEnum.USER_AUTH:
        isValid = await verify(token, config.JWT_SECRET) as Promise<VerifyErrors | null>;
        break;

      case ActionEnum.USER_REFRESH:
        isValid = await verify(token, config.JWT_REFRESH_SECRET) as Promise<VerifyErrors | null>;
        break;

      case ActionEnum.USER_REGISTER:
        isValid = await verify(token, config.JWT_CONFIRM_EMAIL_SECRET) as Promise<VerifyErrors | null>;
        break;

      case ActionEnum.FORGOT_PASSWORD:
        isValid = await verify(token, config.JWT_PASS_RESET_SECRET) as Promise<VerifyErrors | null>;
        break;

      default:
        throw new ErrorHandler(ResponseStatusCodesEnum.SERVER, 'wrong Action type');
    }

    return isValid;
  } catch (e) {
    throw new ErrorHandler(ResponseStatusCodesEnum.UNAUTHORIZED,
      customErrors.UNAUTHORIZED_BAD_TOKEN.message);
  }

};
