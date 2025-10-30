import { Request, Response } from 'express';
import { weatherAgent } from '../../mastra/agents/weather-agent';

interface SuggestByLocationRequest {
  location: string;
}

export class AiController {
  async suggestByLocation(request: Request<SuggestByLocationRequest>, response: Response) {
    try {
      const { location } = request.body;

      console.log('req body', location);

      const weatherResult = await weatherAgent.generate(
        `Find the weather of the provided location : ${location}`
      );

      console.log('result ', weatherResult);

      response.status(200).json({ weatherResult });
    } catch (err) {
      if (err instanceof Error) {
        response.status(400).json({
          message: err.message,
          error: 'Bad Request',
        });
      } else {
        response.status(500).json({
          message: 'An unexpected error occurred',
          error: 'Internal Server Error',
        });
      }
    }
  }
}

export const aiController = new AiController();
