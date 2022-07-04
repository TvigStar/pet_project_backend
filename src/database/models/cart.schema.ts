import { Document, Model, model, Schema } from 'mongoose';
import { CartStatusEnum, TableNamesEnum } from '../../constants';
import { ICart } from '../../models';

export type CartType = ICart & Document

const productSubModel = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: TableNamesEnum.PRODUCTS
  },
  count: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: false
  }
});

export const CartSchema: Schema = new Schema<ICart>({
  products: [productSubModel],
  userId: {
    type: Schema.Types.ObjectId,
    ref: TableNamesEnum.USER
  },
  status: {
    type: String,
    required: true,
    default: CartStatusEnum.IN_PROGRESS,
    enum: Object.values(CartStatusEnum)
  },
  sum: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  timestamps: true
});

export const CartModel: Model<CartType> = model<CartType>(TableNamesEnum.CART, CartSchema);
