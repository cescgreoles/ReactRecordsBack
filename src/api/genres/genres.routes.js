const express = require("express");
const Genre = require("./genres.model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allgenres = await Genre.find();
    return res.status(200).json(allgenres);
  } catch (error) {
    return next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const genreToFind = await Genre.findById(id);
    return res.status(200).json(genreToFind);
  } catch (error) {
    return next(error);
  }
});

router.get("/getbyname/:name", async (req, res, next) => {
  try {
    const name = req.params.name;
    const genreToFind = await Genre.findOne({ name: name });
    return res.status(200).json(genreToFind);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
