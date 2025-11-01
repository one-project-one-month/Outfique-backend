import { NextFunction, Request, Response, Router } from 'express';
// import { userRoutes } from './features/user/user.routes';
import healthRoutes from './health';
import { savedOutfitRoutes } from './features/saved-outfits/savedOutfit.routes';
import { testRoutes } from './testingRoutes/testRoutes';
import { digitalClosetRoutes } from './features/digital-closet/digital-closet.routes';
import { imageUploadRoutes } from './features/img-upload/imageUploadRoutes';

const routes = Router();

routes.use('/test', testRoutes);
routes.use('/', healthRoutes);
// routes.use('/users', userRoutes);
routes.use('/saved-outfits', savedOutfitRoutes);
routes.use('/digital-closet', digitalClosetRoutes);
routes.use('/image-upload', imageUploadRoutes);
export default routes;
