import { Router } from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import { getUserByToken } from '../controller/userController';
const userRouter = Router();

userRouter.get('/detail', authMiddleware, getUserByToken);

export default userRouter;
