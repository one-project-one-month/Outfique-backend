import { Request, Response, NextFunction } from 'express';
import catchAsync from '../../utils/catchAsync';
import { AppError, responseData } from '../../utils/http';
import {
  cloudinaryDelete,
  cloudinaryRemoveBgUpload,
  cloudinaryUpload,
} from '../../cloudinaryService/cloudinaryServices';

export const uploadImg = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const file = req.file;
  if (!file) {
    return next(new AppError('Image not found', 400));
  }
  const result = await cloudinaryUpload(file, process.env.CLOUDINARY_FOLDER_NAME);
  return responseData({
    res,
    status: 200,
    message: 'image uploaded successfully',
    data: result,
  });
});

export const bgRemovedImg = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const file = req.file;
  if (!file) {
    return next(new AppError('Image not found', 400));
  }
  const result = await cloudinaryRemoveBgUpload(file, process.env.CLOUDINARY_FOLDER_NAME);
  return responseData({
    res,
    status: 200,
    message: 'image uploaded successfully',
    data: result,
  });
});

export const deleteImg = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const public_id = req.body.public_id;
  if (!public_id) {
    return next(new AppError('Image url not found', 400));
  }
  await cloudinaryDelete(public_id);

  return responseData({
    res,
    status: 200,
    message: 'Image deleted successfully',
    data: [],
  });
});
