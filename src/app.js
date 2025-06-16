import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use("/api",)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})