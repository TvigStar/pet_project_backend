import { CartStatusEnum } from '../constants';
import { Types } from 'mongoose';
import { IProduct } from './product.interface';

export interface ICartProduct {
  productId: Types.ObjectId | IProduct;
  count: number;
  price: number;
}

export interface ICart {
  _id: Types.ObjectId;
  products: ICartProduct[];
  userId: Types.ObjectId;
  status: CartStatusEnum
  sum: number;
  createdAt: string;
  updatedAt: string;
}
