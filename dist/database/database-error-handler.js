"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePrismaError = exports.NotFoundError = exports.ConflictError = exports.BadRequestError = void 0;
const prisma_1 = require("../../generated/prisma");
class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 400;
        this.name = 'BadRequestError';
    }
}
exports.BadRequestError = BadRequestError;
class ConflictError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 409;
        this.name = 'ConflictError';
    }
}
exports.ConflictError = ConflictError;
class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 404;
        this.name = 'NotFoundError';
    }
}
exports.NotFoundError = NotFoundError;
const handlePrismaError = (error) => {
    var _a;
    if (error instanceof prisma_1.Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
            case 'P2002':
                // Unique constraint violation
                const field = (_a = error.meta) === null || _a === void 0 ? void 0 : _a.target;
                const fieldName = Array.isArray(field) ? field.join(', ') : field;
                throw new ConflictError(`A record with this ${fieldName} already exists`);
            case 'P2025':
                // Record not found
                throw new NotFoundError('Record not found');
            case 'P2003':
                // Foreign key constraint violation
                throw new BadRequestError('Invalid reference to related record');
            case 'P2014':
                // Invalid ID
                throw new BadRequestError('Invalid ID provided');
            default:
                throw new BadRequestError(`Database error: ${error.message}`);
        }
    }
    if (error instanceof prisma_1.Prisma.PrismaClientValidationError) {
        throw new BadRequestError('Invalid data provided');
    }
    // Re-throw if it's already a known exception
    if (error instanceof BadRequestError ||
        error instanceof ConflictError ||
        error instanceof NotFoundError) {
        throw error;
    }
    // For unknown errors, include the actual error message
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new BadRequestError(`Database operation failed: ${errorMessage}`);
};
exports.handlePrismaError = handlePrismaError;
