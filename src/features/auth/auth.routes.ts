import { Router } from 'express';
import { auth } from './auth';
import { toNodeHandler } from 'better-auth/node';
import { authMiddleware } from './middlewares/auth';
import { validateOnBoarding } from './middlewares/auth.validation';
import { onBoardingController } from './onBoarding.controller';

const router = Router();

// const betterAuthHandler = toNodeHandler(auth);

// // router.all('/*', toNodeHandler(auth));
// router.use(betterAuthHandler);

router.put( '/onboarding', authMiddleware, validateOnBoarding, onBoardingController.updateOnBoarding );
router.get('/user-details/:userId',authMiddleware, onBoardingController.getDetailsInfoById)

export default router;
