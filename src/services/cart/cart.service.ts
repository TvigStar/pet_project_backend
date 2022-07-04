import { ICart, ICartProduct, IProduct } from '../../models';
import { CartModel } from '../../database';
import { Types } from 'mongoose';
import { CartStatusEnum } from '../../constants';
import { calculateCartPrice } from '../../helpers';

class CartService {
  createCart(cart: Partial<ICart>): Promise<ICart> {
    const cartToCreate = new CartModel(cart);

    return cartToCreate.save();
  }

  async addProductToCart(userCart: ICart, product: IProduct, productCount: number): Promise<ICart | null> {
    const productIndex = userCart.products.findIndex((value: ICartProduct) => {
      return product._id.toString() === value.productId.toString();
    });

    if (productIndex !== -1) {
      userCart.products[productIndex].count += productCount;
    } else {
      userCart.products.push({
        count: productCount,
        productId: product,
        price: product.price
      });
    }

    userCart.sum = calculateCartPrice(userCart.products);

    await this.updateCart(userCart._id, userCart);

    return userCart;
  }

  findUserProceedCart(userId: Types.ObjectId): Promise<ICart> {
    return CartModel.findOne({
      status: CartStatusEnum.IN_PROGRESS,
      userId
    })
      .populate('products.productId')
      .exec();
  }

  updateCart(_id: Types.ObjectId, cartToUpdate: ICart): Promise<ICart | null> {
    return CartModel.findOneAndUpdate({_id}, cartToUpdate, {new: true}).exec();
  }

  getCartsByParams(findObject: Partial<ICart>): Promise<ICart[]> {
    return CartModel.find(findObject).exec();
  }

  deleteCartById(_id: string) {
    return CartModel.findByIdAndRemove(_id);
  }

}

export const cartService = new CartService();
