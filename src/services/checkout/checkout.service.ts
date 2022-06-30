import { ICart, ICheckout, IUser } from '../../models';
import { CartModel, CheckoutModel } from '../../database';
import { Types } from 'mongoose';
import { CartStatusEnum, CheckoutStatusEnum } from '../../constants';

class CheckoutService {
  createCheckout(checkout: Partial<ICheckout>): Promise<ICheckout> {
    const cartToCreate = new CheckoutModel(checkout);

    return cartToCreate.save();
  }

  findUserProceedCheckout(userId: Types.ObjectId): Promise<ICheckout> {
    return CheckoutModel.findOne({
      status: CheckoutStatusEnum.IN_PROGRESS,
      userId
    }).exec();
  }

  findCartByParams(user: IUser, cartId: ICart): Promise<ICart> {
    return CartModel.findOne({
      userId: user,
      status: CartStatusEnum.IN_PROGRESS,
      _id: cartId
    }).exec();
  }

}

export const checkoutService = new CheckoutService();
