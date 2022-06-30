import { Router } from 'express';

import { cartController } from '../../controller';
import {
  checkAccessTokenMiddleware,
  checkIsUserConfirmedMiddleware, isProductExistsMiddleware
} from '../../middlewares';

const router = Router();

router.use(checkAccessTokenMiddleware, checkIsUserConfirmedMiddleware);

router.get('/proceed', cartController.getUserCart);

router.post('/products/:productId', isProductExistsMiddleware,
  // addProductToCartValidatorMiddleware,
  cartController.addProductToCart);

export const cartRouter = router;
