import { User } from '../../../generated/client';
import { prisma } from '../../database';
import { CreateUserDto, UpdateUserDto } from './dto/userDto';

export class UserService {
  async createUser(userData: CreateUserDto): Promise<User> {
    const newUser = await prisma.user.create({
      data: userData,
    });
    return newUser;
  }

  async getUserById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await prisma.user.findMany();
    return users;
  }

  async updateUser(id: string, updateData: UpdateUserDto): Promise<User | null> {
    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: updateData,
    });
    return updatedUser;
  }

  async deleteUser(id: string): Promise<User> {
    const deletedUser = await prisma.user.delete({
      where: { id: id },
    });
    return deletedUser;
  }
}

export const userService = new UserService();
