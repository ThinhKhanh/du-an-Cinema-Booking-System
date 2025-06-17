import mongoose from "mongoose";

const showtimeSchema = new mongoose.Schema(
  {
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: [true, "Phim chiếu là bắt buộc"],
    },
    time: {
      type: Date,
      required: [true, "Thời gian chiếu là bắt buộc"],
    },
    room: {
      type: String,
      required: [true, "Phòng chiếu là bắt buộc"],
      trim: true,
    },
    seats: {
      type: Number,
      default: 100,
      min: [1, "Số ghế phải lớn hơn 0"],
    },
  },
  { timestamps: true, versionKey: false }
);

const Showtime = mongoose.model("Showtime", showtimeSchema);
export default Showtime;
// This code defines a Mongoose schema for a cinema showtime, which includes fields for the movie ID, time of the show, room number, and number of seats. It also sets up validation rules for these fields.