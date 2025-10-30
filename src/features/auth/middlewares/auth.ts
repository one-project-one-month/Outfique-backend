import { NextFunction, Request, Response } from 'express';
import { auth } from '../auth';
import { prisma } from '../../../database';

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {  
    const session = await auth.api.getSession({
      headers: req.headers as any
    });
    
    if (!session) {
      return res.status(401).json({ message: 'Unauthorized - No session found' });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: session.session.userId
      },
    });

    
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    (req as any).user = user;
    (req as any).session = session.session;

    next();
  } catch (error) {
    console.error('Auth error:', error);
    return res.status(401).json({ message: 'Invalid session' });
  }
}

