import { UserModel } from '../../database';
import { IUser, IUserToken } from '../../models';
import { Types } from 'mongoose';
import { ActionEnum } from '../../constants';

class UserService {
  createUser(user: Partial<IUser>): Promise<IUser> {
    const userToCraete = new UserModel(user);

    return userToCraete.save();
  }

  addActionToken(userId: Types.ObjectId, tokenObject: IUserToken): Promise<IUser> {
    return UserModel.update(
      {_id: new Types.ObjectId(userId)},
      {
        $push: {
          token: tokenObject as any
        }
      }
    ) as any;
  }

  updateUserByParams(params: Partial<IUser>, update: Partial<IUser>): Promise<IUser> {
    return UserModel.updateOne(params, update) as any;
  }

  findOneByParams(findObject: Partial<IUser>): Promise<IUser> | null {
    return UserModel.findOne(findObject) as any;
  }

  findUserByActionToken(action: ActionEnum, token: string): Promise<IUser> | null {
    return UserModel.findOne({
      $and: [
        {'tokens.action': action},
        {'tokens.token': token}
      ]
    }) as any;
  }

  removeActionToken(action: ActionEnum, token: string): Promise<IUser | null> {
    return UserModel.update(
      {},
      {
        $pull: {
          $and: [
            {'tokens.token': token},
            {'tokens.action': action}
          ]
        } as any
      }) as any;
  }
}

export const userService = new UserService();
