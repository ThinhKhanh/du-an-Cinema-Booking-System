import { Router } from "express";
import { createMovie, searchMovies } from "../controllers/moviecontroller";

const routerMovie = Router();

routerMovie.get("/search", searchMovies);
routerMovie.post("/", createMovie); 

export default routerMovie;