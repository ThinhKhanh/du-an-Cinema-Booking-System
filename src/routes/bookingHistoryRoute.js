import { Router } from "express";
import { getBookingHistoryByUserId } from "../controllers/bookingHistory.js";

const routerBookingHistory = Router();

// GET /api/booking-history/:userId
routerBookingHistory.get("/:userId", getBookingHistoryByUserId);

export default routerBookingHistory;
