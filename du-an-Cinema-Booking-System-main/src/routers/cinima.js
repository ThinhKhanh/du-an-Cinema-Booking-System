import {Router} from 'express';

import { validateRequest } from '../middlewares/validateRequest';
import { bookingSchemas } from '../validations/users/booking';
import {movieSchema } from '../validations/users/movie';
import {showtimeSchema } from '../validations/users/showtime';
import {bookingSchema } from '../validations/admin/booking';
import { createMovie, getMovieById, getMovies, searchMovies, updateMovie ,deleteMovie } from '../controllers/users/movieController';
import { createBooking,getAllBookings  } from '../controllers/users/bookingcontroller';
import { createShowtime, deleteShowtime, getShowtimes, updateShowtime } from '../controllers/users/showtimeController';
import { getBookingHistoryByUserId } from '../controllers/admin/bookingHistory';
import { checkSeats } from '../controllers/admin/bookingExtra';
import { createBookings, deleteBooking, getBookingById, getBookings, updateBooking } from '../controllers/admin/bookingController';
import { createMovies, searchMovie } from '../controllers/admin/movieController';
import { restrictTo } from '../middlewares/authRequest';




const cinimaRouter = Router();

cinimaRouter.get("/",restrictTo("user"), getAllBookings);
cinimaRouter.post("/",validateRequest(bookingSchemas),restrictTo("admin"), createBooking);
// movie
cinimaRouter.get("/movie",restrictTo("admin","user"), getMovies);
cinimaRouter.get("/movie/:id",restrictTo("user"), getMovieById);
cinimaRouter.get("/movie/search",restrictTo("user"), searchMovies);
cinimaRouter.post("/movie",validateRequest(movieSchema),restrictTo("admin"), createMovie);
cinimaRouter.put("/movie/:id",validateRequest(movieSchema),restrictTo("admin"), updateMovie);
cinimaRouter.delete("/movie/:id",restrictTo("admin"), deleteMovie);
// showtime
cinimaRouter.get("/showtime",restrictTo("user"), getShowtimes);
cinimaRouter.post("/showtime",validateRequest(showtimeSchema),restrictTo("admin"), createShowtime);
cinimaRouter.put("/showtime/:id",validateRequest(showtimeSchema),restrictTo("admin"), updateShowtime);
cinimaRouter.delete("/showtime/:id",restrictTo("admin"), deleteShowtime);
// booking
cinimaRouter.get("/booking/:id",restrictTo("user"), getBookingHistoryByUserId);
cinimaRouter.get("/booking/search",restrictTo("user"), searchMovie);
cinimaRouter.get("/booking",restrictTo("user"), getBookings);
cinimaRouter.get("/booking/:id",restrictTo("user"), getBookingById);

cinimaRouter.post("/booking/check",restrictTo("admin"), checkSeats);
cinimaRouter.post("/booking/search",restrictTo("admin"), createMovies);
cinimaRouter.post("/booking",validateRequest(bookingSchema),restrictTo("admin"), createBookings);
cinimaRouter.put("/booking/:id",validateRequest(bookingSchema),restrictTo("admin"), updateBooking);
cinimaRouter.delete("/booking/:id",restrictTo("admin"), deleteBooking);



export default cinimaRouter;