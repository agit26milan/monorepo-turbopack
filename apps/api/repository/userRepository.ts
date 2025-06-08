import admin, { adminAuth } from "../firebase/admin";
import { UserRecord } from "firebase-admin/lib/auth/user-record";
import { USER_PATH } from "../firebase/pathCollection";

export interface User extends UserRecord {}

export interface UserDocument {
  name?: string;
  email?: string;
  photoUrl?: string | null;
  uid?: string;
  createdAt?: number;
  updatedAt?: number;
  totalAverageWeightRatings?: number;
  numberOfRents?: number;
  recentlyActive?: number;
}

export const UserRepository = {
  getByToken: async (token: string): Promise<User | null> => {
    try {
      let response = await adminAuth.verifyIdToken(token);
      const detailUser = await adminAuth.getUser(response.uid);
      return detailUser;
    } catch (e) {
      return null;
    }
  },
  createUserData: async (dataUser: UserDocument) => {
    try {
      if (dataUser.uid) {
        const response = await admin
          .firestore()
          .collection(USER_PATH)
          .doc(dataUser.uid)
          .set(dataUser);
        return response;
      }
      return null;
    } catch (e) {
      return null;
    }
  },

  getUserByUserId: async (id: string): Promise<User | null> => {
    try {
      const response = await adminAuth.getUser(id);
      return response;
    } catch (e) {
      return null;
    }
  },
  getUserDocumentByUserId: async (id: string) => {
    try {
      const response = (
        await admin.firestore().collection(USER_PATH).doc(id).get()
      ).data();
      return response;
    } catch (e) {
      return null;
    }
  },
};
