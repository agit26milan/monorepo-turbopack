import { Router } from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import { getUserDocument, updateUserData } from '../controller/userController';
const userRouter = Router();

userRouter.get('/detail', authMiddleware, getUserDocument);
userRouter.patch('/update-data-user', authMiddleware, updateUserData)

export default userRouter;
