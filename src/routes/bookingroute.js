import { Router } from 'express';
import { bookingSchema } from '../validations/booking.js';
import { validateRequest } from '../middlewares/validateRequest.js';
import { createBooking, deleteBooking, getBookingById, getBookings, updateBooking } from '../controllers/bookingcontroller.js';
import { checkSeats } from "../controllers/bookingExtra.js";

const routerBooking = Router();
routerBooking.get("/check-seats", checkSeats);

routerBooking.get("/",getBookings);
routerBooking.get("/:id",getBookingById);
routerBooking.post("/",validateRequest(bookingSchema),createBooking);
routerBooking.put("/:id",validateRequest(bookingSchema),updateBooking);
routerBooking.delete("/:id",deleteBooking);


export default routerBooking;


