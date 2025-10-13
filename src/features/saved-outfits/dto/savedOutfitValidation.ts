import { body, param } from 'express-validator';

import { SelectionReason } from '../../../../generated/client';

const allowedReasons = Object.values(SelectionReason);

export const saveOutfitValidation = [
  body('userId')
    .isString()
    .withMessage('User ID must be a string.')
    .notEmpty()
    .withMessage('User ID is required.'),

  body('outfitElementsId')
    .isInt()
    .withMessage('Outfit Element ID be number.')
    .notEmpty()
    .withMessage('Outfit Element ID is required.'),

  body('selectionReason')
    .optional()
    .isIn(allowedReasons)
    .withMessage(`Selection reason must be one of: ${allowedReasons.join(', ')}`),

  body('occasion').optional().isString().withMessage('Occasion must be string.'),

  body('weatherConditionId').optional().isInt().withMessage('weather Condition Id must be number.'),

  body('userRating').optional().isInt().withMessage('User rating must be number'),

  body('feedbackNotes').optional().isString().withMessage('Feedback Notes must be String'),
];

export const updateSavedOutfitValidation = [
  body('selectionReason')
    .optional()
    .isIn(allowedReasons)
    .withMessage(`Selection reason must be one of: ${allowedReasons.join(', ')}`),

  body('occasion').optional().isString().withMessage('Occasion must be string.'),

  body('weatherConditionId').optional().isInt().withMessage('weather Condition Id must be number.'),

  body('userRating').optional().isInt().withMessage('User rating must be number'),

  body('feedbackNotes').optional().isString().withMessage('Feedback Notes must be String'),
];
