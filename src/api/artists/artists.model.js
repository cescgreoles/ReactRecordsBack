const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artistsShema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    surname: { type: String, required: false, trim: true },
    role: { type: String, required: true, trim: true },
    img: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const Artist = mongoose.model("artists", artistsShema);

module.exports = Artist;
