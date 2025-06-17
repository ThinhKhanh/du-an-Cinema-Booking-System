import Movie from "../models/Movie.js";

// Lấy danh sách phim
export const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: "Lỗi server", message: err.message });
    }
};

// Lấy phim theo ID
export const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ error: "Không tìm thấy phim" });
        res.json(movie);
    } catch (err) {
        res.status(500).json({ error: "Lỗi server", message: err.message });
    }
};

// Tạo phim mới
export const createMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(400).json({ error: "Lỗi khi thêm phim", message: err.message });
    }
};

// Cập nhật phim
export const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!movie) return res.status(404).json({ error: "Không tìm thấy phim" });
        res.json(movie);
    } catch (err) {
        res.status(400).json({ error: "Lỗi khi cập nhật phim", message: err.message });
    }
};

// Xóa phim
export const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) return res.status(404).json({ error: "Không tìm thấy phim" });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: "Lỗi server", message: err.message });
    }
};

// Tìm kiếm phim
export const searchMovies = async (req, res) => {
    try {
        const { title, genre } = req.query;
        const query = {};
        if (title) query.title = { $regex: title, $options: "i" };
        if (genre) query.genre = genre;

        const movies = await Movie.find(query);
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: "Lỗi tìm kiếm phim", message: err.message });
    }
};
