import { Router } from "express";
import {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  searchMovies,
} from "../controllers/movieController.js";
import { movieValidator } from "../validators/movie.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

router.get("/", getMovies);
router.get("/search", searchMovies);
router.get("/:id", getMovieById);
router.post("/", movieValidator, validate, createMovie);
router.put("/:id", movieValidator, validate, updateMovie);
router.delete("/:id", deleteMovie);

export default router;
