import { UserRepository } from '../repository/userRepository';

export const UserService = {
  getUserByToken: async (token:string) => UserRepository.getByToken(token)
};