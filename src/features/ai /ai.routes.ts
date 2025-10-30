import { Router } from 'express';
import { aiController } from './ai.controller';

const router = Router();

router.get('/weather', aiController.suggestByLocation);

export const AIRouter = router;
