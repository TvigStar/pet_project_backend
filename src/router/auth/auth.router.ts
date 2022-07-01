import { Router } from 'express';
import { authController } from '../../controller';
import {
  checkAccessTokenMiddleware,
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

router.post('/logout', checkAccessTokenMiddleware, authController.logoutUser);

export const authRouter = router;
