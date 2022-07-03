import { Router } from 'express';
import { productController } from '../../controller';
import { checkAccessTokenMiddleware } from '../../middlewares';
import { newProductValidatorMiddleware } from '../../middlewares';

const router = Router();

router.get('/', productController.getAllProduct);
router.post('/create', checkAccessTokenMiddleware,newProductValidatorMiddleware , productController.createProduct);

export const productRouter = router;
