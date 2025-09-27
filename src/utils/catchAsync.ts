import { Request, Response, NextFunction, RequestHandler } from 'express';

export default function catchAsync<
  P = any,
  ResBody = any,
  ReqBody = any,
  ReqQuery = any,
>(
  fn: (
    req: Request<P, ResBody, ReqBody, ReqQuery>,
    res: Response<ResBody>,
    next: NextFunction
  ) => Promise<any>
): RequestHandler<P, ResBody, ReqBody, ReqQuery> {
  return function (req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
