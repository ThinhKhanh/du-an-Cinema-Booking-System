import Joi from "joi";

export const showtimeSchema = Joi.object({
  movieId: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      "string.pattern.base": "ID phim không hợp lệ",
      "any.required": "Phim là bắt buộc",
      "string.empty": "Phim là bắt buộc",
    }),

  time: Joi.string()
    .isoDate()
    .required()
    .messages({
      "string.isoDate": "Thời gian chiếu phải là định dạng ISO8601 (yyyy-mm-ddTHH:MM:ss)",
      "any.required": "Thời gian chiếu là bắt buộc",
      "string.empty": "Thời gian chiếu là bắt buộc",
    }),

  room: Joi.string()
    .required()
    .messages({
      "string.base": "Phòng chiếu phải là chuỗi",
      "any.required": "Phòng chiếu là bắt buộc",
      "string.empty": "Phòng chiếu là bắt buộc",
    }),
});

