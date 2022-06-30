import { CheckoutStatusEnum } from '../constants';
import { Types } from 'mongoose';
export interface ICheckout {
    _id?: Types.ObjectId;
    cart: Types.ObjectId;
    userId: Types.ObjectId;
    status: CheckoutStatusEnum;
    createdAt: string;
}
