"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
var bcrypt = require("bcrypt");
var hashPassword = function (password) { return bcrypt.hash(password, 10); };
exports.hashPassword = hashPassword;
var comparePassword = function (password, hash) { return bcrypt.compare(password, hash); };
exports.comparePassword = comparePassword;
//# sourceMappingURL=password-hasher.helper.js.map