import { Mastra } from '@mastra/core/mastra';
import { weatherAgent } from './agents/weather-agent';
import { outfiqueAgent } from './agents/outfit-recomment-agent';

const mastra = new Mastra({
  agents: { weatherAgent, outfiqueAgent },
});

export { mastra };
export default mastra;
