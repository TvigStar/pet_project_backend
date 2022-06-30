"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutRouter = void 0;
var express_1 = require("express");
var controller_1 = require("../../controller");
var middlewares_1 = require("../../middlewares");
var router = (0, express_1.Router)();
router.post('/', middlewares_1.checkAccessTokenMiddleware, controller_1.checkoutController.addCartToCheckout);
exports.checkoutRouter = router;
//# sourceMappingURL=checkout.router.js.map