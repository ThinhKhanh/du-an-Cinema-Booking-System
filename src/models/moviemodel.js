import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Tên phim không được để trống"] },
  genre: { type: String, required: [true, "Thể loại không được để trống"] },
  description: { type: String },
  showTimes: { type: [Date], default: [] }, // Mảng thời gian chiếu
  duration: { type: Number },               // Phút
  createdAt: { type: Date, default: Date.now },
}, {
  timestamps: true,
  versionKey: false
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
