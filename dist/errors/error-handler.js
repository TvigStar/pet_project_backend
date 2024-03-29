"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
var ErrorHandler = (function (_super) {
    __extends(ErrorHandler, _super);
    function ErrorHandler(status, message, code) {
        var _this = _super.call(this, message) || this;
        _this.name = 'Controller Error';
        _this.status = status;
        _this.code = code;
        Error.captureStackTrace(_this);
        return _this;
    }
    return ErrorHandler;
}(Error));
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=error-handler.js.map