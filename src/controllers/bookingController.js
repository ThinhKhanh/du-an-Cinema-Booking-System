import Booking from "../models/Booking";

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("movieId", "title")       // Lấy tên phim
      .populate("showtimeId", "time room"); // Lấy thông tin suất chiếu

    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const createBooking = async (req, res) => {
  try {
    const newBooking = await Booking.create(req.body);
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};