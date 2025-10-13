import { Request, Response, NextFunction } from "express";
import { signUpDto } from "../dto/signUpDto";

export const validateSignup = (req: Request, res: Response, next: NextFunction) => {
  const result = signUpDto.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.format() });
  }
  req.body = result.data; // sanitized & typed
  next();
};
