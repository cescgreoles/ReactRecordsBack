const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const genreShema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    decade: { type: Number, required: true, trim: true },
    img: { type: String, required: true, trim: true },
    parrafo: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const Genre = mongoose.model("genres", genreShema);

module.exports = Genre;
