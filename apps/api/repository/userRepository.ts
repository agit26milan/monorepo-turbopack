import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import admin, { adminAuth } from "../firebase/admin";
import { UserRecord } from "firebase-admin/lib/auth/user-record";

export interface User extends UserRecord {}

export const UserRepository = {
  getByToken: async (token: string): Promise<User | undefined> => {
    try {
      let response = await adminAuth.verifyIdToken(token);
      const detailUser = await adminAuth.getUser(response.uid)
      return detailUser;
    } catch (e) {
      return undefined;
    }
  },
};
