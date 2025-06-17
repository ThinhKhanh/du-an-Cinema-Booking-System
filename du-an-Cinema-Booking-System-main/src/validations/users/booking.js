import Joi from "joi";

export const bookingSchemas = Joi.object({
  movieId: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      "string.pattern.base": "ID phim không hợp lệ",
      "any.required": "Phim là bắt buộc",
    }),

  showtimeId: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      "string.pattern.base": "ID suất chiếu không hợp lệ",
      "any.required": "Suất chiếu là bắt buộc",
    }),

  customerName: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Tên khách hàng là bắt buộc",
    }),

  customerPhone: Joi.string()
    .pattern(/^0\d{9}$/)
    .required()
    .messages({
      "string.pattern.base": "Số điện thoại không hợp lệ",
      "any.required": "Số điện thoại là bắt buộc",
    }),

  quantity: Joi.number()
    .integer()
    .min(1)
    .required()
    .messages({
      "number.base": "Số vé phải là số nguyên",
      "number.min": "Phải đặt ít nhất 1 vé",
      "any.required": "Số vé là bắt buộc",
    }),
});


