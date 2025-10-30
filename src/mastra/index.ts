import { Mastra } from '@mastra/core/mastra';
import { outfiqueAgent } from './agents/outfique-agent';

const mastra = new Mastra({
  agents: { outfiqueAgent },
});

export { mastra };
export default mastra;
