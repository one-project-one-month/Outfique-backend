"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const logger_1 = require("../utils/logger");
const database_error_handler_1 = require("../database/database-error-handler");
const errorHandler = (error, req, res, next) => {
    let statusCode = 500;
    let message = 'Internal Server Error';
    // Handle  custom database errors from prosma
    if (error instanceof database_error_handler_1.BadRequestError) {
        statusCode = 400;
        message = error.message;
    }
    else if (error instanceof database_error_handler_1.ConflictError) {
        statusCode = 409;
        message = error.message;
    }
    else if (error instanceof database_error_handler_1.NotFoundError) {
        statusCode = 404;
        message = error.message;
    }
    else if (error.statusCode) {
        statusCode = error.statusCode;
        message = error.message;
    }
    else if (error.message) {
        message = error.message;
    }
    logger_1.logger.error('Request failed', {
        error: message,
        stack: error.stack,
        method: req.method,
        url: req.originalUrl,
        statusCode,
        ip: req.ip,
        userAgent: req.get('User-Agent'),
    });
    res.status(statusCode).json({
        success: false,
        error: Object.assign({ message }, (process.env.NODE_ENV === 'development' && { stack: error.stack })),
    });
};
exports.errorHandler = errorHandler;
