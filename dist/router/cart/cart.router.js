"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRouter = void 0;
var express_1 = require("express");
var controller_1 = require("../../controller");
var middlewares_1 = require("../../middlewares");
var router = (0, express_1.Router)();
router.use(middlewares_1.checkAccessTokenMiddleware, middlewares_1.checkIsUserConfirmedMiddleware);
router.get('/', controller_1.cartController.getUserCart);
router.post('/products/:productId', middlewares_1.isProductExistsMiddleware, controller_1.cartController.addProductToCart);
router.patch('/products/:productId', controller_1.cartController.deleteProductFromCart);
router.delete('/:cartId', controller_1.cartController.deleteCart);
exports.cartRouter = router;
//# sourceMappingURL=cart.router.js.map