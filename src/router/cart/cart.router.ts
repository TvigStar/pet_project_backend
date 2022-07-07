import { Router } from 'express';

import { cartController } from '../../controller';
import {
  checkAccessTokenMiddleware,
  checkIsUserConfirmedMiddleware, isProductExistsMiddleware
} from '../../middlewares';

const router = Router();

router.use(checkAccessTokenMiddleware, checkIsUserConfirmedMiddleware);

router.get('/', cartController.getUserCart);

router.post('/products/:productId', isProductExistsMiddleware,
  cartController.addProductToCart);

router.delete('/delete/:cartId', cartController.deleteCart);
export const cartRouter = router;
