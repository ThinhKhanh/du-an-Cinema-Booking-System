import { Router } from "express";
import routerBooking from "./bookingroute";
import routerBookingHistory from "./bookingHistoryRoute";
import routerMovie from "./movieroute";

const router = Router();

router.use("/booking", routerBooking);
router.use("/booking-history", routerBookingHistory);

router.use("/movies", routerMovie);

export default router;
