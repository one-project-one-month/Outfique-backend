"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = exports.healthCheck = exports.disconnectPrisma = exports.connectPrisma = void 0;
const prisma_1 = require("../../generated/prisma");
const logger_1 = require("../utils/logger");
// Create the Prisma client instance
const prisma = new prisma_1.PrismaClient({
    log: process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn', 'info']
        : ['error'],
    errorFormat: 'pretty',
});
exports.prisma = prisma;
const connectPrisma = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.$connect();
        logger_1.logger.info('Successfully connected to PostgreSQL database');
    }
    catch (error) {
        logger_1.logger.warn('PostgreSQL connection failed - this is expected if database is not set up yet');
        logger_1.logger.warn('Database will be available once properly configured');
        logger_1.logger.debug('PostgreSQL error details:', {
            error: error instanceof Error ? error.message : String(error),
        });
    }
});
exports.connectPrisma = connectPrisma;
const disconnectPrisma = () => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
    logger_1.logger.info('Disconnected from PostgreSQL database');
});
exports.disconnectPrisma = disconnectPrisma;
const healthCheck = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.$queryRaw `SELECT 1`;
        return true;
    }
    catch (error) {
        logger_1.logger.error('PostgreSQL health check failed', {
            error: error instanceof Error ? error.message : String(error),
        });
        return false;
    }
});
exports.healthCheck = healthCheck;
