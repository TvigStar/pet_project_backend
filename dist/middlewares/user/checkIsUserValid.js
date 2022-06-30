"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsUserValidMiddleware = void 0;
var validators_1 = require("../../validators");
var checkIsUserValidMiddleware = function (req, res, next) {
    var error = validators_1.newUserValidator.validate(req.body).error;
    if (error) {
        return next(new Error(error.details[0].message));
    }
    next();
};
exports.checkIsUserValidMiddleware = checkIsUserValidMiddleware;
//# sourceMappingURL=checkIsUserValid.js.map