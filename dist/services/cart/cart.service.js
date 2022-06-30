"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartService = void 0;
var database_1 = require("../../database");
var constants_1 = require("../../constants");
var helpers_1 = require("../../helpers");
var CartService = (function () {
    function CartService() {
    }
    CartService.prototype.createCart = function (cart) {
        var cartToCreate = new database_1.CartModel(cart);
        return cartToCreate.save();
    };
    CartService.prototype.addProductToCart = function (userCart, product, productCount) {
        var productIndex = userCart.products.findIndex(function (value) {
            return product._id.toString() === value.productId.toString();
        });
        if (productIndex !== -1) {
            userCart.products[productIndex].count += productCount;
        }
        else {
            userCart.products.push({
                count: productCount,
                productId: product._id,
                price: product.price
            });
        }
        userCart.sum = (0, helpers_1.calculateCartPrice)(userCart.products);
        return this.updateCart(userCart._id, userCart);
    };
    CartService.prototype.findUserProceedCart = function (userId) {
        return database_1.CartModel.findOne({
            status: constants_1.CartStatusEnum.IN_PROGRESS,
            userId: userId
        }).exec();
    };
    CartService.prototype.updateCart = function (_id, cartToUpdate) {
        return database_1.CartModel.findOneAndUpdate({ _id: _id }, cartToUpdate, { new: true }).exec();
    };
    CartService.prototype.getCartsByParams = function (findObject) {
        return database_1.CartModel.find(findObject).exec();
    };
    CartService.prototype.deleteCartById = function (_id) {
        return database_1.CartModel.findByIdAndRemove(_id);
    };
    return CartService;
}());
exports.cartService = new CartService();
//# sourceMappingURL=cart.service.js.map