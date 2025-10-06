import { Request, Response, NextFunction } from 'express';
import catchAsync from '../../utils/catchAsync';
import { saveOutfitDto } from './dto/savedOutfitDto';
import { saveOutfitService } from './savedOutfit.service';

export const saveOutfit = catchAsync(async (req: Request, res: Response) => {
  const savedOutfitData: saveOutfitDto = req.body;
  const savedOutfit = await saveOutfitService.saveOutfit(savedOutfitData);
  res.status(201).json({
    status: 'success',
    data: savedOutfit,
  });
});
