import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';
import { BadRequestError, ConflictError, NotFoundError } from '../database/database-error-handler';
import { ZodError } from 'zod';

export interface AppError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export const errorHandler = (
  error: AppError | BadRequestError | ConflictError | NotFoundError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = 'Internal Server Error';

  if (error instanceof ZodError) {
    return res.status(400).json({
      success: false,
      error: 'Validation error',
      details: error.message,
    });
  }

  // Handle  custom database errors from prosma
  if (error instanceof BadRequestError) {
    statusCode = 400;
    message = error.message;
  } else if (error instanceof ConflictError) {
    statusCode = 409;
    message = error.message;
  } else if (error instanceof NotFoundError) {
    statusCode = 404;
    message = error.message;
  } else if (error.statusCode) {
    statusCode = error.statusCode;
    message = error.message;
  } else if (error.message) {
    message = error.message;
  }

  logger.error('Request failed', {
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
    error: {
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
    },
  });
};
