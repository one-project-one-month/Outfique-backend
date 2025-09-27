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
const express_1 = require("express");
const database_1 = require("./database");
const logger_1 = require("./utils/logger");
const router = (0, express_1.Router)();
router.get('/health', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const startTime = Date.now();
    try {
        // Check database connection
        const isDbHealthy = yield (0, database_1.healthCheck)();
        const dbResponseTime = Date.now() - startTime;
        // Get memory usage
        const memUsage = process.memoryUsage();
        const totalMemory = memUsage.heapTotal;
        const usedMemory = memUsage.heapUsed;
        const memoryPercentage = ((usedMemory / totalMemory) * 100).toFixed(2);
        const healthStatus = {
            status: isDbHealthy ? 'healthy' : 'unhealthy',
            timestamp: new Date().toISOString(),
            uptime: Math.floor(process.uptime()),
            database: {
                status: isDbHealthy ? 'connected' : 'disconnected',
                responseTime: dbResponseTime,
            },
            memory: {
                used: `${Math.round(usedMemory / 1024 / 1024)}MB`,
                total: `${Math.round(totalMemory / 1024 / 1024)}MB`,
                percentage: `${memoryPercentage}%`,
            },
        };
        logger_1.logger.info('Health check performed', {
            status: isDbHealthy ? 'healthy' : 'unhealthy',
            dbResponseTime,
            uptime: healthStatus.uptime,
        });
        res.status(isDbHealthy ? 200 : 503).json(healthStatus);
    }
    catch (error) {
        const healthStatus = {
            status: 'unhealthy',
            timestamp: new Date().toISOString(),
            uptime: Math.floor(process.uptime()),
            database: {
                status: 'disconnected',
            },
            memory: {
                used: '0MB',
                total: '0MB',
                percentage: '0%',
            },
        };
        logger_1.logger.error('Health check failed', {
            error: error instanceof Error ? error.message : 'Unknown error',
            status: 'unhealthy',
        });
        res.status(503).json(healthStatus);
    }
}));
exports.default = router;
