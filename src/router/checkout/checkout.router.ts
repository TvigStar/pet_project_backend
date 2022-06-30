import { Router } from 'express';
import { checkoutController} from '../../controller';
import { checkAccessTokenMiddleware } from '../../middlewares';

const router = Router();

router.post('/', checkAccessTokenMiddleware, checkoutController.addCartToCheckout);

export const checkoutRouter = router;
