"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singlePasswordValidatorMiddleware = void 0;
var validators_1 = require("../../validators");
var errors_1 = require("../../errors");
var constants_1 = require("../../constants");
var singlePasswordValidatorMiddleware = function (req, res, next) {
    var error = validators_1.singlePasswordValidator.validate(req.body).error;
    if (error) {
        return next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.BAD_REQUEST, error.details[0].message));
    }
    next();
};
exports.singlePasswordValidatorMiddleware = singlePasswordValidatorMiddleware;
//# sourceMappingURL=single.password.validator.middleware.js.map