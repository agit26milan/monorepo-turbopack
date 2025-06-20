import express from 'express';
import userRouter from './routes/userRoute';
import authRouter from './routes/authRoute';
import cors from 'cors';

const app = express();
const PORT = 4200;

app.use(express.json())
app.use(express.urlencoded({ extended: true })); 
app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}));
app.use('/api/v1/user', userRouter)
app.use('/api/v1/auth', authRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app