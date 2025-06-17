import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: [true, "Phim là bắt buộc"],
    },
    showtimeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Showtime",
      required: [true, "Suất chiếu là bắt buộc"],
    },
    customerName: {
      type: String,
      required: [true, "Tên khách hàng là bắt buộc"],
      trim: true,
    },
    customerPhone: {
      type: String,
      required: [true, "Số điện thoại là bắt buộc"],
      match: [/^0\d{9}$/, "Số điện thoại không hợp lệ"],
    },
    quantity: {
      type: Number,
      required: [true, "Số vé là bắt buộc"],
      min: [1, "Phải đặt ít nhất 1 vé"],
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true, versionKey: false }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
