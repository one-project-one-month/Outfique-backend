import { Router } from 'express';
import { userRoutes } from './features/user/user.routes';
import healthRoutes from './health';
import authRoute from './features/auth/auth.routes';

const routes = Router();

routes.use('/', healthRoutes);
routes.use('/users', userRoutes);
routes.use('/auth', authRoute);

export default routes;
