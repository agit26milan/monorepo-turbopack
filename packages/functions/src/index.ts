
import {onRequest} from "firebase-functions/v2/https";
import app from '../../../apps/api/index'


exports.api = onRequest(app);
