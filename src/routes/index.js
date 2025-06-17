import { Router } from "express";

// Import các route con
import movieRoutes from "./movieRoutes.js";
import showtimeRoutes from "./showtimeRoutes.js";
import bookingRoutes from "./bookingRoutes.js";

const router = Router();

// Mount từng route với tiền tố riêng
router.use("/movies", movieRoutes);
router.use("/showtimes", showtimeRoutes);
router.use("/bookings", bookingRoutes);

export default router;
