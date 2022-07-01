import { Router } from 'express';
import { userController } from '../../controller';
import {
  checkConfirmTokenMiddleware,
  checkIsEmailExistMiddleware, checkIsUserExistByEmailMiddleware,
  checkIsUserValidMiddleware,
  emailValidatorMiddleware, singlePasswordValidatorMiddleware
} from '../../middlewares';
import { checkForgotPassTokenMiddleware } from '../../middlewares';

const router = Router();

router.post('/register', checkIsUserValidMiddleware, checkIsEmailExistMiddleware, userController.createUser);
router.post('/confirm', checkConfirmTokenMiddleware, userController.confirmUser);
router.post('/password/forgot',
  emailValidatorMiddleware,
  checkIsUserExistByEmailMiddleware,
  userController.forgotPassword);
router.post('/password/reset',
  singlePasswordValidatorMiddleware,
  checkForgotPassTokenMiddleware,
  userController.setForgotPass);

export const userRouter = router;

