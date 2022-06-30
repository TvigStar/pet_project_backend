"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductToCartValidatorMiddleware = void 0;
var validators_1 = require("../../validators");
var errors_1 = require("../../errors");
var constants_1 = require("../../constants");
var addProductToCartValidatorMiddleware = function (req, res, next) {
    var error = validators_1.addProductToCartValidator.validate(req.product).error;
    console.log(error);
    if (error) {
        return next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.BAD_REQUEST, error.details[0].message));
    }
    next();
};
exports.addProductToCartValidatorMiddleware = addProductToCartValidatorMiddleware;
//# sourceMappingURL=add-product-to-cart-validation.middleware.js.map