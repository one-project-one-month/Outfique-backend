import { Mastra } from '@mastra/core';
import { outfiqueAgent } from './agent/outfique-agent';


const mastra = new Mastra({
  agents: {outfiqueAgent},
});
export default mastra;