import { Router } from 'express';
import { userRoutes } from './features/user/user.routes';
import healthRoutes from './health';

const routes = Router();

routes.use('/', healthRoutes);
routes.use('/users', userRoutes);

export default routes;
