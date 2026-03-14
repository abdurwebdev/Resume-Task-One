import express from 'express';
import userRouter from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectToDB from './config/connectToDB.js';

dotenv.config();
connectToDB();
const app = express();
app.use(express.json())
app.use(cookieParser());
app.use("/api",userRouter);

export default app;