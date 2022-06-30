"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
var constants_1 = require("../../constants");
var tokenSubModel = {
    token: String,
    action: String
};
exports.UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: false
    },
    photo: {
        type: String
    },
    status: {
        type: String,
        required: true,
        default: constants_1.UserStatus.PENDING
    },
    token: [tokenSubModel],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
exports.UserModel = (0, mongoose_1.model)(constants_1.TableNamesEnum.USER, exports.UserSchema);
//# sourceMappingURL=user.schema.js.map