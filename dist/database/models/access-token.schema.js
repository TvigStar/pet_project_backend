"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenModel = exports.AccessTokenSchema = void 0;
var mongoose_1 = require("mongoose");
var constants_1 = require("../../constants");
exports.AccessTokenSchema = new mongoose_1.Schema({
    accessToken: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: constants_1.TableNamesEnum.USER
    }
}, {
    timestamps: true
});
exports.AccessTokenModel = (0, mongoose_1.model)(constants_1.TableNamesEnum.ACCESS_TOKEN, exports.AccessTokenSchema);
//# sourceMappingURL=access-token.schema.js.map