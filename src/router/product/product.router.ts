import { Router } from 'express';
import { productController } from '../../controller';
import { checkAccessTokenMiddleware,
  checkFileMiddleware
} from '../../middlewares';
import { newProductValidatorMiddleware } from '../../middlewares';

const router = Router();

router.get('/', productController.getAllProduct);
router.post('/create',
  checkAccessTokenMiddleware,
  newProductValidatorMiddleware ,
  checkFileMiddleware,
  productController.createProduct);

export const productRouter = router;
