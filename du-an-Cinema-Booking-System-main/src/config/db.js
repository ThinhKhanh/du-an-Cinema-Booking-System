import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect("mongodb://localhost:27017");
    } catch (error) {
         console.error("Lỗi kết nối MongoDB:", error.message);
        process.exit(1);
    }
}

export default connectDB