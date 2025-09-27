"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = exports.responseData = void 0;
const responseData = ({ res, status = 200, message, data, }) => {
    res.status(status).json({
        status,
        message,
        data,
    });
};
exports.responseData = responseData;
class AppError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
exports.AppError = AppError;
