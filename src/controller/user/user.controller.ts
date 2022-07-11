import { NextFunction, Request, Response } from 'express';
import { emailService, logService, userService } from '../../services';
import { IRequestExtended, IUser } from '../../models';
import { hashPassword, tokenizer } from '../../helpers';
import { ActionEnum, LogsEnum, RequestHeadersEnum, ResponseStatusCodesEnum, UserStatus } from '../../constants';
import { customErrors, ErrorHandler } from '../../errors';

class UserController {
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = req.body as IUser;

      user.password = await hashPassword(user.password);

      const {_id} = await userService.createUser(user);
      const {access_token} = tokenizer(ActionEnum.USER_REGISTER);

      await userService.addActionToken(_id, {action: ActionEnum.USER_REGISTER, token: access_token});
      await emailService.sendEmail(user.email, ActionEnum.USER_REGISTER, {token: access_token});
      await logService.createLog({event: LogsEnum.USER_REGISTERED, userId: _id});
      res.sendStatus(ResponseStatusCodesEnum.CREATED);

    } catch (error) {
      console.log(error);
    }
  }

  async confirmUser(req: IRequestExtended, res: Response, next: NextFunction) {
    const {_id, status,token=[]} = req.user as IUser;
    const tokenToDelete = req.get(RequestHeadersEnum.AUTHORIZATION);

    console.log(status, _id, token);
    if (status !== UserStatus.PENDING) {
      throw new ErrorHandler(
        ResponseStatusCodesEnum.BAD_REQUEST,
        customErrors.BAD_REQUEST_USER_ACTIVATED.message,
        customErrors.BAD_REQUEST_USER_ACTIVATED.customCode);
    }

    await userService.updateUserByParams({_id}, {status: UserStatus.CONFIRMED});

    const index = token.findIndex(({action, token}) => {
      return token === tokenToDelete && action === ActionEnum.USER_REGISTER;
    });

    if (index !== -1) {
      token.splice(index, 1);
      await userService.updateUserByParams({_id}, {token} as Partial<IUser>);
      await logService.createLog({event: LogsEnum.USER_CONFIRMED, userId: _id});

      res.end();
    }}

  async forgotPassword(req: IRequestExtended, res: Response, next: NextFunction) {
    const {_id,email} = req.user;
    const {access_token} = tokenizer(ActionEnum.FORGOT_PASSWORD);

    await userService.addActionToken(_id, {token:access_token,action:ActionEnum.FORGOT_PASSWORD});
    await emailService.sendEmail(email,ActionEnum.FORGOT_PASSWORD, {token:access_token});

    res.end();
  }

  async setForgotPass(req: IRequestExtended, res: Response, next: NextFunction) {
    const {_id, token = []} = req.user as IUser;
    const {password} = req.body;
    const tokenToDelete = req.get(RequestHeadersEnum.AUTHORIZATION);
    const hashPass = await hashPassword(password);

    await userService.updateUserByParams({_id}, {password: hashPass});

    const index = token.findIndex(({action, token}) => {
      return token === tokenToDelete && action === ActionEnum.FORGOT_PASSWORD;
    });

    if (index !== -1) {
      token.splice(index, 1);

      await userService.updateUserByParams({_id}, {token} as Partial<IUser>);
    }

    res.end();
  }
}

export const userController = new UserController();
