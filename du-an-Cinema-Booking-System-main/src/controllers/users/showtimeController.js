import Showtime from "../../models/admin/Showtime.js";

// Lấy danh sách suất chiếu
export const getShowtimes = async (req, res) => {
    try {
        const showtimes = await Showtime.find().populate("movieId");
        res.json(showtimes);
    } catch (err) {
        res.status(500).json({ error: "Lỗi server", message: err.message });
    }
};

// Tạo suất chiếu mới
export const createShowtime = async (req, res) => {
    try {
        const newShowtime = new Showtime(req.body);
        await newShowtime.save();
        res.status(201).json(newShowtime);
    } catch (err) {
        res.status(400).json({ error: "Lỗi khi thêm suất chiếu", message: err.message });
    }
};

// Cập nhật suất chiếu
export const updateShowtime = async (req, res) => {
    try {
        const showtime = await Showtime.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!showtime) return res.status(404).json({ error: "Không tìm thấy suất chiếu" });
        res.json(showtime);
    } catch (err) {
        res.status(400).json({ error: "Lỗi khi cập nhật suất chiếu", message: err.message });
    }
};

// Xóa suất chiếu
export const deleteShowtime = async (req, res) => {
    try {
        const showtime = await Showtime.findByIdAndDelete(req.params.id);
        if (!showtime) return res.status(404).json({ error: "Không tìm thấy suất chiếu" });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: "Lỗi server", message: err.message });
    }
};
