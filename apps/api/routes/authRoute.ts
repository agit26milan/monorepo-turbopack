import { Router } from 'express';
import { getUsers } from '../controller/userController';
const authRouter = Router();

authRouter.get('/register', getUsers);

export default authRouter;
