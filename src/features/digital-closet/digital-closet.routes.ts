import { Router } from 'express';
import {
  addOutfit,
  favoriteAddedOutfit,
  getAddedOutfits,
  removeOutfit,
  updateAddedOutfit,
} from './digital-closet.controller';
import {
  addToClosetValidaiton,
  updateClosetOutfitValidation,
} from './dto/digital-closet-Validation';
import { handleValidationErrors } from '../../middleware/validation-handler';

const router = Router();
router
  .route('/')
  .get(getAddedOutfits)
  .post(addToClosetValidaiton, handleValidationErrors, addOutfit);
router
  .route('/:id')
  .patch(updateClosetOutfitValidation, handleValidationErrors, updateAddedOutfit)
  .delete(removeOutfit);

router.route('/favorite/:id').patch(favoriteAddedOutfit);

export const digitalClosetRoutes = router;
