import { Router } from "express";
import { createBooking, getAllBookings } from "../controllers/bookingController.js";
import { bookingValidator } from "../validators/booking.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

router.get("/", getAllBookings);
router.post("/", bookingValidator, validate, createBooking);

export default router;
