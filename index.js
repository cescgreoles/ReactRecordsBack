const express = require("express");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const db = require("./src/utils/database/db");
require("dotenv").config();

const indexRoutes = require("./src/api/index/index.routes");
const albumsRoutes = require("./src/api/albums/albums.routes");
const genresRoutes = require("./src/api/genres/genres.routes");
const artistsRoutes = require("./src/api/artists/artists.routes");

db.connectDb();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const server = express();
const PORT = 3000;

server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ extended: false }));

server.use("/", indexRoutes);
server.use("/albums", albumsRoutes);
server.use("/artists", artistsRoutes);
server.use("/genres", genresRoutes);

server.use("", (req, res) => {
  return res.status(404).json("Ruta no encontrada");
});

server.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
