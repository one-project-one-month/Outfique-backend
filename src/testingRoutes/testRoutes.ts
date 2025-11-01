import express, { NextFunction, Request, Response } from 'express';
import { upload } from '../middleware/file-upload-handler';
import catchAsync from '../utils/catchAsync';
import {
  cloudinaryDelete,
  cloudinaryRemoveBgUpload,
  cloudinaryUpload,
} from '../cloudinaryService/cloudinaryServices';
import { AppError, responseData } from '../utils/http';
const router = express.Router();

//----------------Cloudinary Testing Routes----------------------
router.post(
  '/cloudinary-upload',
  upload.single('file'),
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
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
  })
);

router.post(
  '/cloudinary-bg-remove-upload',
  upload.single('file'),
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
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
  })
);
router.delete(
  '/cloudinary-delete',
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
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
  })
);

//------------Cloudinary Testing Routes End-------------------

export const testRoutes = router;
