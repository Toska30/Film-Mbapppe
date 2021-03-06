const Movie = require("../models/Movie");

const getAllMovies = async (req, res) => {
  let movies = await Movie.find().exec();
  res.json(movies);
  return;
};

const filterAllMovies = async (req, res) => {
  // year will come in as a string from user input so we need to convert in to a number to mathc schema.
  let yearToNumber = parseInt(req.body.Year);

  //url for testing http://localhost:3001/api/v1/movies?actor=morgan&title=spiral
  let querySearch = new RegExp(
    `${req.query.search ? req.query.search : ""}\\w*`,
    "gi"
  );

  // filter in movies
  // filter by rated
  // filter by director
  // filter by language
  // filter by runtime
  // filter by year
  //1. example url for testing http://localhost:3001/api/v1/movies?title=S&rated=pg-13
  //2. result should be the movie supernova.
  //3. tester could also log the req.query object at start of function

  // this one filters for one genre is that enough?
  let queryGenre = new RegExp(
    `${req.body.Genre ? req.body.Genre : ""}\\w*`,
    "gi"
  );
  let queryRated = new RegExp(
    `${req.body.Rating ? req.body.Rating : ""}\\w*`,
    "gi"
  );
  let queryDirector = new RegExp(
    `${req.body.Director ? req.body.Director : ""}\\w*`,
    "gi"
  );
  let queryLanguage = new RegExp(
    `${req.body.Language ? req.body.Language : ""}\\w*`,
    "gi"
  );
  let queryRuntime = new RegExp(
    `${req.body.Runtime ? req.body.Runtime : ""}\\w*`,
    "gi"
  );

  //if the find method dosen't have any arguments, all documents will be return
  // let movies = await Movie.find({ Title: queryTitle}).exec()
  let movies = await Movie.find({
    $or: [{ Title: querySearch }, { Actors: querySearch }],

    Genre: queryGenre,
    Rated: queryRated,
    Director: queryDirector,
    Language: queryLanguage,
    Runtime: queryRuntime,
    // if there is a query with year include that in the find method otherwise we run 0 to infintiy to make sure we get all movies in db.
    Year: yearToNumber ? yearToNumber : { $gt: 0, $lt: Infinity },
  }).exec();
  res.json(movies);
};

const countMovieDocuments = async (req, res) => {
  Movie.count({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
};

const getMovieById = async (req, res) => {
  Movie.findById(req.params.movieid).exec((err, movie) => {
    // Checks for thrown errors from the method itself.
    if (err) {
      res.status(400).json({ error: "Something went wrong" });
      return;
    }

    // If no match is found in the DB.
    if (!movie) {
      res
        .status(404)
        .json({ error: `Movie with id ${req.params.movieid} does not exist` });
      return;
    }

    res.json(movie);
  });
};

module.exports = {
  getAllMovies,
  getMovieById,
  countMovieDocuments,
  filterAllMovies,
};
