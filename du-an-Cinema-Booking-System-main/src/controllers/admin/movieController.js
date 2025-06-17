import Movie from "../../models/users/moviemodel";

// Tìm kiếm phim theo tên, thể loại, thời gian chiếu
export const searchMovie = async (req, res) => {
  try {
    const { title, genre, showTime } = req.query;

    const query = {};

    if (title) {
      query.title = { $regex: title, $options: "i" }; // không phân biệt hoa thường
    }

    if (genre) {
      query.genre = genre;
    }

    if (showTime) {
      const time = new Date(showTime);
      query.showTimes = { $elemMatch: { $eq: time } };
    }

    const movies = await Movie.find(query);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi tìm kiếm", message: error.message });
  }
};


export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: "Lỗi server", message: err.message });
  }
};

export const createMovies = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ error: "Lỗi khi tạo phim", message: err.message });
  }
};

