const express = require("express");
const Album = require("./albums.model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allAlbums = await Album.find();
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
  console.log(req.body);
  try {
    const album = req.body;
    if (req.file) {
      album.img = req.file.path;
    }
    const newAlbum = new Album(album);
    const created = await newAlbum.save();
    return res.status(201).json(created);
  } catch (error) {
    return next(error);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const album = await Album.findById(id);
    if (album.img) {
      deleteFile(album.img);
    }
    const albumToDelete = await Album.findByIdAndDelete(id);
    return res
      .status(200)
      .json(`Se ha conseguido borrar el album ${albumToDelete.name}`);
  } catch (error) {
    return next(error);
  }
});

router.put("/edit/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const album = req.body;
    const albumOld = await Album.findById(id);
    if (req.file) {
      if (albumOld.img) {
        deleteFile(playerOld.img);
      }
    }
    const albumModify = new Album(album);
    albumModify._id = id;
    const albumUpdated = await Album.findByIdAndUpdate(id, albumModify);
    return res
      .status(200)
      .json({
        mensaje: "Se ha conseguido editar el album",
        albumModificado: albumUpdated,
      });
  } catch (error) {
    return next(error);
  }
});
module.exports = router;
