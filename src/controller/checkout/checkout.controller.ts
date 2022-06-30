import { NextFunction, Response } from 'express';
import { IRequestExtended } from '../../models';
import { checkoutService } from '../../services/checkout';
import { customErrors, ErrorHandler } from '../../errors';
import { CartStatusEnum, CheckoutStatusEnum, ResponseStatusCodesEnum } from '../../constants';
import { cartService } from '../../services';

class CheckoutController {
  async addCartToCheckout(req: IRequestExtended, res: Response, next: NextFunction) {
    try {
      const {cartId} = req.body;

      const cart = await checkoutService.findCartByParams(req.user, cartId);

      if (!cart) {
        return next(new ErrorHandler(ResponseStatusCodesEnum.NOT_FOUND, customErrors.BAD_REQUEST_CART_NOT_FOUND.message));
      }

      await checkoutService.createCheckout({
        cart: cart._id,
        status: CheckoutStatusEnum.IN_PROGRESS,
        userId: req.user._id
      });

      cart.status = CartStatusEnum.SOLD;
      await cartService.updateCart(cart._id, cart);

      res.sendStatus(ResponseStatusCodesEnum.CREATED);
    } catch (err) {
      next(err);
    }
  }
}

export const checkoutController = new CheckoutController();
