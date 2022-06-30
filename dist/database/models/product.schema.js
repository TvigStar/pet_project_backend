"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = exports.ProductSchema = void 0;
var mongoose_1 = require("mongoose");
var constants_1 = require("../../constants");
exports.ProductSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    hasDiscount: {
        type: Boolean,
        required: false,
        default: false
    },
    oldPrice: {
        type: Number,
        required: false
    },
    tags: {
        type: [String],
        required: false
    },
    photos: {
        type: [String],
        required: false
    },
    docs: {
        type: [String],
        required: false
    },
    stockCount: {
        type: Number,
        required: true,
        default: 0
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: constants_1.TableNamesEnum.USER
    }
}, {
    timestamps: true
});
exports.ProductModel = (0, mongoose_1.model)(constants_1.TableNamesEnum.PRODUCTS, exports.ProductSchema);
//# sourceMappingURL=product.schema.js.map