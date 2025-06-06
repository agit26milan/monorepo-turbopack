import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import admin, { adminAuth } from "../firebase/admin";

export interface User extends DecodedIdToken {}

export const UserRepository = {
  getByToken: async (token: string): Promise<User | undefined> => {
    try {
      const response = await adminAuth.verifyIdToken(token);
      return response;
    } catch (e) {
      return undefined;
    }
  },
};
