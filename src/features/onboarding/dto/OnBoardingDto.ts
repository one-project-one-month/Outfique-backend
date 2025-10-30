import { z } from 'zod';

export const OnBoardingDto = z.object({
  name: z.string().min(1, 'Name is required'),
  birthday: z.preprocess((arg) => (typeof arg === 'string' ? new Date(arg) : arg), z.date()),
  height: z.number().int().positive(),
  weight: z.number().int().positive(),
  gender: z.enum(['male', 'female']),
  timezone: z.string().optional(),

  color: z.array(z.string()).min(1, 'At least one color is required'),

  bodyType: z.object({
    name: z.string(),
    description: z.string(),
  }),

  accessories: z
    .array(
      z.object({
        name: z.string(),
        description: z.string(),
      })
    )
    .min(1, 'At least one accessory is required'),

  fashionStyles: z
    .array(
      z.object({
        name: z.string(),
        description: z.string(),
      })
    )
    .min(1, 'At least one fashion style is required'),
});

export type onBoardingDto = z.infer<typeof OnBoardingDto>;
