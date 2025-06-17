import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js"; // hoặc ./routers nếu thư mục bạn đặt tên là 'routers'
import connectDb from "./config/db.js";

dotenv.config();

const app = express();

// Kết nối database
connectDb();

// Middleware
app.use(express.json()); // Đọc dữ liệu JSON

// Routes
app.use("/api", router); // Ví dụ: /api/movies, /api/bookings,...

// Khởi động server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
