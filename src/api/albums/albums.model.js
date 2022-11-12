const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const albumsShema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    groupName: { type: String, required: true, trim: true },
    genre: { type: String },
    year: { type: Number, required: true, trim: true },
    discographic: { type: String, trim: true },
    img: { type: String, required: true, trim: true },
  },

  {
    timestamps: true,
  }
);

const Album = mongoose.model("albums", albumsShema);

module.exports = Album;
