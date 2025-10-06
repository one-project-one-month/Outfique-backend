// import { Request, Response } from 'express';

// import { userService } from './user.service';
// import { CreateUserDto, UpdateUserDto } from './dto/userDto';

// export class UserController {
//   async createUser(req: Request, res: Response): Promise<void> {
//     const userData: CreateUserDto = req.body;

//     const newUser = await userService.createUser(userData);
//     res.status(201).json(newUser);
//   }

//   async getUserById(req: Request, res: Response): Promise<void> {
//     const id = parseInt(req.params.id, 10);
//     try {
//       const user = await userService.getUserById(id);
//       if (user) {
//         res.status(200).json(user);
//       } else {
//         res.status(404).send('User not found.');
//       }
//     } catch (error) {
//       res.status(500).send('Error fetching user.');
//     }
//   }

//   async getAllUsers(req: Request, res: Response): Promise<void> {
//     try {
//       const users = await userService.getAllUsers();
//       res.status(200).json({
//         message: 'hey ',
//       });
//     } catch (error) {
//       res.status(500).send('Error fetching users.');
//     }
//   }

//   async updateUser(req: Request, res: Response): Promise<void> {
//     const id = parseInt(req.params.id, 10);
//     const updateData: UpdateUserDto = req.body;
//     try {
//       const updatedUser = await userService.updateUser(id, updateData);
//       if (updatedUser) {
//         res.status(200).json(updatedUser);
//       } else {
//         res.status(404).send('User not found.');
//       }
//     } catch (error) {
//       res.status(500).send('Error updating user.');
//     }
//   }

//   async deleteUser(req: Request, res: Response): Promise<void> {
//     const id = parseInt(req.params.id, 10);
//     try {
//       await userService.deleteUser(id);
//       res.status(204).send();
//     } catch (error) {
//       res.status(404).send('User not found or error deleting user.');
//     }
//   }
// }

// export const userController = new UserController();
