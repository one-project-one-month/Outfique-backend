import { createOpenRouter } from '@openrouter/ai-sdk-provider';

export const openrouter = createOpenRouter({
  baseURL: process.env.OPEN_ROUTER_BASEURL,
  apiKey: process.env.OPEN_ROROUTER_API_KEY as string,
});
