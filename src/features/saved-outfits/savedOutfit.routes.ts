import { Router } from 'express';
import {
  getSavedOutfits,
  saveOutfit,
  unsaveOutfit,
  updateSavedOutfit,
} from './savedOutfit.controller';
import { saveOutfitValidation, updateSavedOutfitValidation } from './dto/savedOutfitValidation';
import { handleValidationErrors } from '../../middleware/validation-handler';

const router = Router();

router.route('/').post(saveOutfitValidation, handleValidationErrors, saveOutfit);
router
  .route('/:id')
  .get(getSavedOutfits)
  .delete(unsaveOutfit)
  .patch(updateSavedOutfitValidation, handleValidationErrors, updateSavedOutfit);
export const savedOutfitRoutes = router;
