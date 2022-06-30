"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singlePasswordValidator = void 0;
var Joi = require("joi");
var constants_1 = require("../../constants");
exports.singlePasswordValidator = Joi.object({
    password: Joi.string().trim().regex(constants_1.RegExpEnum.password).required()
});
//# sourceMappingURL=single-password.validator.js.map