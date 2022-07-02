"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
var database_1 = require("../../database");
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.createProduct = function (product) {
        var productToSave = new database_1.ProductModel(product);
        return productToSave.save();
    };
    ProductService.prototype.updateProductById = function (_id, updateObject) {
        return database_1.ProductModel.findOneAndUpdate({ _id: _id }, updateObject).exec();
    };
    ProductService.prototype.findProductById = function (productId) {
        return database_1.ProductModel.findById(productId).exec();
    };
    ProductService.prototype.findAllProducts = function (product) {
        return database_1.ProductModel.find({});
    };
    return ProductService;
}());
exports.productService = new ProductService();
//# sourceMappingURL=product.service.js.map