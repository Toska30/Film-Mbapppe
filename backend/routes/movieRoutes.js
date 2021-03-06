const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController");


router.get('/countDocuments', movieController.countMovieDocuments)
router.get('', movieController.getAllMovies)
router.get('/:movieid', movieController.getMovieById)

router.post("/filter", movieController.filterAllMovies)

module.exports = router;