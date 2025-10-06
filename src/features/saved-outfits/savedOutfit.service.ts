import { PrismaClient, prisma } from '../../database';
import { saveOutfitDto } from './dto/savedOutfitDto';

export class SaveOutfitService {
  async saveOutfit(outfitData: saveOutfitDto): Promise<any> {
    const saveOutfit = await prisma.userFavourite.create({
      data: outfitData,
    });
    return saveOutfit;
  }
}

export const saveOutfitService = new SaveOutfitService();
