"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailPasswordValidator = void 0;
var Joi = require("joi");
var constants_1 = require("../../constants");
exports.emailPasswordValidator = Joi.object({
    email: Joi.string().trim().regex(constants_1.RegExpEnum.email).required(),
    password: Joi.string().trim().regex(constants_1.RegExpEnum.password).required()
});
//# sourceMappingURL=emailAndPass.validator.js.map