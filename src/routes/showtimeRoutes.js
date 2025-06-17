import { Router } from "express";
import {
  getShowtimes,
  createShowtime,
  updateShowtime,
  deleteShowtime,
} from "../controllers/showtimeController.js";

import { showtimeValidator } from "../validators/showtime.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

router.get("/", getShowtimes);
router.post("/", showtimeValidator, validate, createShowtime);
router.put("/:id", showtimeValidator, validate, updateShowtime);
router.delete("/:id", deleteShowtime);

export default router;
