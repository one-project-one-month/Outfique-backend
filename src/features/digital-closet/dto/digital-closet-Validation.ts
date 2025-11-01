import { body } from 'express-validator';

export const addToClosetValidaiton = [
  body('userId').isUUID().withMessage('userId must be a valid UUID'),

  body('image_url').isURL().withMessage('image_url must be a valid URL'),

  body('image_publicId').isString().notEmpty().withMessage('image_publicId is required'),

  body('categories').isArray({ min: 1 }).withMessage('categories must contain at least one item'),

  body('categories.*').isString().withMessage('each category must be a string'),

  body('colors').isArray({ min: 1 }).withMessage('colors must contain at least one item'),

  body('colors.*').isString().withMessage('each color must be a string'),

  body('fashionStyles')
    .isArray({ min: 1 })
    .withMessage('fashionStyles must contain at least one item'),

  body('fashionStyles.*').isString().withMessage('each fashion style must be a string'),

  body('size').isString().notEmpty().withMessage('size is required'),

  body('weatherConds')
    .optional()
    .isArray()
    .withMessage('weatherConds must be an array if provided'),

  body('weatherConds.*')
    .optional()
    .isString()
    .withMessage('each weather condition must be a string'),

  body('brand').optional().isArray().withMessage('brand must be an array if provided'),

  body('brand.*').optional().isString().withMessage('each brand must be a string'),

  //   body('isFavorite').optional().isBoolean().withMessage('isFavorite must be a boolean'),
];

export const updateClosetOutfitValidation = [
  body('categories').isArray({ min: 1 }).withMessage('categories must contain at least one item'),

  body('categories.*').isString().withMessage('each category must be a string'),

  body('colors').isArray({ min: 1 }).withMessage('colors must contain at least one item'),

  body('colors.*').isString().withMessage('each color must be a string'),

  body('fashionStyles')
    .isArray({ min: 1 })
    .withMessage('fashionStyles must contain at least one item'),

  body('fashionStyles.*').isString().withMessage('each fashion style must be a string'),

  body('size').isString().notEmpty().withMessage('size is required'),

  body('weatherConds')
    .optional()
    .isArray()
    .withMessage('weatherConds must be an array if provided'),

  body('weatherConds.*')
    .optional()
    .isString()
    .withMessage('each weather condition must be a string'),

  body('brand').optional().isArray().withMessage('brand must be an array if provided'),

  body('brand.*').optional().isString().withMessage('each brand must be a string'),
];
