import { UserDocument, UserRepository } from '../repository/userRepository';

export const UserService = {
  getUserData: async (id:string) => UserRepository.getUserDocumentByUserId(id),
  updateUserData: async (curDataUser: UserDocument, updateDataUser:any) => UserRepository.updateUserData(curDataUser, updateDataUser)
};