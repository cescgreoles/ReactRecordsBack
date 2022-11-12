const { mongoose } = require("mongoose");
const Artist = require("../../api/artists/artists.model");
const DB_URL =
  "mongodb+srv://root:root@cluster0.bmcfgi8.mongodb.net/music-app?retryWrites=true&w=majority";

const artists = [
  {
    name: "Mac",
    surname: "Miller",
    role: "Singer",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668265419/albums-react-records/artists/mac-miller_naz1gk.jpg",
  },
  {
    name: "Rosalia",

    role: "Singer",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668265510/albums-react-records/artists/EuropaPress_4321573_cantante_rosalia_posa_presentacion_disco_motomami_hotel_bless_17_marzo_2022-1-660x439_rieygj.jpg",
  },
  {
    name: "Iron Maiden",
    surname: "Miller",
    role: "Band",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668265595/albums-react-records/artists/D7JE64DLLZBG7CH4OAZZM7A5YI_iex7mt.jpg",
  },
  {
    name: "Julio",
    surname: "Iglesias",
    role: "Singer",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668265685/albums-react-records/artists/f.elconfidencial.com_original_816_9b1_131_8169b1131987795ba93c86278c546c4a_qeoykr.jpg",
  },
  {
    name: "Robbie",
    surname: "Williams",
    role: "Singer",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668265758/albums-react-records/artists/OQYOEQT72NBM7GTQRDNJEXOK5Y_qmsxuh.jpg",
  },
  {
    name: "Kendrick",
    surname: "Lamar",
    role: "Singer",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668265840/albums-react-records/artists/KendrickLamar-surprise-intimate-show_des1xo.jpg",
  },
  {
    name: "Slipknot",

    role: "Band",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668265895/albums-react-records/artists/slipknot-2022_vhquty.jpg",
  },
  {
    name: "Flume",

    role: "Producer",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668265950/albums-react-records/artists/FLUME_uxjtbx.jpg",
  },
  {
    name: "Aitana",
    surname: "Ocaña",
    role: "Singer",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668266016/albums-react-records/artists/sb-hb-aitana-001-1632818812_cluwel.jpg",
  },
  {
    name: "Drake",

    role: "Singer",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668266112/albums-react-records/artists/Drake_ntov2w.jpg",
  },
  {
    name: "Linkin Park",

    role: "Band",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668266174/albums-react-records/artists/Linkin-Park_agogwn.jpg",
  },
  {
    name: "Shlohmo",

    role: "Producer",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668266317/albums-react-records/artists/Shlohmo-2019_qxbegl.jpg",
  },
];

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allArtists = await Artist.find().lean();

    if (!allArtists.length) {
      console.log("[seed]: No se encuentran artistas, continuo...");
    } else {
      console.log(`[seed]: Encontrados ${allArtists.length} artistas.`);
      await Artist.collection.drop();
      console.log("[seed]: Colección artistas eliminada correctamente");
    }
  })
  .catch((error) =>
    console.log("[seed]: Error eliminando la colección -->", error)
  )
  .then(async () => {
    await Artist.insertMany(artists);
    console.log(`[seed]: ${artists.length} nuevos artistas añadidos con éxito`);
  })
  .catch((error) => console.log("[seed]: Error añadiendo los artistas", error))
  .finally(() => mongoose.disconnect());
