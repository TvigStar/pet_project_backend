"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCartPrice = void 0;
var calculateCartPrice = function (cartProducts) {
    return cartProducts.reduce(function (previousValue, currentValue) {
        previousValue += currentValue.price * currentValue.count;
        return previousValue;
    }, 0);
};
exports.calculateCartPrice = calculateCartPrice;
//# sourceMappingURL=calculate-cart-price.helper.js.map