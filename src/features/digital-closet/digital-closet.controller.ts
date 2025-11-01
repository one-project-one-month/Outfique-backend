import catchAsync from '../../utils/catchAsync';
import { Request, Response, NextFunction } from 'express';
import { addToClosetDto, updateClosetOutfitDto } from './dto/digital-closet-Dto';
import { digitalClosetService } from './digital-closet.service';
import { responseData } from '../../utils/http';
import { prisma } from '../../database';

export const addOutfit = catchAsync(async (req: Request, res: Response) => {
  const outfitData: addToClosetDto = req.body;
  const addedOutfit = await digitalClosetService.addOutfit(outfitData);
  return responseData({
    res,
    status: 200,
    message: 'successful',
    data: addedOutfit,
  });
});

export const getAddedOutfits = catchAsync(async (req: Request, res: Response) => {
  const addedOutfits = await digitalClosetService.getAddedOutfits(req.body.userId);
  return responseData({
    res,
    status: 200,
    message: 'successful',
    data: addedOutfits,
  });
});

export const removeOutfit = catchAsync(async (req: Request, res: Response) => {
  const removedOutfit = await digitalClosetService.removeOutfit(req.params.id);
  return responseData({
    res,
    status: 200,
    message: 'successful',
    data: removedOutfit,
  });
});

export const updateAddedOutfit = catchAsync(async (req: Request, res: Response) => {
  const updatedAddedOutfit: updateClosetOutfitDto = await digitalClosetService.updateAddedOutfit(
    req.params.id,
    req.body
  );
  return responseData({
    res,
    status: 200,
    message: 'successful',
    data: updatedAddedOutfit,
  });
});

export const favoriteAddedOutfit = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const outfit = await prisma.outfitInDigitalCloset.findUnique({
      where: { id: id },
      select: { isFavorite: true },
    });
    if (!outfit) {
      throw new Error('No Outfit Found');
    }
    const updatedAddedOutfit = await prisma.outfitInDigitalCloset.update({
      where: { id: id },
      data: { isFavorite: !outfit.isFavorite },
    });

    return responseData({
      res,
      status: 200,
      message: 'successful',
      data: updatedAddedOutfit,
    });
  }
);
