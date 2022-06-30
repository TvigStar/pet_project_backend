import { Document, Model, Schema } from 'mongoose';
import { ICart } from '../../models';
export declare type CartType = ICart & Document;
export declare const CartSchema: Schema;
export declare const CartModel: Model<CartType>;
