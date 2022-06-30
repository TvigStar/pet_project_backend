import { Document, Model, Schema } from 'mongoose';
import { ICheckout } from '../../models';
export declare type CheckoutType = ICheckout & Document;
export declare const CheckoutSchema: Schema;
export declare const CheckoutModel: Model<CheckoutType>;
