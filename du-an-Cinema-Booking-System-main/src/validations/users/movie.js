import Joi from "joi";

export const movieSchema = Joi.object({
  title: Joi.string()
    .min(1)
    .required()
    .messages({
      "string.base": "Tên phim phải là chuỗi",
      "string.empty": "Tên phim là bắt buộc",
      "string.min": "Tên phim không được để trống",
      "any.required": "Tên phim là bắt buộc",
    }),

  genre: Joi.string()
    .required()
    .messages({
      "string.base": "Thể loại phải là chuỗi",
      "string.empty": "Thể loại là bắt buộc",
      "any.required": "Thể loại là bắt buộc",
    }),

  duration: Joi.number()
    .integer()
    .min(1)
    .required()
    .messages({
      "number.base": "Thời lượng phải là số nguyên",
      "number.min": "Thời lượng phải là số nguyên dương",
      "any.required": "Thời lượng là bắt buộc",
    }),

  description: Joi.string()
    .max(500)
    .allow(null, "")
    .messages({
      "string.max": "Mô tả không được vượt quá 500 ký tự",
    }),
});

