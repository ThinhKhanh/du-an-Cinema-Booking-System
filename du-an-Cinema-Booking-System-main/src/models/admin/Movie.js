import mongoose from "mongoose";

const movieSchemas = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Tên phim là bắt buộc"],
      trim: true,
      maxlength: [200, "Tên phim không được vượt quá 200 ký tự"],
    },
    genre: {
      type: String,
      required: [true, "Thể loại phim là bắt buộc"],
      enum: ["Action", "Comedy", "Drama", "Romance", "Horror", "Other"],
      default: "Other",
    },
    duration: {
      type: Number,
      required: [true, "Thời lượng phim là bắt buộc"],
      min: [1, "Phim phải dài ít nhất 1 phút"],
    },
    description: {
      type: String,
      required: [true, "Mô tả phim là bắt buộc"],
      maxlength: [1000, "Mô tả không được vượt quá 1000 ký tự"],
    },
    releaseDate: {
      type: Date,
      required: [true, "Ngày phát hành là bắt buộc"],
    },
    poster: {
      type: String, // URL ảnh
      default: "",
    },
    ratings: {
      type: Number,
      default: 0,
      min: [0, "Đánh giá thấp nhất là 0"],
      max: [5, "Đánh giá cao nhất là 5"],
      set: (val) => Math.round(val * 10) / 10,
    },
    isShowing: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);

const Movies = mongoose.model("Movies", movieSchemas);
export default Movies;
