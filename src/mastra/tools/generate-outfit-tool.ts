import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const generateOutfitTool = createTool({
  id: 'generate-outfit',
  description:
    'Generate personalized outfit recommendations based on user profile data including body type, style preferences, colors, and accessories',
  inputSchema: z.object({
    name: z.string().describe('User name'),
    birthday: z.string().describe('User birthday'),
    height: z.string().describe('Height in cm'),
    weight: z.string().describe('Weight in lb'),
    gender: z.string().describe('User gender'),
    bodyType: z
      .string()
      .describe('Body type: Triangle, Rectangle, Hourglass, Inverted Triangle, Apple'),
    accessories: z.array(z.string()).describe('Preferred accessories'),
    colors: z.array(z.string()).describe('Preferred colors'),
    fashionStyles: z
      .array(z.string())
      .describe('Fashion style preferences: classic, casual, trendy, bohemian, minimalist, etc.'),
    occasion: z
      .string()
      .optional()
      .describe('Occasion for the outfit: casual, work, party, date, etc.'),
    season: z.string().optional().describe('Season: spring, summer, fall, winter'),
  }),
  outputSchema: z.object({
    outfits: z.array(
      z.object({
        name: z.string().describe('Outfit name/title'),
        occasion: z.string().describe('Best occasion for this outfit'),
        items: z.object({
          top: z.object({
            item: z.string(),
            color: z.string(),
            style: z.string(),
            reason: z.string(),
          }),
          bottom: z.object({
            item: z.string(),
            color: z.string(),
            style: z.string(),
            reason: z.string(),
          }),
          footwear: z.object({
            item: z.string(),
            color: z.string(),
            style: z.string(),
          }),
          accessories: z.array(z.string()),
          outerLayer: z
            .object({
              item: z.string(),
              color: z.string(),
              style: z.string(),
            })
            .optional(),
        }),
        stylingTips: z.array(z.string()),
        bodyTypeNotes: z.string(),
      })
    ),
    personalizedMessage: z.string(),
  }),
  execute: async ({ context }) => {
    const {
      name,
      bodyType,
      accessories,
      colors,
      fashionStyles,
      occasion = 'casual',
      season = 'all-season',
    } = context;

    // This is where we will implement our outfit generation logic
    // For now, returning a structured example
    const outfits = [
      {
        name: 'Chic Daily Look',
        occasion: 'Casual day out',
        items: {
          top: {
            item: 'Fitted V-neck blouse',
            color: colors[0] || 'white',
            style: 'Classic fitted',
            reason: `V-neck elongates the torso and complements ${bodyType} body type`,
          },
          bottom: {
            item: 'High-waisted A-line skirt',
            color: colors[1] || 'black',
            style: 'A-line, knee-length',
            reason: `A-line silhouette balances proportions for ${bodyType} body type`,
          },
          footwear: {
            item: 'Ankle boots',
            color: 'Black',
            style: 'Low heel, pointed toe',
          },
          accessories: accessories.slice(0, 2),
          outerLayer: {
            item: 'Tailored blazer',
            color: colors[2] || 'beige',
            style: 'Structured shoulders',
          },
        },
        stylingTips: [
          'Tuck the blouse partially for a relaxed yet polished look',
          'Add a slim belt at the natural waist to define your silhouette',
          'Layer delicate accessories for a feminine touch',
        ],
        bodyTypeNotes: `This outfit creates balance and enhances your ${bodyType} shape by drawing attention to your best features.`,
      },
      {
        name: 'Trendy Weekend Vibe',
        occasion: 'Weekend brunch or shopping',
        items: {
          top: {
            item: 'Cropped sweater',
            color: colors[2] || 'pink',
            style: 'Relaxed fit, slightly cropped',
            reason: 'Cropped length works well with high-waisted bottoms',
          },
          bottom: {
            item: 'Wide-leg trousers',
            color: 'Black',
            style: 'High-waisted, flowy',
            reason: 'Creates elegant vertical lines and comfortable movement',
          },
          footwear: {
            item: 'White sneakers',
            color: 'White',
            style: 'Clean, minimalist',
          },
          accessories: [accessories[0], 'Crossbody bag'],
        },
        stylingTips: [
          'Let the sweater sit naturally at your natural waist',
          'Keep accessories minimal for a modern look',
          'Add sunglasses for extra style points',
        ],
        bodyTypeNotes: `Wide-leg pants create balance and the high waist is flattering for ${bodyType} body types.`,
      },
    ];

    return {
      outfits,
      personalizedMessage: `Hi ${name}! I've created these personalized outfit recommendations based on your ${bodyType} body type and ${fashionStyles.join(', ')} style preferences. Each look incorporates your favorite colors (${colors.join(', ')}) and accessories. These outfits will make you feel confident and stylish!`,
    };
  },
});
