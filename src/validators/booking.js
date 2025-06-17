import { body } from "express-validator";

export const bookingValidator = [
  body("movieId")
    .notEmpty().withMessage("Phim là bắt buộc")
    .isMongoId().withMessage("ID phim không hợp lệ"),

  body("showtimeId")
    .notEmpty().withMessage("Suất chiếu là bắt buộc")
    .isMongoId().withMessage("ID suất chiếu không hợp lệ"),

  body("customerName")
    .notEmpty().withMessage("Tên khách hàng là bắt buộc"),

  body("customerPhone")
    .notEmpty().withMessage("Số điện thoại là bắt buộc")
    .matches(/^0\d{9}$/).withMessage("Số điện thoại không hợp lệ"),

  body("quantity")
    .notEmpty().withMessage("Số vé là bắt buộc")
    .isInt({ min: 1 }).withMessage("Phải đặt ít nhất 1 vé"),
];
