import { Router } from 'express';
import { aiController } from './ai.controller';
import { AIOutfitController } from './outfit.controller';

const router = Router();

router.get('/weather', aiController.suggestByLocation);

router.post('/generate', AIOutfitController.generatae);

export const AIRouter = router;
