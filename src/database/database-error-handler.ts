import { Prisma } from '../../generated/prisma';

export class BadRequestError extends Error {
  statusCode = 400;
  constructor(message: string) {
    super(message);
    this.name = 'BadRequestError';
  }
}

export class ConflictError extends Error {
  statusCode = 409;
  constructor(message: string) {
    super(message);
    this.name = 'ConflictError';
  }
}

export class NotFoundError extends Error {
  statusCode = 404;
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
  }
}

export const handlePrismaError = (error: unknown): never => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002':
        // Unique constraint violation
        const field = error.meta?.target as string[] | string;
        const fieldName = Array.isArray(field) ? field.join(', ') : field;
        throw new ConflictError(
          `A record with this ${fieldName} already exists`
        );

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

  if (error instanceof Prisma.PrismaClientValidationError) {
    throw new BadRequestError('Invalid data provided');
  }

  // Re-throw if it's already a known exception
  if (
    error instanceof BadRequestError ||
    error instanceof ConflictError ||
    error instanceof NotFoundError
  ) {
    throw error;
  }

  // For unknown errors, include the actual error message
  const errorMessage = error instanceof Error ? error.message : String(error);
  throw new BadRequestError(`Database operation failed: ${errorMessage}`);
};
