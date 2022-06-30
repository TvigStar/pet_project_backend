import { IUser, IUserToken } from '../../models';
import { Types } from 'mongoose';
import { ActionEnum } from '../../constants';
declare class UserService {
    createUser(user: Partial<IUser>): Promise<IUser>;
    addActionToken(userId: Types.ObjectId, tokenObject: IUserToken): Promise<IUser>;
    updateUserByParams(params: Partial<IUser>, update: Partial<IUser>): Promise<IUser>;
    findOneByParams(findObject: Partial<IUser>): Promise<IUser> | null;
    findUserByActionToken(action: ActionEnum, token: string): Promise<IUser> | null;
    removeActionToken(action: ActionEnum, token: string): Promise<IUser | null>;
}
export declare const userService: UserService;
export {};
