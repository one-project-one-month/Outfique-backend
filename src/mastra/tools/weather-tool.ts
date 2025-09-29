import { createTool } from '@mastra/core';
import {z} from 'zod';

export const weatherTool = createTool({
  description: 'Get current weather information using a simple API',
  id: 'simpleWeatherTool',
  inputSchema: z.object({
    location: z.string().describe('The location chosen by the user'),
  }),
  outputSchema: z.object({
    location: z.string(),
    weather: z.string(),
    error: z.string().optional()
  }),
  execute: async ({ context }) => {
    const { location } = context;

    try {
      const response = await fetch(
        `https://wttr.in/${encodeURIComponent(location)}?format=j1`
      );

      if (!response.ok) {
        throw new Error(`Weather service unavailable`);
      }

      const data = await response.json();
      const current = data.current_condition[0];
      const area = data.nearest_area[0];

      return {
        location: `${area.areaName[0].value}, ${area.country[0].value}`,
        weather: `${current.temp_C}°C, ${current.weatherDesc[0].value}. Feels like ${current.FeelsLikeC}°C. Humidity: ${current.humidity}%`
      };

    } catch (err) {
      console.error('Simple weather tool error:', err);

      return {
        location,
        weather: 'Weather information unavailable',
        error: err instanceof Error ? err.message : 'Unknown error occurred'
      };
    }
  }
});