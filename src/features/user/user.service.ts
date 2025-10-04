import { User } from '../../../generated/prisma';
import { prisma } from '../../database';
import { CreateUserDto, UpdateUserDto } from './dto/userDto';

export class UserService {
  async createUser(userData: CreateUserDto): Promise<User> {
    const newUser = await prisma.user.create({
      data: userData,
    });
    return newUser;
  }

  async getUserById(id: number): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { userId: id },
    });
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await prisma.user.findMany();
    return users;
  }

  async updateUser(id: number, updateData: UpdateUserDto): Promise<User | null> {
    const updatedUser = await prisma.user.update({
      where: { userId: id },
      data: updateData,
    });
    return updatedUser;
  }

  async deleteUser(id: number): Promise<User> {
    const deletedUser = await prisma.user.delete({
      where: { userId: id },
    });
    return deletedUser;
  }
}

export const userService = new UserService();
