import { Router } from 'express';
import { authController } from '../../controller';
import {
  checkIsUserConfirmedMiddleware,
  checkIsUserExistByEmailMiddleware, emailPasswordValidatorMiddleware
} from '../../middlewares';

const router = Router();

router.post('/signin',
  emailPasswordValidatorMiddleware,
  checkIsUserExistByEmailMiddleware,
  checkIsUserConfirmedMiddleware,
  authController.authUser);

router.post('/refresh', authController.refreshToken);

router.post('/logout', authController.logoutUser);

export const authRouter = router;
