"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenizer = void 0;
var jwt = require("jsonwebtoken");
var constants_1 = require("../constants");
var errors_1 = require("../errors");
var config_1 = require("../config");
var tokenizer = function (action) {
    var access_token = '';
    var refresh_token = '';
    switch (action) {
        case constants_1.ActionEnum.USER_AUTH:
            access_token = jwt.sign({}, config_1.config.JWT_SECRET, { expiresIn: config_1.config.ACCESS_TOKEN_LIFETIME });
            refresh_token = jwt.sign({}, config_1.config.JWT_REFRESH_SECRET, { expiresIn: config_1.config.REFRESH_TOKEN_LIFETIME });
            break;
        case constants_1.ActionEnum.USER_REGISTER:
            access_token = jwt.sign({}, config_1.config.JWT_CONFIRM_EMAIL_SECRET, { expiresIn: config_1.config.JWT_CONFIRM_EMAIL_LIFETIME });
            break;
        case constants_1.ActionEnum.FORGOT_PASSWORD:
            access_token = jwt.sign({}, config_1.config.JWT_PASS_RESET_SECRET, { expiresIn: config_1.config.JWT_PASS_RESET_LIFETIME });
            break;
        default:
            throw new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.SERVER, 'wrong action type');
    }
    return {
        access_token: access_token,
        refresh_token: refresh_token
    };
};
exports.tokenizer = tokenizer;
//# sourceMappingURL=tokenizer.js.map