"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductToCartValidator = void 0;
var Joi = require("joi");
exports.addProductToCartValidator = Joi.object({
    title: Joi.string().trim().max(99),
    type: Joi.string().trim().max(20),
    category: Joi.string().trim().max(50),
    priceGte: Joi.number().min(0).max(999999),
    priceLte: Joi.number().min(0).max(999999),
    hasDiscount: Joi.boolean(),
    tags: Joi.array()
});
//# sourceMappingURL=filter-product.validator.js.map