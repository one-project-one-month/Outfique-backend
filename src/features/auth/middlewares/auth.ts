import { NextFunction, Request, Response } from 'express';
import { auth } from '../auth';
import { fromNodeHeaders } from 'better-auth/node';
import { prisma } from '../../../database';

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });

    if (!session) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
    });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user;
    //   req.session = session.session;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid session' });
  }
}
