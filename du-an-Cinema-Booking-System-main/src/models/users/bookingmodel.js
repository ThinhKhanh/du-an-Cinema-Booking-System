import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "Người dùng không được để trống"],
  },
  movieId: {
    type: String,
    required: [true, "Phim không được để trống"],
  },
  seatNumbers: {
    type: [String],
    required: [true, "Danh sách ghế không được để trống"],
  },
  showTime: {
    type: Date,
    required: [true, "Thời gian chiếu không được để trống"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
{ timestamps: true, versionKey: false });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
