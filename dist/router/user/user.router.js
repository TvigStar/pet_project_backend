"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = require("express");
var controller_1 = require("../../controller");
var middlewares_1 = require("../../middlewares");
var middlewares_2 = require("../../middlewares");
var router = (0, express_1.Router)();
router.post('/register', middlewares_1.checkIsUserValidMiddleware, middlewares_1.checkIsEmailExistMiddleware, controller_1.userController.createUser);
router.post('/confirm', middlewares_1.checkConfirmTokenMiddleware, controller_1.userController.confirmUser);
router.post('/password/forgot', middlewares_1.emailValidatorMiddleware, middlewares_1.checkIsUserExistByEmailMiddleware, controller_1.userController.forgotPassword);
router.post('/password/reset', middlewares_1.singlePasswordValidatorMiddleware, middlewares_2.checkForgotPassTokenMiddleware, controller_1.userController.setForgotPass);
exports.userRouter = router;
//# sourceMappingURL=user.router.js.map