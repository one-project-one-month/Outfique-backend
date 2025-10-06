import { Request, Response, NextFunction } from 'express';
import catchAsync from '../../utils/catchAsync';
import { saveOutfitDto } from './dto/savedOutfitDto';
import { saveOutfitService } from './savedOutfit.service';

export const saveOutfit = catchAsync(async (req: Request, res: Response) => {
  const savedOutfitData: saveOutfitDto = req.body;
  const savedOutfit = await saveOutfitService.saveOutfit(savedOutfitData);
  res.status(200).json({
    status: 'success',
    data: savedOutfit,
  });
});

export const getSavedOutfits = catchAsync(async (req: Request, res: Response) => {
  const savedOutfits = await saveOutfitService.getSavedOutfits(req.params.id);

  res.status(200).json({
    status: 'success',
    data: savedOutfits,
  });
});

export const unsaveOutfit = catchAsync(async (req: Request, res: Response) => {
  const unsavedOutfit = await saveOutfitService.unsaveOutfit(Number(req.params.id));
  res.status(200).json({
    status: 'success',
    data: unsavedOutfit,
  });
});

export const updateSavedOutfit = catchAsync(async (req: Request, res: Response) => {
  const updatedSavedOutfit = await saveOutfitService.updateSavedOutfit(
    Number(req.params.id),
    req.body
  );
  res.status(200).json({
    status: 'success',
    data: updatedSavedOutfit,
  });
});
