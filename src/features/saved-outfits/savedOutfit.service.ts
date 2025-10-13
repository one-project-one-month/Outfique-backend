import { UserFavourite } from '../../../generated/client';
import { PrismaClient, prisma } from '../../database';
import { saveOutfitDto, updateSavedOutfitDto } from './dto/savedOutfitDto';

export class SaveOutfitService {
  async saveOutfit(outfitData: saveOutfitDto): Promise<UserFavourite> {
    const savedOutfit = await prisma.userFavourite.create({
      data: outfitData,
    });
    return savedOutfit;
  }

  async getSavedOutfits(userID: string): Promise<any> {
    const savedOutfits = await prisma.userFavourite.findMany({
      where: { userId: userID },
    });
    return savedOutfits;
  }

  async removeOutfit(id: number): Promise<UserFavourite> {
    const unsavedOutfit = await prisma.userFavourite.delete({
      where: {
        id: id,
      },
    });
    return unsavedOutfit;
  }

  async updateSavedOutfit(id: number, updateData: updateSavedOutfitDto): Promise<UserFavourite> {
    const updatedSavedOutfit = await prisma.userFavourite.update({
      where: {
        id: id,
      },
      data: updateData,
    });
    return updatedSavedOutfit;
  }
}

export const saveOutfitService = new SaveOutfitService();
