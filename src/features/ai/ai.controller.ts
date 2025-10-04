import { Request, Response } from 'express';
import mastra from '../../mastra';

interface SuggestByLocationRequest {
  location: string;
}

export class AiController {
  async suggestByLocation(request: Request<SuggestByLocationRequest>, response: Response) {
    try {
      const { location } = request.body;

      const weatherResult = await mastra
        .getAgent('outfiqueAgent')
        .generateVNext(`Find the weather of the provided location : ${location}`);
      response.status(200).send({ weatherResult });
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
