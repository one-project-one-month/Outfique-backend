import { User as BetterAuthUser, Session } from 'better-auth/types';
import { User as PrismaUser } from '../../../generated/client';

declare global {
  namespace Express {
    interface Request {
      user?: PrismaUser;
      session?: Session;
    }
  }
}

export {};
