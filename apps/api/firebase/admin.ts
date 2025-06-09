import admin, { ServiceAccount } from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json";
const account: ServiceAccount = serviceAccount;
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(account),
  });
}
export const adminAuth = admin.auth();

export default admin;
