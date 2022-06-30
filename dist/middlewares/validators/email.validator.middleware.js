"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailValidatorMiddleware = void 0;
var validators_1 = require("../../validators");
var errors_1 = require("../../errors");
var constants_1 = require("../../constants");
var emailValidatorMiddleware = function (req, res, next) {
    try {
        var error = validators_1.emailValidator.validate(req.body).error;
        if (error) {
            throw new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.BAD_REQUEST, error.details[0].message);
        }
        next();
    }
    catch (err) {
        next(err);
    }
};
exports.emailValidatorMiddleware = emailValidatorMiddleware;
//# sourceMappingURL=email.validator.middleware.js.map