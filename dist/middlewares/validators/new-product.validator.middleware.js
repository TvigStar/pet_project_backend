"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newProductValidatorMiddleware = void 0;
var validators_1 = require("../../validators");
var errors_1 = require("../../errors");
var constants_1 = require("../../constants");
var newProductValidatorMiddleware = function (req, res, next) {
    var error = validators_1.newProductValidator.validate(req.body).error;
    if (error) {
        return next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.BAD_REQUEST, error.details[0].message));
    }
    next();
};
exports.newProductValidatorMiddleware = newProductValidatorMiddleware;
//# sourceMappingURL=new-product.validator.middleware.js.map