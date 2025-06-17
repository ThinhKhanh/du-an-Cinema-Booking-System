import { body } from "express-validator";

export const showtimeValidator = [
  body("movieId")
    .notEmpty().withMessage("Phim là bắt buộc")
    .isMongoId().withMessage("ID phim không hợp lệ"),

  body("time")
    .notEmpty().withMessage("Thời gian chiếu là bắt buộc")
    .isISO8601().withMessage("Thời gian chiếu phải là định dạng ISO8601 (yyyy-mm-ddTHH:MM:ss)"),

  body("room")
    .notEmpty().withMessage("Phòng chiếu là bắt buộc")
    .isString().withMessage("Phòng chiếu phải là chuỗi")
];
