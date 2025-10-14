import { body, param, query } from 'express-validator';

// Validation for getting weather by coordinates
export const getWeatherByCoordinatesValidation = [
  query('lat')
    .isFloat({ min: -90, max: 90 })
    .withMessage('Latitude must be a number between -90 and 90'),
  query('lon')
    .isFloat({ min: -180, max: 180 })
    .withMessage('Longitude must be a number between -180 and 180'),
];
