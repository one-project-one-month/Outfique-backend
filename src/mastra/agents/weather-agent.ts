import { Agent } from '@mastra/core/agent';
import { weatherTool } from '../tools/weather-tool';
import { openrouter } from '../model/open-router';

export const weatherAgent = new Agent({
  id: 'weatherAgent',
  name: 'weatherAgent',
  description: 'weather agent',
  instructions:
    'You are a helpful weather assistant. Use the weatherTool to fetch currrent weather data for a given location ',
  tools: { weatherTool },
  model: openrouter('openai/gpt-oss-20b:free'),
});
