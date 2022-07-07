"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newProductValidator = void 0;
var Joi = require("joi");
exports.newProductValidator = Joi.object({
    title: Joi.string().trim().min(2).max(99).required(),
    description: Joi.string().trim().min(2).max(9999).required(),
    type: Joi.string().trim().min(2).max(15).required(),
    category: Joi.string().trim().min(2).max(50),
    price: Joi.number().min(0.1).max(999999).required(),
    hasDiscount: Joi.boolean(),
    stockCount: Joi.number().min(1).max(1000).integer().positive().required(),
    oldPrice: Joi.number().min(0.1).max(999999)
        .when('hasDiscount', { is: true, then: Joi.required() }),
    tags: Joi.array().items(Joi.string().trim().min(1).max(50))
});
//# sourceMappingURL=new-product.validator.js.map