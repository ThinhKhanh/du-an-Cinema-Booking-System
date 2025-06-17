import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import connectDb from "./config/db.js";
import { validateRequest } from "./middlewares/validateRequest.js";

dotenv.config();

const app = express();

app.use(express.json());

// Kết nối MongoDB
connectDb();

// Routes chính
app.use("/api", router);

// Khởi động server
app.listen(process.env.PORT, () => {
  console.log(`✅ Server is running on port ${process.env.PORT}`);
});
