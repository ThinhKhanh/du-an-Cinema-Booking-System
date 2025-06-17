import Joi from "joi";

export const bookingSchema = Joi.object({
  userId: Joi.string().required(),
  movieId: Joi.string().required(),
  seatNumbers: Joi.array().items(Joi.string()).min(1).required(),
  showTime: Joi.date().required(),
  createdAt: Joi.date().default(Date.now),
});
