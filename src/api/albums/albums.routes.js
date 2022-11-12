const express = require("express");
const Album = require("./albums.model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allAlbums = await Album.find().populate("artists").populate("genres");
    return res.status(200).json(allAlbums);
  } catch (error) {
    return next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const albumToFind = await Album.findById(id);
    return res.status(200).json(albumToFind);
  } catch (error) {
    return next(error);
  }
});

router.get("/getbyname/:name", async (req, res, next) => {
  try {
    const name = req.params.name;
    const albumToFind = await Album.findOne({ name: name });
    return res.status(200).json(albumToFind);
  } catch (error) {
    return next(error);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const Album = req.body;
    if (req.file) {
      Album.img = req.file.path;
    }
    const newAlbum = new Album(Album);
    const created = await newAlbum.save();
    return res.status(201).json(created);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
