"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_rate_limit_1 = require("express-rate-limit");
var cors = require("cors");
var express = require("express");
var dotenv = require("dotenv");
var morgan = require("morgan");
var helmet = require("helmet");
var fileUpload = require("express-fileupload");
var path = require("path");
var mongoose = require("mongoose");
var config_1 = require("./config");
var router_1 = require("./router");
var constants_1 = require("./constants");
dotenv.config();
var serverRequestLimit = (0, express_rate_limit_1.default)({
    windowMs: config_1.config.serverRateLimits.period,
    max: config_1.config.serverRateLimits.maxRequests
});
var App = (function () {
    function App() {
        this.app = express();
        this.configureCors = function (origin, callback) {
            var whiteList = config_1.config.ALLOWED_ORIGIN.split(',');
            if (!origin) {
                return callback(null, true);
            }
            if (!whiteList.includes(origin)) {
                return callback(new Error('Cors not allowed'));
            }
            return callback(null, true);
        };
        global.appRoot = path.resolve(process.cwd(), '../');
        this.app.use(morgan('dev'));
        this.app.use(helmet.default());
        this.app.use(serverRequestLimit);
        this.app.use(cors({
            origin: this.configureCors
        }));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(fileUpload({
            limits: { fileSize: 5 * 1024 * 1024 }
        }));
        this.app.use(express.static(path.resolve(global.appRoot, 'public')));
        this.mountRoutes();
        this.setupDB();
        this.app.use(this.customErrorHandler);
    }
    App.prototype.setupDB = function () {
        mongoose.connect(config_1.config.MONGODB_URL);
        var db = mongoose.connection;
        db.on('error', console.log.bind(console, 'MONGO ERROR'));
    };
    App.prototype.customErrorHandler = function (err, req, res, next) {
        res
            .status(err.status || constants_1.ResponseStatusCodesEnum.SERVER)
            .json({
            message: err.message || 'Unknown Error',
            code: err.code
        });
    };
    App.prototype.mountRoutes = function () {
        this.app.use('/auth', router_1.authRouter);
        this.app.use('/products', router_1.productRouter);
        this.app.use('/users', router_1.userRouter);
        this.app.use('/cart', router_1.cartRouter);
        this.app.use('/checkout', router_1.checkoutRouter);
    };
    return App;
}());
exports.app = new App().app;
//# sourceMappingURL=app.js.map