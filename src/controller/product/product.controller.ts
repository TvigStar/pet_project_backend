import { IRequestExtended, IUser } from '../../models';
import { NextFunction, Response } from 'express';
import { logService, productService } from '../../services';
import { LogsEnum } from '../../constants';

class ProductController {
  async createProduct(req: IRequestExtended, res: Response, next: NextFunction) {
    try {
      const {_id} = req.user as IUser;
      const product = req.body;

      const newProduct = await productService.createProduct({...product, userId: _id});
      await logService.createLog({
        event: LogsEnum.PRODUCT_CREATED,
        userId: _id,
        data: {productId: _id, title: newProduct.title}
      });
      res.json(newProduct);
    } catch (err) {
      next(err);
    }
  }
}

export const productController = new ProductController();