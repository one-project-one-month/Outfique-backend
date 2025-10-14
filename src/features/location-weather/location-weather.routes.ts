import { Router } from 'express';
import locationWeatherController from './location-weather.controller';
import { getWeatherByCoordinatesValidation } from './dto/locationWeatherValidation';

const router = Router();

/**
 * @route GET /api/location-weather/coordinates
 * @desc Get weather data by coordinates
 * @query lat - Latitude (-90 to 90)
 * @query lon - Longitude (-180 to 180)
 * @access Public
 */
router.get(
  '/coordinates',
  getWeatherByCoordinatesValidation,
  locationWeatherController.getWeatherByCoordinates
);

/**
 * @route GET /api/location-weather/health
 * @desc Health check for location-weather service
 * @access Public
 */
router.get('/health', locationWeatherController.healthCheck);

export default router;
