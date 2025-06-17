import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(" kết nối MongoDB thành công");
  } catch (err) {
    console.error(" kết nối MongoDB thất bại:", err.message);
    process.exit(1);
  }
};

export default connectDb;
