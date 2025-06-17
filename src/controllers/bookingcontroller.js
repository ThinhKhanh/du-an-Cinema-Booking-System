import Booking from "../models/bookingmodel";

// Lấy tất cả vé đã đặt
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Lỗi server", message: error.message });
  }
};

// Lấy chi tiết vé theo ID
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking)
      return res.status(404).json({ error: "Không tìm thấy vé đã đặt" });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: "Lỗi server", message: error.message });
  }
};

// Đặt vé mới
export const createBooking = async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Lỗi khi đặt vé", message: error.message });
  }
};

// Sửa thông tin vé đã đặt
export const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!booking)
      return res.status(404).json({ error: "Không tìm thấy vé để cập nhật" });
    res.json(booking);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Lỗi khi cập nhật vé", message: error.message });
  }
};

// Hủy vé (xóa)
export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking)
      return res.status(404).json({ error: "Không tìm thấy vé để xóa" });
    res.json({ success: "Hủy vé thành công" });
  } catch (error) {
    res.status(400).json({ error: "Lỗi khi hủy vé", message: error.message });
  }
};


