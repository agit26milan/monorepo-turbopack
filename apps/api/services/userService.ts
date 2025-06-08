import { UserRepository } from '../repository/userRepository';

export const UserService = {
  getUserData: async (id:string) => UserRepository.getUserDocumentByUserId(id)
};