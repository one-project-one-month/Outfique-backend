import { Router, Request, Response } from 'express';
import { healthCheck } from './database';
import { logger } from './utils/logger';

const router = Router();

interface HealthStatus {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  uptime: number;
  database: {
    status: 'connected' | 'disconnected';
    responseTime?: number;
  };
  memory: {
    used: string;
    total: string;
    percentage: string;
  };
}

router.get('/health', async (_req: Request, res: Response) => {
  const startTime = Date.now();

  try {
    // Check database connection
    const isDbHealthy = await healthCheck();
    const dbResponseTime = Date.now() - startTime;

    // Get memory usage
    const memUsage = process.memoryUsage();
    const totalMemory = memUsage.heapTotal;
    const usedMemory = memUsage.heapUsed;
    const memoryPercentage = ((usedMemory / totalMemory) * 100).toFixed(2);

    const healthStatus: HealthStatus = {
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

    logger.info('Health check performed', {
      status: isDbHealthy ? 'healthy' : 'unhealthy',
      dbResponseTime,
      uptime: healthStatus.uptime,
    });

    res.status(isDbHealthy ? 200 : 503).json(healthStatus);
  } catch (error) {
    const healthStatus: HealthStatus = {
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

    logger.error('Health check failed', {
      error: error instanceof Error ? error.message : 'Unknown error',
      status: 'unhealthy',
    });

    res.status(503).json(healthStatus);
  }
});

export default router;
