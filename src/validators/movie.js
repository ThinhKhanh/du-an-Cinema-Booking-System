import { body } from "express-validator";

export const movieValidator = [
  body("title")
    .notEmpty().withMessage("Tên phim là bắt buộc")
    .isLength({ min: 1 }).withMessage("Tên phim không được để trống"),

  body("genre")
    .notEmpty().withMessage("Thể loại là bắt buộc"),

  body("duration")
    .notEmpty().withMessage("Thời lượng là bắt buộc")
    .isInt({ min: 1 }).withMessage("Thời lượng phải là số nguyên dương"),

  body("description")
    .optional()
    .isLength({ max: 500 }).withMessage("Mô tả không được vượt quá 500 ký tự")
];
