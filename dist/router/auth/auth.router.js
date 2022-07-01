"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
var express_1 = require("express");
var controller_1 = require("../../controller");
var middlewares_1 = require("../../middlewares");
var router = (0, express_1.Router)();
router.post('/signin', middlewares_1.emailPasswordValidatorMiddleware, middlewares_1.checkIsUserExistByEmailMiddleware, middlewares_1.checkIsUserConfirmedMiddleware, controller_1.authController.authUser);
router.post('/refresh');
router.post('/logout', middlewares_1.checkAccessTokenMiddleware, controller_1.authController.logoutUser);
exports.authRouter = router;
//# sourceMappingURL=auth.router.js.map