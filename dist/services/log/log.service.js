"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logService = void 0;
var database_1 = require("../../database");
var LogService = (function () {
    function LogService() {
    }
    LogService.prototype.createLog = function (log) {
        var logToCreate = new database_1.LogModel(log);
        return logToCreate.save();
    };
    return LogService;
}());
exports.logService = new LogService();
//# sourceMappingURL=log.service.js.map