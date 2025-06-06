import express from 'express';
import userRouter from './routes/userRoute';
import authRouter from './routes/authRoute';

const app = express();
const PORT = 4200;

app.use(express.json())
app.use(express.urlencoded({ extended: true })); 
app.use('/api/v1/user', userRouter)
app.use('/api/v1/auth', authRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});