"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
var express_1 = require("express");
var controller_1 = require("../../controller");
var middlewares_1 = require("../../middlewares");
var middlewares_2 = require("../../middlewares");
var router = (0, express_1.Router)();
router.post('/', middlewares_1.checkAccessTokenMiddleware, middlewares_2.newProductValidatorMiddleware, controller_1.productController.createProduct);
exports.productRouter = router;
//# sourceMappingURL=product.router.js.map