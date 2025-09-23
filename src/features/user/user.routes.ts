import { Router } from 'express';
import { userController } from './user.controller';

const router = Router();

router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.get('/', userController.getAllUsers);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export const userRoutes = router;
