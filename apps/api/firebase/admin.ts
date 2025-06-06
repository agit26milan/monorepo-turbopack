import admin, { ServiceAccount } from 'firebase-admin';
import serviceAccount from "./serviceAccountKey.json"
const account: ServiceAccount = serviceAccount
  admin.initializeApp({
    credential: admin.credential.cert(account)
  });

export default admin;