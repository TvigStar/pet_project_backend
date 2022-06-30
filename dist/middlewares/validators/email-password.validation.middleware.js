"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailPasswordValidatorMiddleware = void 0;
var validators_1 = require("../../validators");
var errors_1 = require("../../errors");
var constants_1 = require("../../constants");
var emailPasswordValidatorMiddleware = function (req, res, next) {
    var error = validators_1.emailPasswordValidator.validate(req.body).error;
    if (error) {
        return next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.BAD_REQUEST, error.details[0].message));
    }
    next();
};
exports.emailPasswordValidatorMiddleware = emailPasswordValidatorMiddleware;
//# sourceMappingURL=email-password.validation.middleware.js.map