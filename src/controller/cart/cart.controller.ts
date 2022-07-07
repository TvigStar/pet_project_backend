import { NextFunction, Request, Response } from 'express';
import { ICart, IProduct, IRequestExtended, IUser } from '../../models';
import { cartService, productService } from '../../services';
import { customErrors, ErrorHandler } from '../../errors';
import { ResponseStatusCodesEnum } from '../../constants';

class CartController {
  async addProductToCart(req: IRequestExtended, res: Response, next: NextFunction) {
    try {
      const {_id: userId} = req.user as IUser;
      const product = req.product as IProduct;
      const {count} = req.body;

      if (product.stockCount < count) {
        return next(new ErrorHandler(
          ResponseStatusCodesEnum.BAD_REQUEST,
          customErrors.BAD_REQUEST_WRONG_PRODUCT_COUNT.message
        ));
      }

      let userCart = await cartService.findUserProceedCart(userId);

      if (!userCart) {
        userCart = await cartService.createCart({userId});
      }

      const iCart = await cartService.addProductToCart(userCart, product, count);

      await productService.updateProductById(product._id, {stockCount: product.stockCount - count});

      res.json(iCart);
    } catch (err) {
      next(err);
    }
  }

  async getUserCart(req: IRequestExtended, res: Response, next: NextFunction) {
    try {
      const {_id: userId} = req.user as IUser;

      const userCart = await cartService.findUserProceedCart(userId);

      res.json(userCart);
    } catch (err) {
      next(err);
    }
  }

  async deleteCart(req: Request, res: Response, next: NextFunction){
    try {
      const {cartId}= req.params;
      await cartService.deleteCartById(cartId);
      res.end()
    } catch (err){
      next(err);
    }
  }
}

export const cartController = new CartController();
