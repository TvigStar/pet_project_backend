"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
var database_1 = require("../../database");
var mongoose_1 = require("mongoose");
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.createUser = function (user) {
        var userToCraete = new database_1.UserModel(user);
        return userToCraete.save();
    };
    UserService.prototype.addActionToken = function (userId, tokenObject) {
        return database_1.UserModel.update({ _id: new mongoose_1.Types.ObjectId(userId) }, {
            $push: {
                token: tokenObject
            }
        });
    };
    UserService.prototype.updateUserByParams = function (params, update) {
        return database_1.UserModel.updateOne(params, update);
    };
    UserService.prototype.findOneByParams = function (findObject) {
        return database_1.UserModel.findOne(findObject);
    };
    UserService.prototype.findUserByActionToken = function (action, token) {
        return database_1.UserModel.findOne({
            $and: [
                { 'tokens.action': action },
                { 'tokens.token': token }
            ]
        });
    };
    UserService.prototype.removeActionToken = function (action, token) {
        return database_1.UserModel.update({}, {
            $pull: {
                $and: [
                    { 'tokens.token': token },
                    { 'tokens.action': action }
                ]
            }
        });
    };
    return UserService;
}());
exports.userService = new UserService();
//# sourceMappingURL=user.service.js.map