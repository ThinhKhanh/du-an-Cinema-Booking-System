import Booking from "../models/bookingmodel.js";

export const checkSeats = async (req, res) => {
  try {
    const { movieId, showTime, seats } = req.query;

    if (!movieId || !showTime || !seats) {
      return res.status(400).json({
        error: "Thiếu thông tin movieId, showTime hoặc seats",
      });
    }

    // ✅ Chuẩn hóa: nếu client gửi seats=A1 hoặc seats=A1,A2
    let seatsToCheck = [];

    if (Array.isArray(seats)) {
      seatsToCheck = seats;
    } else if (typeof seats === "string") {
      seatsToCheck = seats.includes(",") ? seats.split(",") : [seats];
    } else {
      return res.status(400).json({ error: "Định dạng seats không hợp lệ" });
    }

    const existingBookings = await Booking.find({
      movieId,
      showTime: new Date(showTime),
    });

    const allBookedSeats = existingBookings.flatMap(booking => booking.seatNumbers);

    const duplicatedSeats = seatsToCheck.filter(seat => allBookedSeats.includes(seat));

    if (duplicatedSeats.length > 0) {
      return res.status(200).json({
        message: "Một số ghế đã được đặt",
        duplicatedSeats,
        isAvailable: false,
      });
    }

    res.status(200).json({
      message: "Tất cả ghế còn trống",
      isAvailable: true,
    });
  } catch (error) {
    res.status(500).json({
      error: "Lỗi server",
      message: error.message,
    });
  }
};
