import Booking from "../models/bookingmodel";

// Lấy lịch sử đặt vé của 1 user theo userId
export const getBookingHistoryByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    const bookings = await Booking.find({ userId });

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ message: "Người dùng chưa đặt vé nào" });
    }

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Lỗi server", message: error.message });
  }
};
