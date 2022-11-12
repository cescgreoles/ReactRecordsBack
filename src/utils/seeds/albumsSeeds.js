const { mongoose } = require("mongoose");
const Album = require("../../api/albums/albums.model");

const DB_URL = process.env.DB_URL;

const albums = [
  {
    name: "Swimming",
    groupName: "Mac Miller",
    genre: "Urban",
    year: 2022,
    discographic: "Warner Records",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668255252/albums-react-records/00105112230718____1__1200x1200_lpzpgn.jpg",
  },

  {
    name: "Motomami",
    groupName: "Rosalía",
    genre: "Urban",
    year: 2022,
    discographic: "Sony International",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668255439/albums-react-records/00105110613618____3__1200x1200_bv0owv.jpg",
  },

  {
    name: "Live After Death",
    groupName: "Iron Maiden",
    genre: "Rock",
    year: 2014,
    discographic: "Rhino",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668255675/albums-react-records/00105111345202____1__1200x1200_ury56k.jpg",
  },

  {
    name: "Tango",
    groupName: "Julio Iglesias",
    genre: "Pop",
    year: 2008,
    discographic: "Sony",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668255853/albums-react-records/00105110113429P1_600x600_gwhqcu.jpg",
  },

  {
    name: "XXV",
    groupName: "Robbie Williams",
    genre: "Pop",
    year: 2022,
    discographic: "Sony",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668256439/albums-react-records/00105112675300____1__1200x1200_lewqhf.jpg",
  },

  {
    name: "Damn",
    groupName: "Kendrick Lamar",
    genre: "Urban",
    year: 2017,
    discographic: "Interscope",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668256068/albums-react-records/00105112222889____1__640x640_lrvcgq.jpg",
  },

  {
    name: "We Are Not Your Kind",
    groupName: "Slipknot",
    genre: "Rock",
    year: 2019,
    discographic: "Roadrunner",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668256272/albums-react-records/00105111384201____2__1200x1200_tsungs.jpg",
  },

  {
    name: "Palaces",
    groupName: "Flume",
    genre: "Electronic",
    year: 2022,
    discographic: "Pias",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668256605/albums-react-records/00105112306401____1__1200x1200_erztrd.jpg",
  },

  {
    name: "11 Razones",
    groupName: "Aitana",
    genre: "Pop",
    year: 2022,
    discographic: "Universal",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668256755/albums-react-records/00105110600649____1__640x640_fkghhh.jpg",
  },

  {
    name: "Scorpion",
    groupName: "Drake",
    genre: "Urban",
    year: 2018,
    discographic: "Republic",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668256869/albums-react-records/00105112224679____1__1200x1200_iwyujj.jpg",
  },

  {
    name: "Hybrid Theory",
    groupName: "Linkin Park",
    genre: "Rock",
    year: 2000,
    discographic: "Warner Records",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668257218/albums-react-records/00105112628820____1__1200x1200_xtqr0v.jpg",
  },

  {
    name: "The End",
    groupName: "Shlohmo",
    genre: "Electronic",
    year: 2019,
    discographic: "WeDidit",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668257294/albums-react-records/descarga_4_zz1wu9.jpg",
  },
];

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allAlbums = await Album.find().lean();

    if (!allAlbums.length) {
      console.log("[seed]: No se encuentran albumes, continuo...");
    } else {
      console.log(`[seed]: Encontrados ${allAlbums.length} jugadores.`);
      await Album.collection.drop();
      console.log("[seed]: Colección Albums eliminada correctamente");
    }
  })
  .catch((error) =>
    console.log("[seed]: Error eliminando la colección -->", error)
  )
  .then(async () => {
    await Album.insertMany(albums);
    console.log(`[seed]: ${albums.length} nuevos albumes añadidos con éxito`);
  })
  .catch((error) => console.log("[seed]: Error añadiendo los albums", error))
  .finally(() => mongoose.disconnect());
