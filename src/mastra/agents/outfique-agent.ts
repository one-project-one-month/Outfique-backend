import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { Agent } from '@mastra/core/agent';
import { weatherTool } from '../tools/weather-tool';

export const openrouter = createOpenRouter({
  baseURL: process.env.OPEN_ROUTER_BASEURL,
  apiKey: process.env.OPEN_ROROUTER_API_KEY as string,
});

export const outfiqueAgent = new Agent({
  id: 'OutfiqueAgent',
  name: 'OutfiqueAgent',
  description: 'Base agent for the Outifique Application',
  instructions: '',
  tools: { weatherTool },
  model: openrouter('openai/gpt-oss-20b:free'),
});
