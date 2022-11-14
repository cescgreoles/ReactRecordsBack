const express = require("express");
const Artist = require("./artists.model");
const router = express.Router();
const { isAuth, isAdmin } = require("../../middlewares/auth");

router.get(
  "/",
  /*[isAuth],*/ async (req, res) => {
    try {
      const allArtists = await Artist.find();
      return res.status(200).json(allArtists);
    } catch (error) {
      return res.status(500).json("Error al leer los deportes");
    }
  }
);

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const artistsToFind = await Artist.findById(id);
    return res.status(200).json(artistsToFind);
  } catch (error) {
    return next(error);
  }
});

router.get("/getbyname/:name", async (req, res, next) => {
  try {
    const name = req.params.name;
    const artistsToFind = await Artist.findOne({ name: name });
    return res.status(200).json(artistsToFind);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
