"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsUserConfirmedMiddleware = void 0;
var errors_1 = require("../../errors");
var constants_1 = require("../../constants");
var checkIsUserConfirmedMiddleware = function (req, res, next) {
    var status = req.user.status;
    if (status !== constants_1.UserStatus.CONFIRMED) {
        return next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.FORBIDDEN, errors_1.customErrors.FORBIDDEN_USER_NOT_CONFIRMED.message, errors_1.customErrors.FORBIDDEN_USER_NOT_CONFIRMED.code));
    }
    next();
};
exports.checkIsUserConfirmedMiddleware = checkIsUserConfirmedMiddleware;
//# sourceMappingURL=checkIsUserConfirmed.js.map