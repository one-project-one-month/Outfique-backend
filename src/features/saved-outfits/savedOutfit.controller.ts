import { Request, Response, NextFunction } from 'express';
import catchAsync from '../../utils/catchAsync';
import { saveOutfitDto } from './dto/savedOutfitDto';
import { saveOutfitService } from './savedOutfit.service';
import { responseData } from '../../utils/http';

export const saveOutfit = catchAsync(async (req: Request, res: Response) => {
  const savedOutfitData: saveOutfitDto = req.body;
  const savedOutfit = await saveOutfitService.saveOutfit(savedOutfitData);
  return responseData({
    res,
    status: 200,
    message: 'successful',
    data: savedOutfit,
  });
});

export const getSavedOutfits = catchAsync(async (req: Request, res: Response) => {
  const savedOutfits = await saveOutfitService.getSavedOutfits(req.body.userId);
  return responseData({
    res,
    status: 200,
    message: 'successful',
    data: savedOutfits,
  });
});

export const removeOutfit = catchAsync(async (req: Request, res: Response) => {
  const removedOutfit = await saveOutfitService.removeOutfit(Number(req.params.id));
  return responseData({
    res,
    status: 200,
    message: 'successful',
    data: removedOutfit,
  });
});

export const updateSavedOutfit = catchAsync(async (req: Request, res: Response) => {
  const updatedSavedOutfit = await saveOutfitService.updateSavedOutfit(
    Number(req.params.id),
    req.body
  );
  return responseData({
    res,
    status: 200,
    message: 'successful',
    data: updatedSavedOutfit,
  });
});
