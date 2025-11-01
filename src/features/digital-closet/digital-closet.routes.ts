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
router.route('/:id').patch(favoriteAddedOutfit).delete(removeOutfit);

router
  .route('/favorite')
  .patch(updateClosetOutfitValidation, handleValidationErrors, updateAddedOutfit);

export const digitalClosetRoutes = router;
