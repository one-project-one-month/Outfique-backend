declare global {
  namespace Express {
    interface Request {
      user?: User; // fix later
    }

    export interface AuthenticatedRequest extends Request {
      user: User;
    }
  }
}

export {};
