import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Vui lòng cung cấp tên"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Vui lòng cung cấp email"],
      unique: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Vui lòng cung cấp địa chỉ email hợp lệ"],
    },
    password: {
      type: String,
      required: [true, "Vui lòng cung cấp mật khẩu"],
      minlength: [6, "Mật khẩu phải có ít nhất 6 ký tự"],
      select: false, // Không trả về password trong query
    },
    passwordChangedAt: Date,
    role: {
      type: String,
      enum: ["admin","user"],
      default: "admin",
    },
}, {
    timestamps: true, // Tự động thêm createdAt và updatedAt
    versionKey: false, // Loại bỏ __v
});
const User = mongoose.model("User", userSchema);

 export default User;