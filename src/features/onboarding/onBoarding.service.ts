import { Gender, User } from '../../../generated/client';
import { prisma } from '../../database';
import { onBoardingDto } from './dto/OnBoardingDto';

export class OnBoardingService {
  async updateOnBoarding(userId: string, onBoardingData: onBoardingDto): Promise<User> {
    const updatedUser = await prisma.$transaction(async (tx) => {
      await tx.userBodyType.deleteMany({ where: { userId } });
      await tx.userAccessory.deleteMany({ where: { userId } });
      await tx.userFashionStyle.deleteMany({ where: { userId } });

      await tx.user.update({
        where: { id: userId },
        data: {
          name: onBoardingData.name,
          birthday: onBoardingData.birthday,
          height: onBoardingData.height,
          weight: onBoardingData.weight,
          gender: onBoardingData.gender,
          timezone: onBoardingData.timezone,
          color: onBoardingData.color,
          onboardingCompleted: true,
        },
      });

      await tx.userBodyType.create({
        data: {
          name: onBoardingData.bodyType.name,
          description: onBoardingData.bodyType.description,
          userId,
        },
      });

      await tx.userAccessory.createMany({
        data: onBoardingData.accessories.map((acc) => ({
          name: acc.name,
          description: acc.description,
          userId,
        })),
      });

      await tx.userFashionStyle.createMany({
        data: onBoardingData.fashionStyles.map((fs) => ({
          name: fs.name,
          description: fs.description,
          userId,
        })),
      });

      const user = await tx.user.findUnique({
        where: { id: userId },
        include: {
          bodyType: true,
          accessories: true,
          fashionStyles: true,
        },
      });

      return user!;
    });

    return updatedUser;
  }

  async getDetailsInfo(userId: string) {
    const userDetails = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        bodyType: true,
        accessories: true,
        fashionStyles: true,
      },
    });

    if (!userDetails) return null;

    return {
      id: userDetails.id,
      name: userDetails.name,
      email: userDetails.email,
      height: userDetails.height,
      weight: userDetails.weight,
      birthday: userDetails.birthday,
      gender: userDetails.gender,
      color: userDetails.color,
      bodyType: userDetails.bodyType
        ? {
            id: userDetails.bodyType.id,
            name: userDetails.bodyType.name,
            description: userDetails.bodyType.description,
          }
        : null,
      accessories: userDetails.accessories.map((acc) => ({
        id: acc.id,
        name: acc.name,
        description: acc.description,
      })),
      fashionStyles: userDetails.fashionStyles.map((fs) => ({
        id: fs.id,
        name: fs.name,
        description: fs.description,
      })),
    };
  }
}

export const onBoardingService = new OnBoardingService();
