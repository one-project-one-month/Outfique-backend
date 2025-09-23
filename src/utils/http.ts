import { Response } from 'express';

interface ResponseData {
  res: Response;
  status: number;
  message: string;
  data: any;
}

export const responseData = ({
  res,
  status = 200,
  message,
  data,
}: ResponseData) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export class AppError extends Error {
  status: string | number;
  constructor(message: string, status: number | string) {
    super(message);
    this.status = status;
  }
}
