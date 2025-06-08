import { Router } from 'express';
import { logoutUser, registerUser } from '../controller/authController';
import { authMiddleware } from '../middleware/authMiddleware';
const authRouter = Router();

authRouter.post('/register',registerUser);
authRouter.get('/logout', authMiddleware, logoutUser)

export default authRouter;
