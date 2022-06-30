"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutModel = exports.CheckoutSchema = void 0;
var mongoose_1 = require("mongoose");
var constants_1 = require("../../constants");
exports.CheckoutSchema = new mongoose_1.Schema({
    cart: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: constants_1.TableNamesEnum.CART
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: constants_1.TableNamesEnum.USER
    },
    status: {
        type: String,
        required: true,
        default: constants_1.CheckoutStatusEnum.IN_PROGRESS,
        enum: Object.values(constants_1.CheckoutStatusEnum)
    }
}, {
    timestamps: true
});
exports.CheckoutModel = (0, mongoose_1.model)(constants_1.TableNamesEnum.CHECKOUT, exports.CheckoutSchema);
//# sourceMappingURL=checkout.schema.js.map