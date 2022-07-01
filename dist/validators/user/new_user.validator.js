"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUserValidator = void 0;
var Joi = require("joi");
var constants_1 = require("../../constants");
exports.newUserValidator = Joi.object({
    name: Joi.string().trim().max(25).min(2).required(),
    surname: Joi.string().max(2).max(30),
    email: Joi.string().trim().regex(constants_1.RegExpEnum.email).required(),
    password: Joi.string().trim().regex(constants_1.RegExpEnum.password).required(),
    age: Joi.number().min(6).max(120).integer(),
    phone: Joi.string().trim().regex(constants_1.RegExpEnum.phone),
    gender: Joi.string().trim().allow('male', 'female')
});
//# sourceMappingURL=new_user.validator.js.map