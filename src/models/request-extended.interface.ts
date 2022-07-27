import { Request } from 'express';
import { IUser } from './user.interface';
import { IProduct } from './product.interface';
import { ICart } from './cart.interface';

export interface IRequestExtended extends Request{
  user?: IUser
  product?: IProduct
  cart?: ICart
  file?: any
}
