"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const helmet_1 = __importDefault(require("helmet"));
const log_formats_1 = require("./configs/log-formats");
const logger_1 = require("./utils/logger");
const error_handler_1 = require("./middleware/error-handler");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)(log_formats_1.accessLogFormat));
const API_VERSION = process.env.API_VERSION || 'v1';
// Custom logging middleware using our structured logger
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const responseTime = Date.now() - start;
        logger_1.logger.request(req, res, responseTime);
    });
    next();
});
app.use(`/api/${API_VERSION}`, routes_1.default);
app.use(error_handler_1.errorHandler);
exports.default = app;
