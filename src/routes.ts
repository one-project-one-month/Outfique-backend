import { NextFunction, Request, Response, Router } from 'express';
// import { userRoutes } from './features/user/user.routes';
import healthRoutes from './health';
import { savedOutfitRoutes } from './features/saved-outfits/savedOutfit.routes';
import { testRoutes } from './testingRoutes/testRoutes';
import { authRoute } from './features/auth/auth.routes';

const routes = Router();

routes.use('/test', testRoutes);

routes.use('/', healthRoutes);
// routes.use('/users', userRoutes);
routes.use("/auth",authRoute)
routes.use('/saved-outfits', savedOutfitRoutes);
export default routes;
