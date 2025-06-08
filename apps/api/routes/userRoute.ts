import { Router } from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import { getUserDocument } from '../controller/userController';
const userRouter = Router();

userRouter.get('/detail', authMiddleware, getUserDocument);

export default userRouter;
