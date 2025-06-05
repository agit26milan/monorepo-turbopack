import { Router } from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import { getUsers } from '../controller/userController';
const userRouter = Router();

userRouter.get('/', authMiddleware, getUsers);

export default userRouter;
