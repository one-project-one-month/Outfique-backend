import { Request, Response } from 'express';
import { OnBoardingDto } from './dto/OnBoardingDto';
import { onBoardingService } from './onBoarding.service';

export class OnBoardingController {
  async updateOnBoarding(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;
      if (!userId) {
        return res.status(401).json({ message: 'User not authenticated' });
      }

      const parsed = OnBoardingDto.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ errors: parsed.error.flatten() });
      }

      const user = await onBoardingService.updateOnBoarding(userId, parsed.data);

      return res.status(200).json({
        message: 'Onboarding updated successfully',
        user,
      });
    } catch (error) {
      console.error('Onboarding update error:', error);
      return res.status(500).json({ message: 'Failed to update onboarding' });
    }
  }

  async getDetailsInfoById(req: Request, res: Response) {
    try {
      const loggedInUser = (req as any).user;
      const requestedUserId = req.params.userId;

      if (!loggedInUser) {
        return res.status(401).json({ message: 'User not authenticated' });
      }

      if (loggedInUser.id !== requestedUserId) {
        return res.status(403).json({ message: "Unauthorized access to another user's data" });
      }

      const user = await onBoardingService.getDetailsInfo(requestedUserId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json({
        message: 'User details fetched successfully',
        user,
      });
    } catch (error) {
      console.error('Onboarding get error:', error);
      return res.status(500).json({ message: 'Failed to get onboarding' });
    }
  }
}

export const onBoardingController = new OnBoardingController();
