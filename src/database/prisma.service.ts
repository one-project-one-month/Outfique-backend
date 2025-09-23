import { PrismaClient } from '../../generated/prisma';
import { logger } from '../utils/logger';

// Create the Prisma client instance
const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === 'development'
      ? ['query', 'error', 'warn', 'info']
      : ['error'],
  errorFormat: 'pretty',
});

export const connectPrisma = async (): Promise<void> => {
  try {
    await prisma.$connect();
    logger.info('Successfully connected to PostgreSQL database');
  } catch (error) {
    logger.warn(
      'PostgreSQL connection failed - this is expected if database is not set up yet'
    );
    logger.warn('Database will be available once properly configured');
    logger.debug('PostgreSQL error details:', {
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

export const disconnectPrisma = async (): Promise<void> => {
  await prisma.$disconnect();
  logger.info('Disconnected from PostgreSQL database');
};

export const healthCheck = async (): Promise<boolean> => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch (error) {
    logger.error('PostgreSQL health check failed', {
      error: error instanceof Error ? error.message : String(error),
    });
    return false;
  }
};

export { prisma };
