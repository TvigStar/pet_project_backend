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
exports.cartController = void 0;
var services_1 = require("../../services");
var errors_1 = require("../../errors");
var constants_1 = require("../../constants");
var CartController = (function () {
    function CartController() {
    }
    CartController.prototype.addProductToCart = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, product, count, userCart, iCart, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        userId = req.user._id;
                        product = req.product;
                        count = req.body.count;
                        if (product.stockCount < count && count > 0) {
                            return [2, next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.BAD_REQUEST, errors_1.customErrors.BAD_REQUEST_WRONG_PRODUCT_COUNT.message))];
                        }
                        return [4, services_1.cartService.findUserProceedCart(userId)];
                    case 1:
                        userCart = _a.sent();
                        if (!!userCart) return [3, 3];
                        return [4, services_1.cartService.createCart({ userId: userId })];
                    case 2:
                        userCart = _a.sent();
                        _a.label = 3;
                    case 3: return [4, services_1.cartService.addProductToCart(userCart, product, count)];
                    case 4:
                        iCart = _a.sent();
                        return [4, services_1.productService.updateProductById(product._id, { stockCount: product.stockCount - count })];
                    case 5:
                        _a.sent();
                        res.json(iCart);
                        return [3, 7];
                    case 6:
                        err_1 = _a.sent();
                        next(err_1);
                        return [3, 7];
                    case 7: return [2];
                }
            });
        });
    };
    CartController.prototype.deleteProductFromCart = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, count, productId_1, userCart, product, products, productIndex, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        userId = req.user._id;
                        count = req.body.count;
                        productId_1 = req.params.productId;
                        if (count <= 0) {
                            console.log(count);
                            return [2, next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.BAD_REQUEST, errors_1.customErrors.BAD_REQUEST_WRONG_PRODUCT_COUNT.message))];
                        }
                        return [4, services_1.cartService.findUserProceedCart(userId)];
                    case 1:
                        userCart = _a.sent();
                        return [4, services_1.productService.findProductById(productId_1)];
                    case 2:
                        product = _a.sent();
                        if (!userCart) {
                            return [2, next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.NOT_FOUND, errors_1.customErrors.BAD_REQUEST_CART_NOT_FOUND.message))];
                        }
                        products = userCart.products;
                        productIndex = userCart.products.findIndex(function (obj) { return obj.productId._id.equals(productId_1); });
                        if (productIndex === -1 || count > products[productIndex].count) {
                            return [2, next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.BAD_REQUEST, errors_1.customErrors.BAD_REQUEST_WRONG_PRODUCT_COUNT.message))];
                        }
                        if (count === products[productIndex].count) {
                            products.splice(productIndex, 1);
                        }
                        else {
                            products[productIndex].count -= count;
                        }
                        console.log(userCart.products);
                        return [4, services_1.cartService.updateCart(userCart._id, userCart)];
                    case 3:
                        _a.sent();
                        console.log(555);
                        return [4, services_1.productService.updateProductById(product._id, { stockCount: product.stockCount + count })];
                    case 4:
                        _a.sent();
                        res.json(userCart);
                        return [3, 6];
                    case 5:
                        err_2 = _a.sent();
                        console.log(err_2);
                        next(err_2);
                        return [3, 6];
                    case 6: return [2];
                }
            });
        });
    };
    CartController.prototype.getUserCart = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, userCart, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userId = req.user._id;
                        return [4, services_1.cartService.findUserProceedCart(userId)];
                    case 1:
                        userCart = _a.sent();
                        res.json(userCart);
                        return [3, 3];
                    case 2:
                        err_3 = _a.sent();
                        next(err_3);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    CartController.prototype.deleteCart = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var cartId, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        cartId = req.params.cartId;
                        return [4, services_1.cartService.deleteCartById(cartId)];
                    case 1:
                        _a.sent();
                        res.end();
                        return [3, 3];
                    case 2:
                        err_4 = _a.sent();
                        next(err_4);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    return CartController;
}());
exports.cartController = new CartController();
//# sourceMappingURL=cart.controller.js.map