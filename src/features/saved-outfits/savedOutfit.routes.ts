import { Router } from 'express';
import {
  getSavedOutfits,
  saveOutfit,
  unsaveOutfit,
  updateSavedOutfit,
} from './savedOutfit.controller';

const router = Router();

router.route('/').post(saveOutfit);
router.route('/:id').get(getSavedOutfits).delete(unsaveOutfit).patch(updateSavedOutfit);
export const savedOutfitRoutes = router;
