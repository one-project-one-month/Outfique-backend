import { OutfitInDigitalCloset } from '../../../generated/client';
import { prisma } from '../../database';
import { addToClosetDto, updateClosetOutfitDto } from './dto/digital-closet-Dto';

export class DigitalClosetService {
  async addOutfit(outfitData: addToClosetDto): Promise<any> {
    const addedOutfit = await prisma.outfitInDigitalCloset.create({
      data: outfitData,
    });
    return addedOutfit;
  }

  async getAddedOutfits(userID: string): Promise<any> {
    const addedOutfits = await prisma.outfitInDigitalCloset.findMany({
      where: { userId: userID },
    });
    return addedOutfits;
  }

  async removeOutfit(id: string): Promise<any> {
    const removedOutfit = await prisma.outfitInDigitalCloset.delete({
      where: {
        id: id,
      },
    });
    return removedOutfit;
  }
  async updateAddedOutfit(id: string, updateData: updateClosetOutfitDto): Promise<any> {
    const updatedOutfit = await prisma.outfitInDigitalCloset.update({
      where: {
        id: id,
      },
      data: updateData,
    });
  }
}

export const digitalClosetService = new DigitalClosetService();
