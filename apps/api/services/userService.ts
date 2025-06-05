import { UserRepository } from '../repository/userRepository';

export const UserService = {
  getAllUsers: async () => UserRepository.getAll(),
  getUserById: async (id: string) => UserRepository.getById(id),
};