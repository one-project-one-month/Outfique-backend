import { Request, Response } from 'express';
import { weatherAgent } from '../../mastra/agents/weather-agent';
import { outfiqueAgent } from '../../mastra/agents/outfit-recomment-agent';

interface OnboardingData {
  name: string;
  birthday: string;
  height: string;
  weight: string;
  gender: string;
  bodyType: string;
  accessories: string[];
  colors: string[];
  fashionStyles: string[];
  occasion?: string;
  season?: string;
}

export class outfitController {
  async generatae(req: Request<OnboardingData>, res: Response) {
    try {
      const onboardingData: OnboardingData = req.body;

      console.log(req.body);

      // Validate required fields
      const requiredFields = [
        'name',
        'birthday',
        'height',
        'weight',
        'gender',
        'bodyType',
        'accessories',
        'colors',
        'fashionStyles',
      ];
      const missingFields = requiredFields.filter(
        (field) => !onboardingData[field as keyof OnboardingData]
      );

      if (missingFields.length > 0) {
        return res.status(400).json({
          error: 'Missing required fields',
          missingFields,
        });
      }

      const prompt = `
            Hello! I need outfit recommendations for the following profile:

            Name: ${onboardingData.name}
            Birthday: ${onboardingData.birthday}
            Height: ${onboardingData.height}
            Weight: ${onboardingData.weight}
            Gender: ${onboardingData.gender}
            Body Type: ${onboardingData.bodyType}
            Accessories: ${onboardingData.accessories.join(', ')}
            Favorite Colors: ${onboardingData.colors.join(', ')}
            Fashion Styles: ${onboardingData.fashionStyles.join(', ')}
            ${onboardingData.occasion ? `Occasion: ${onboardingData.occasion}` : ''}
            ${onboardingData.season ? `Season: ${onboardingData.season}` : ''}

            Please create personalized outfit recommendations that suit this profile.
                `.trim();

      // Get the Outfique agent
      const agent = await outfiqueAgent.generate(prompt);

      console.log('agent ', agent);

      return res.json({
        success: true,
        data: {
          recommendations: agent.text,
          profile: {
            name: onboardingData.name,
            bodyType: onboardingData.bodyType,
            styles: onboardingData.fashionStyles,
          },
        },
      });
    } catch (error) {
      console.error('Error generating outfit:', error);
      return res.status(500).json({
        error: 'Failed to generate outfit recommendations',
        message: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }
}

export const AIOutfitController = new outfitController();
