"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
        return __awaiter(this, void 0, void 0, function () {
            var productIndex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productIndex = userCart.products.findIndex(function (value) {
                            return product._id.toString() === value.productId._id.toString();
                        });
                        if (productIndex !== -1) {
                            userCart.products[productIndex].count += productCount;
                        }
                        else {
                            userCart.products.push({
                                count: productCount,
                                productId: product,
                                price: product.price
                            });
                        }
                        userCart.sum = (0, helpers_1.calculateCartPrice)(userCart.products);
                        return [4, this.updateCart(userCart._id, userCart)];
                    case 1:
                        _a.sent();
                        return [2, userCart];
                }
            });
        });
    };
    CartService.prototype.findUserProceedCart = function (userId) {
        return database_1.CartModel.findOne({
            status: constants_1.CartStatusEnum.IN_PROGRESS,
            userId: userId
        })
            .populate('products.productId')
            .exec();
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