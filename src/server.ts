import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { connectPrisma, disconnectPrisma } from './database';
import { logger } from './utils/logger';

const PORT = process.env.PORT || 8000;

console.log('env file ', process.env.DATABASE_URL);

async function startServer() {
  try {
    await connectPrisma();

    // Start server
    app.listen(PORT, () => {
      logger.info('Server started successfully', {
        port: PORT,
        environment: process.env.NODE_ENV || 'development',
        nodeVersion: process.version,
      });
    });

    process.on('SIGTERM', async () => {
      logger.info('SIGTERM received, shutting down gracefully');
      await disconnectPrisma();
      process.exit(0);
    });

    process.on('SIGINT', async () => {
      logger.info('SIGINT received, shutting down gracefully');
      await disconnectPrisma();
      process.exit(0);
    });
  } catch (error) {
    logger.error('Failed to start server', {
      error: error instanceof Error ? error.message : 'Unknown error',
    });
    process.exit(1);
  }
}

startServer().then((r) => logger.info('Server started' + r));
