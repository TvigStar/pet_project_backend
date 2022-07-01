import { Document, Model, model, Schema } from 'mongoose';
import { IUser } from '../../models';
import { TableNamesEnum, UserStatus } from '../../constants';

export type UserType = IUser & Document

const tokenSubModel = {
  token: String,
  action: String
};

export const UserSchema: Schema = new Schema<IUser>({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  photo: {
    type: String
  },
  status: {
    type: String,
    required: true,
    default: UserStatus.PENDING
  },
  token: [tokenSubModel],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

export const UserModel: Model<UserType> = model<UserType>(TableNamesEnum.USER, UserSchema);
