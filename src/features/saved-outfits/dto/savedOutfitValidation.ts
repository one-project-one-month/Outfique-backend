import { body } from 'express-validator';
import { prisma } from '../../../database';
import { SelectionReason } from '../../../../generated/client';

const allowedReasons = Object.values(SelectionReason);
export const saveOutfitValidation = [
  body('userId')
    .isString()
    .withMessage('User ID must be a string.')
    .notEmpty()
    .withMessage('User ID is required.')
    .custom(async (userId: string) => {
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!user) {
        return Promise.reject('User not found.');
      }
    }),

  body('outfitElementsId')
    .isNumeric()
    .withMessage('Outfit Element ID be number.')
    .notEmpty()
    .withMessage('Outfit Element ID is required.')
    .custom(async (id: number) => {
      const ele = await prisma.outfitElements.findUnique({
        where: {
          id: id,
        },
      });
      if (!ele) {
        return Promise.reject('Outfit Element not found.');
      }
    }),
  body('selectionReason')
    .optional()
    .isIn(allowedReasons)
    .withMessage(`Selection reason must be one of: ${allowedReasons.join(', ')}`),
  body('occasion').optional().isString().withMessage('Occasion must be string.'),
  body('weatherConditionId')
    .optional()
    .isNumeric()
    .withMessage('weather Condition Id must be number.')
    .custom(async (id: number) => {
      const weatherCond = await prisma.weatherType.findUnique({
        where: {
          id: id,
        },
      });
      if (!weatherCond) {
        return Promise.reject('Weather Type not found');
      }
    }),

  body('userRating').optional().isNumeric().withMessage('User rating must be number'),

  body('feedbackNotes').optional().isString().withMessage('Feedback Notes must be String'),
];
