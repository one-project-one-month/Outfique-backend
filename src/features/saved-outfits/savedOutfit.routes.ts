import { Router } from 'express';
import {
  getSavedOutfits,
  saveOutfit,
  unsaveOutfit,
  updateSavedOutfit,
} from './savedOutfit.controller';
import { saveOutfitValidation } from './dto/savedOutfitValidation';
import { handleValidationErrors } from '../../middleware/validation-handler';

const router = Router();

router.route('/').post(saveOutfitValidation, handleValidationErrors, saveOutfit);
router.route('/:id').get(getSavedOutfits).delete(unsaveOutfit).patch(updateSavedOutfit);
export const savedOutfitRoutes = router;
