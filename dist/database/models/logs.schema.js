"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogModel = exports.LogSchema = void 0;
var mongoose_1 = require("mongoose");
var constants_1 = require("../../constants");
exports.LogSchema = new mongoose_1.Schema({
    event: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    data: mongoose_1.Schema.Types.Mixed
}, {
    timestamps: true
});
exports.LogModel = (0, mongoose_1.model)(constants_1.TableNamesEnum.LOGS, exports.LogSchema);
//# sourceMappingURL=logs.schema.js.map