import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import locationWeatherService from './location-weather.service';
import catchAsync from '../../utils/catchAsync';
import { logger } from '../../utils/logger';

class LocationWeatherController {
  /**
   * Get weather data by coordinates (latitude and longitude)
   * GET /api/location-weather/coordinates?lat=40.7128&lon=-74.0060
   */
  getWeatherByCoordinates = catchAsync(async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }

    const { lat, lon } = req.query;
    const latitude = Number(lat);
    const longitude = Number(lon);

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      return res
        .status(400)
        .json({ success: false, error: { message: 'lat and lon must be numbers' } });
    }
    logger.info(`Fetching weather for coordinates: ${latitude}, ${longitude}`);

    const result = await locationWeatherService.getWeatherByCoordinates(latitude, longitude);

    res.status(200).json({
      success: true,
      message: 'Weather data retrieved successfully',
      data: result,
    });
  });

  /**
   * Health check endpoint for the location-weather service
   */
  healthCheck = catchAsync(async (req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      message: 'Location Weather service is healthy',
      timestamp: new Date().toISOString(),
    });
  });
}

export default new LocationWeatherController();
