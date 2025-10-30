import { Router } from 'express';
import { authMiddleware } from '../auth/middlewares/auth';
import { onBoardingController } from './onBoarding.controller';
import { validateOnBoarding } from './middleware/onBoarding.validation';

const router = Router();

router.put('/', authMiddleware, validateOnBoarding, onBoardingController.updateOnBoarding);
router.get('/user-details/:userId', authMiddleware, onBoardingController.getDetailsInfoById);

export const onBoardingRoute = router;
