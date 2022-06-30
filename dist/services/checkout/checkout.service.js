"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutService = void 0;
var database_1 = require("../../database");
var constants_1 = require("../../constants");
var CheckoutService = (function () {
    function CheckoutService() {
    }
    CheckoutService.prototype.createCheckout = function (checkout) {
        var cartToCreate = new database_1.CheckoutModel(checkout);
        return cartToCreate.save();
    };
    CheckoutService.prototype.findUserProceedCheckout = function (userId) {
        return database_1.CheckoutModel.findOne({
            status: constants_1.CheckoutStatusEnum.IN_PROGRESS,
            userId: userId
        }).exec();
    };
    CheckoutService.prototype.findCartByParams = function (user, cartId) {
        return database_1.CartModel.findOne({
            userId: user,
            status: constants_1.CartStatusEnum.IN_PROGRESS,
            _id: cartId
        }).exec();
    };
    return CheckoutService;
}());
exports.checkoutService = new CheckoutService();
//# sourceMappingURL=checkout.service.js.map