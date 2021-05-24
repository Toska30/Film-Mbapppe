const Showing = require("../models/Showing");

//only using createShowing function to test if getShowingById works

const getAllShowings = async (req, res) => {
  let showing = await Showing.find().exec();
  res.json(showing);
}

const createShowing = async (req, res) => {
  console.log(req.body);
  let newShowing = await Showing.create(req.body); 
  await newShowing.save(); 
  res.json(newShowing); 
}

const getShowingById = async (req, res) => {
  Showing.findById(req.params.showingId).exec(async (err, result) => {
    if (err) {
      res.status(400).json({ error: "Something went wrong" });
      return;
    }

    if (!result) {
      res
        .stataus(404)
        .json({
          error: `Showing with id ${req.params.showingId} does not exist`,
        });
      return;
    }
    res.json(result);
  });
};

module.exports = {
  createShowing, 
  getShowingById,
  getAllShowings
};
