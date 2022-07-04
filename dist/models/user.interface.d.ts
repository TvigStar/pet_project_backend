import { ActionEnum } from '../constants';
import { Types } from 'mongoose';
export interface IUserToken {
    token?: string;
    action?: ActionEnum;
}
export interface IUser {
    _id: Types.ObjectId;
    name: string;
    surname: string;
    email: string;
    password: string;
    age: number;
    phone?: string;
    gender?: string;
    photo?: string;
    status: string;
    token?: IUserToken[];
    createdAt: any;
}
