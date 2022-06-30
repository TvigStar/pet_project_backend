import { Document, Model, model, Schema } from 'mongoose';
import { CheckoutStatusEnum, TableNamesEnum } from '../../constants';
import { ICheckout } from '../../models';

export type CheckoutType = ICheckout & Document

export const CheckoutSchema: Schema = new Schema<ICheckout>({
  cart: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: TableNamesEnum.CART
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: TableNamesEnum.USER
  },
  status: {
    type: String,
    required: true,
    default: CheckoutStatusEnum.IN_PROGRESS,
    enum: Object.values(CheckoutStatusEnum)
  }
}, {
  timestamps: true
});

export const CheckoutModel: Model<CheckoutType> = model<CheckoutType>(TableNamesEnum.CHECKOUT, CheckoutSchema);
