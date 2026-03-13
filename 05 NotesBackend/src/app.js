import express from 'express';
import dotenv from 'dotenv';
import noteRouter from './routes/note.route.js';
import connectToDB from './config/connectToDB.js';

dotenv.config(); // load env variables first

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api", noteRouter);

// database connection
connectToDB();

export default app;