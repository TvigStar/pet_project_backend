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
exports.userController = void 0;
var services_1 = require("../../services");
var helpers_1 = require("../../helpers");
var constants_1 = require("../../constants");
var errors_1 = require("../../errors");
var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.createUser = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var user, _a, _id, access_token, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        user = req.body;
                        _a = user;
                        return [4, (0, helpers_1.hashPassword)(user.password)];
                    case 1:
                        _a.password = _b.sent();
                        return [4, services_1.userService.createUser(user)];
                    case 2:
                        _id = (_b.sent())._id;
                        access_token = (0, helpers_1.tokenizer)(constants_1.ActionEnum.USER_REGISTER).access_token;
                        return [4, services_1.userService.addActionToken(_id, { action: constants_1.ActionEnum.USER_REGISTER, token: access_token })];
                    case 3:
                        _b.sent();
                        return [4, services_1.emailService.sendEmail(user.email, constants_1.ActionEnum.USER_REGISTER, { token: access_token })];
                    case 4:
                        _b.sent();
                        return [4, services_1.logService.createLog({ event: constants_1.LogsEnum.USER_REGISTERED, userId: _id })];
                    case 5:
                        _b.sent();
                        res.sendStatus(constants_1.ResponseStatusCodesEnum.CREATED);
                        return [3, 7];
                    case 6:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3, 7];
                    case 7: return [2];
                }
            });
        });
    };
    UserController.prototype.confirmUser = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _id, status, _b, token, tokenToDelete, index;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = req.user, _id = _a._id, status = _a.status, _b = _a.token, token = _b === void 0 ? [] : _b;
                        tokenToDelete = req.get(constants_1.RequestHeadersEnum.AUTHORIZATION);
                        console.log(status, _id, token);
                        if (status !== constants_1.UserStatus.PENDING) {
                            throw new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.BAD_REQUEST, errors_1.customErrors.BAD_REQUEST_USER_ACTIVATED.message, errors_1.customErrors.BAD_REQUEST_USER_ACTIVATED.customCode);
                        }
                        return [4, services_1.userService.updateUserByParams({ _id: _id }, { status: constants_1.UserStatus.CONFIRMED })];
                    case 1:
                        _c.sent();
                        index = token.findIndex(function (_a) {
                            var action = _a.action, token = _a.token;
                            return token === tokenToDelete && action === constants_1.ActionEnum.USER_REGISTER;
                        });
                        if (!(index !== -1)) return [3, 4];
                        token.splice(index, 1);
                        return [4, services_1.userService.updateUserByParams({ _id: _id }, { token: token })];
                    case 2:
                        _c.sent();
                        return [4, services_1.logService.createLog({ event: constants_1.LogsEnum.USER_CONFIRMED, userId: _id })];
                    case 3:
                        _c.sent();
                        res.end();
                        _c.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    UserController.prototype.forgotPassword = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _id, email, access_token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.user, _id = _a._id, email = _a.email;
                        access_token = (0, helpers_1.tokenizer)(constants_1.ActionEnum.FORGOT_PASSWORD).access_token;
                        return [4, services_1.userService.addActionToken(_id, { token: access_token, action: constants_1.ActionEnum.FORGOT_PASSWORD })];
                    case 1:
                        _b.sent();
                        return [4, services_1.emailService.sendEmail(email, constants_1.ActionEnum.FORGOT_PASSWORD, { token: access_token })];
                    case 2:
                        _b.sent();
                        res.end();
                        return [2];
                }
            });
        });
    };
    UserController.prototype.setForgotPass = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _id, _b, token, password, tokenToDelete, hashPass, index;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = req.user, _id = _a._id, _b = _a.token, token = _b === void 0 ? [] : _b;
                        password = req.body.password;
                        tokenToDelete = req.get(constants_1.RequestHeadersEnum.AUTHORIZATION);
                        return [4, (0, helpers_1.hashPassword)(password)];
                    case 1:
                        hashPass = _c.sent();
                        return [4, services_1.userService.updateUserByParams({ _id: _id }, { password: hashPass })];
                    case 2:
                        _c.sent();
                        index = token.findIndex(function (_a) {
                            var action = _a.action, token = _a.token;
                            return token === tokenToDelete && action === constants_1.ActionEnum.FORGOT_PASSWORD;
                        });
                        if (!(index !== -1)) return [3, 4];
                        token.splice(index, 1);
                        return [4, services_1.userService.updateUserByParams({ _id: _id }, { token: token })];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        res.end();
                        return [2];
                }
            });
        });
    };
    return UserController;
}());
exports.userController = new UserController();
//# sourceMappingURL=user.controller.js.map