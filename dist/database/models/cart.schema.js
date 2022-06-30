"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModel = exports.CartSchema = void 0;
var mongoose_1 = require("mongoose");
var constants_1 = require("../../constants");
var productSubModel = {
    productId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: false
    }
};
exports.CartSchema = new mongoose_1.Schema({
    products: [productSubModel],
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: constants_1.TableNamesEnum.USER
    },
    status: {
        type: String,
        required: true,
        default: constants_1.CartStatusEnum.IN_PROGRESS,
        enum: Object.values(constants_1.CartStatusEnum)
    },
    sum: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
});
exports.CartModel = (0, mongoose_1.model)(constants_1.TableNamesEnum.CART, exports.CartSchema);
//# sourceMappingURL=cart.schema.js.map