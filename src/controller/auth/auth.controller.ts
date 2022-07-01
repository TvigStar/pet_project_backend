import {
  IAccessToken, IRequestExtended, IUser
  // IUserToken
} from '../../models';
import { NextFunction, Request, Response } from 'express';
import { comparePassword, tokenizer, tokenVerification } from '../../helpers';
import { ActionEnum, RequestHeadersEnum, ResponseStatusCodesEnum } from '../../constants';
import { authService } from '../../services';
import { customErrors, ErrorHandler } from '../../errors';

class AuthController {
  async authUser(req: IRequestExtended, res: Response, next: NextFunction) {
    try {
      const {_id, password} = req.user as IUser;
      const authInfo = req.body;

      const isPasswordEquels = await comparePassword(authInfo.password, password);

      if (!isPasswordEquels) {
        throw new ErrorHandler(ResponseStatusCodesEnum.NOT_FOUND,
          customErrors.NOT_FOUND.message
        );
      }

      const {access_token, refresh_token} = tokenizer(ActionEnum.USER_AUTH);

      await authService.createTokenPair({
        accessToken: access_token,
        refreshToken: refresh_token,
        userId: _id
      });

      res.json({access_token, refresh_token});
    } catch (err) {
      return next(err);
    }
  }

  async refreshToken(req: IRequestExtended, res: Response, next: NextFunction){
    try {
      const {refreshToken} = req.body;

      if (!refreshToken){
        return next(new ErrorHandler(ResponseStatusCodesEnum.NOT_FOUND, customErrors.BAD_REQUEST_NO_TOKEN.message ));
      }

      await tokenVerification(ActionEnum.USER_REGISTER, refreshToken);

      const tokenValid = await authService.findRefreshToken(refreshToken);

      const {access_token, refresh_token} = tokenizer(ActionEnum.USER_AUTH);

      if (tokenValid){
        await authService.createTokenPair({
          accessToken: access_token,
          refreshToken: refresh_token,
          // userId: _id
        });
      }
      res.json({access_token, refresh_token});
    } catch (err){
      return next(err);
    }
  }

  async logoutUser(req: Request, res: Response, next: NextFunction) {
    const accessToken = req.get(RequestHeadersEnum.AUTHORIZATION);

    await authService.removeToken({accessToken});

    res.sendStatus(ResponseStatusCodesEnum.NO_CONTENT);

  }
}

export const authController = new AuthController();
