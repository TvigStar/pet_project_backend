"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailValidator = void 0;
var Joi = require("joi");
var constants_1 = require("../../constants");
exports.emailValidator = Joi.object({
    email: Joi.string().trim().regex(constants_1.RegExpEnum.email).required()
});
//# sourceMappingURL=email.validator.js.map