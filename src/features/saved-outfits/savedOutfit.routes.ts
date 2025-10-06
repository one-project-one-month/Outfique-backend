import { Router } from 'express';
import { saveOutfit } from './savedOutfit.controller';

const router = Router();

router.post('/', saveOutfit);
export const savedOutfitRoutes = router;
