"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlTemplates = void 0;
var constants_1 = require("../constants");
exports.htmlTemplates = (_a = {},
    _a[constants_1.ActionEnum.USER_REGISTER] = {
        subject: 'Welcome',
        templateFileName: 'userWelcome'
    },
    _a[constants_1.ActionEnum.FORGOT_PASSWORD] = {
        subject: 'wuups u lost your password',
        templateFileName: 'forgotPassword'
    },
    _a);
//# sourceMappingURL=index.js.map