const { mongoose } = require("mongoose");
const Genre = require("../../api/genres/genres.model");

const DB_URL = process.env.DB_URL;

const genres = [
  {
    name: "Urban",
    location: "USA",
    decade: 90,
  },
  {
    name: "Pop",
    location: "UK",
    decade: 70,
  },
  {
    name: "Electronic",
    location: "Germany",
    decade: 80,
  },
  {
    name: "Rock",
    location: "USA",
    decade: 60,
  },
];

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allGenres = await Genre.find().lean();

    if (!allGenres.length) {
      console.log("[seed]: No se encuentran genres, continuo...");
    } else {
      console.log(`[seed]: Encontrados ${allGenres.length} equipos.`);
      await Genre.collection.drop();
      console.log("[seed]: Colección Genre eliminada correctamente");
    }
  })
  .catch((error) =>
    console.log("[seed]: Error eliminando la colección -->", error)
  )
  .then(async () => {
    await Genre.insertMany(genres);
    console.log(`[seed]: ${genres.length} nuevos genres añadidos con éxito`);
  })
  .catch((error) => console.log("[seed]: Error añadiendo los genres", error))
  .finally(() => mongoose.disconnect());
