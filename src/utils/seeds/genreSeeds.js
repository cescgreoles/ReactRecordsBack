const { mongoose } = require("mongoose");
const Genre = require("../../api/genres/genres.model");

const DB_URL =
  "mongodb+srv://root:root@cluster0.bmcfgi8.mongodb.net/music-app?retryWrites=true&w=majority";

const genres = [
  {
    name: "Urban",
    location: "USA",
    decade: 90,
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668414094/albums-react-records/genere/90s-rap_xvdb4s.jpg",
    parrafo:
      "El urban contemporáneo es un término utilizado en los Estados Unidos para referirse en general a la música negra y latinoamericana popular. Se incluyen bajo este término géneros como el hip hop, el adult contemporary y el R&B. En un inicio la expresión fue ocupada en los años 1980 para referirse a la música afroamericana -principalmente el soul, comenzando en Nueva York y poco después en Londres.",
  },
  {
    name: "Pop",
    location: "UK",
    decade: 50,
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668417451/albums-react-records/genere/carpeta-super-pop-980x550_v44h53.jpg",
    parrafo:
      "La música pop  es un género de música popular que tuvo su origen a finales de los años 1950. Como género, la música pop es muy ecléctica, tomando prestado a menudo elementos de otros estilos como el urban, el dance, el rock, la música latina, el rhythm and blues o el folk. La instrumentación se compone habitualmente de guitarra, batería, bajo, guitarra eléctrica, teclado, sintetizador, etc.",
  },
  {
    name: "Electronic",
    location: "Germany",
    decade: 40,
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668415455/albums-react-records/genere/unknown_1_ebaj46.png",
    parrafo:
      "La electrónica es un género musical que abarca un amplio abanico de formas de música electrónica contemporánea.  El género está imprecisamente definido y tiene Dj acciones en diferentes regiones y períodos de tiempo.Los sonidos electrónicos llegaron a ser la base de una buena porción de la música popular a finales de los 40 e inicios de los 50, teniendo como base y pionera al grupo alemán Kraftwerk y se convirtieron en clave para los sonidos metal y rock de los 60.",
  },
  {
    name: "Rock",
    location: "USA",
    decade: 50,
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1668414099/albums-react-records/genere/5965437_ngrjk0.jpg",
    parrafo:
      "El rock and roll es un género musical de ritmo marcado, derivado de una mezcla de diversos géneros de música folclórica estadounidense (doo wop, rhythm and blues, hillbilly, blues, country y wéstern son los más destacados) y popularizado desde los años 1950. La expresión rock and roll ya venía utilizándose en las letras del rhythm and blues desde finales de la década de 1930, pero fue el locutor estadounidense Alan Freed quien comenzó a utilizarla para describir el estilo.",
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
