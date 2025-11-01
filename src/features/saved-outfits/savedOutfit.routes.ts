import { Router } from 'express';
import {
  getSavedOutfits,
  saveOutfit,
  removeOutfit,
  updateSavedOutfit,
} from './savedOutfit.controller';
import { saveOutfitValidation, updateSavedOutfitValidation } from './dto/savedOutfitValidation';
import { handleValidationErrors } from '../../middleware/validation-handler';

const router = Router();

router
  .route('/')
  .post(saveOutfitValidation, handleValidationErrors, saveOutfit)
  .get(getSavedOutfits);
router
  .route('/:id')
  .delete(removeOutfit)
  .patch(updateSavedOutfitValidation, handleValidationErrors, updateSavedOutfit);
export const savedOutfitRoutes = router;
