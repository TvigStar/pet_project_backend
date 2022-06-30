import { Document, Model, Schema } from 'mongoose';
import { IUser } from '../../models';
export declare type UserType = IUser & Document;
export declare const UserSchema: Schema;
export declare const UserModel: Model<UserType>;
