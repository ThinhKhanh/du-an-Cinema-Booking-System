import Joi from "joi";

export const bookingSchema = Joi.object({
  userId: Joi.string()
    .required()
    .messages({
      "string.base": "userId phải là chuỗi",
      "any.required": "Vui lòng cung cấp userId",
    }),

  movieId: Joi.string()
    .required()
    .messages({
      "string.base": "movieId phải là chuỗi",
      "any.required": "Vui lòng cung cấp movieId",
    }),

  seatNumbers: Joi.array()
    .items(Joi.string().messages({
      "string.base": "Ghế phải là chuỗi",
    }))
    .min(1)
    .required()
    .messages({
      "array.base": "seatNumbers phải là một mảng",
      "array.min": "Phải chọn ít nhất một ghế",
      "any.required": "Vui lòng cung cấp danh sách ghế",
    }),

  showTime: Joi.date()
    .required()
    .messages({
      "date.base": "showTime phải là ngày hợp lệ",
      "any.required": "Vui lòng cung cấp thời gian chiếu",
    }),

  createdAt: Joi.date()
    .default(() => new Date())
    .messages({
      "date.base": "createdAt phải là ngày hợp lệ",
    }),
});

