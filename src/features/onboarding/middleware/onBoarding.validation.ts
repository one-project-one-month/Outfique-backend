import { Request, Response, NextFunction } from 'express';
import { OnBoardingDto } from '../dto/OnBoardingDto';

export const validateOnBoarding = (req: Request, res: Response, next: NextFunction) => {
  const result = OnBoardingDto.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.format() });
  }
  req.body = result.data;
  next();
};
