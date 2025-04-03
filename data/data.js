const people = [
  {
    name: "Abril Pérez",
    description: "Responde al llamado de \"Abru\". Una chica con mucho conocimiento general para compartir",
    img: "./data/personas/abru.jpeg "
  },
  {
    name: "Agostina Godoy",
    description: "Es agOstina, con O, su apodo es \"Agos\". Reconocida por ser la DJ designada del grupo, debido a su gran gusto y conocimiento musical",
    img: "./data/personas/agos.jpeg "
  },
  {
    name: "Benjamín Alvarez",
    description: "Si este muchacho se tiene que destacar por algo es por su fanatismo por Boca, le decimos \"Benji\" o \"Benja\". Es el segundo fotografo oficial después de valucha",
    img: "./data/personas/benji-2.jpeg "
  },
  {
    name: "Bruno Juan Sartori",
    description: "Si no sabes algo sobre anime probablemente el tenga una respuesta a tu duda, su segundo nombre no es Juan ! Responde a \"Bruni\" o \"Bruno\"",
    img: "./data/personas/bruni.jpeg "
  },
  {
    name: "Constanza Zieminski",
    description: "Su apodo es \"Coni\", no le digas \"Coty\" ni de onda. Su pasatiempo preferido: mirar películas y los simpson",
    img: "./data/personas/coni.jpeg "
  },
  {
    name: "Facundo \"Toro\" Curti",
    description: "Su apodo lo dice todo. Si querés saber más hablale sin miedo 😉",
    img: "./data/personas/curco.jpeg "
  },
  {
    name: "Fernando Almaraz",
    description: "El chocolatito negro del grupo. Lo podes encontrar armandole la pc o cambiandole la pasta térmica a algún amigo o simplemente decí \"Fer negro\" o \"Fer\" y aparece",
    img: "./data/personas/ferxxo.jpeg "
  },
  {
    name: "Fernando García",
    description: "Quizás lo recuerdes por su alter ego, Federico Mercurio. Responde a \"Fer blanco\" o a \"Fer\" (recordá que con \"Fer\" podes llamar a 2 al mismo tiempo, ojo)",
    img: "./data/personas/ferchu.jpeg "
  },
  {
    name: "Florencia Yñiguez",
    description: "Esta muchacha responde a \"Florchu\" o \"Flor\", muy copada, y mi mejor compañera de Gins",
    img: "./data/personas/flor.jpeg "
  },
  {
    name: "Iván López",
    description: "Esta chicuelo es el hermanito (no tan chico ya) de Pau. En su tiempo libre disfruta de jugar al basket, tiro el dato por si les pinta jugar un rato. Le decimos \"Ivi\"",
    img: "./data/personas/ivan.jpeg "
  },
  {
    name: "Joaquín Villarreal",
    description: "Un pibe chill de cojones, le decimos \"Joaco\". Es otro de los chicos que comenzó a aparecer debido a nuestro amigo \"Santy\" (eran amigos del colegio)",
    img: "./data/personas/joaco.jpeg "
  },
  {
    name: "Lautaro Centurión",
    description: "Este otro chicuelo es el mejor amigo de Ivi. Le decimos \"Lauty\" o \"Centu\". En su tiempo libre toca la guitarra o se tira unos pasos que está como para ganar en una competencia, si hubiera",
    img: "./data/personas/lautaro.jpeg "
  },
  {
    name: "Lucas Fernandez Capiet",
    description: "Este es un trolazo que aún no se ha animado a venir a conocer zona oeste. es oriundo de San Martin de los Andes, que podíamos esperar, no? Le decimos \"enano\"",
    img: "./data/personas/lucas.jpeg "
  },
  {
    name: "Luciano Rocchetta",
    description: "Este muchacho se destaca por sus rulos, probablemente una de las mejores personas que te puedas llegar a cruzar, lo podes llamar diciéndole \"Luchi\"",
    img: "./data/personas/luchi.jpeg "
  },
  {
    name: "Magalí González Di Carlo",
    description: "Al principio, la chica no muestra su mejor cara, pero es copada ! La podés encontrar platinando algún jueguito en Steam, sino también atiende al nombre de \"Magui\" o \"Maguilu\"",
    img: "./data/personas/magui.jpeg "
  },
  {
    name: "Malena Dahbar",
    description: "Ella también es una aspirante a ingeniera (ambiental) ! Su apodo es \"Male\"",
    img: "./data/personas/male.jpeg "
  },
  {
    name: "Martin Cabrera",
    description: "Él es el mago del grupo, pero todavía sigue sin poder hacer re-aparecer su buzo blanco, perdido el año pasado. Le decimos \"Tin\"",
    img: "./data/personas/tin-2.jpeg "
  },
  {
    name: "Máximo Boglioli",
    description: "Creemos fuertemente que es la reencarnación de Jesús. Su apodo es \"Maxi\"",
    img: "./data/personas/maxi-b.jpeg "
  },
  {
    name: "Máximo Davrieux",
    description: "Algunos lo conocerán por \"Dixam\" o \"MaxiD\", pero prefiere que lo llamemos \"Maxi\". Un pibe bastante callado, pero cuando habla... mamita, a no ofenderse con los chistes que se le pueden llegar a ocurrir",
    img: "./data/personas/maxid.jpeg "
  },
  {
    name: "Milagros Melián",
    description: "Esta muchacha habla hasta por los codos. Si no le entendiste algo que haya dicho, vos re-pregunta sin problema. Le decimos \"Mili\"",
    img: "./data/personas/mili.jpeg "
  },
  {
    name: "Nazarena Vega",
    description: "Aunque no lo crean, ella no naVega. Responde al nombre de \"Nanu\". Estudiante de filosofía, asi que, si te pinta delirar un rato sobre cuestiones de la vida, con ella se puede",
    img: "./data/personas/nanu.jpeg "
  },
  {
    name: "Nazareno García",
    description: "El es un tipo copado, macanudo. Yo que vos trato de tenerlo de amigo porque sino estás al horno... Lo llamamos \"Naza\"",
    img: "./data/personas/naza.jpeg "
  },
  {
    name: "Paula López",
    description: "Si la ves con cara de ortiva dale unas cervecitas y solucionado el problema 😜. Ella es \"Pau\"",
    img: "./data/personas/pau.jpeg "
  },
  {
    name: "Santiago Invernizzi",
    description: "Este es el típico pibe que cree saberselas todas, pero vos y yo sabemos que gran parte de lo que dice es puro chamuyo. Le decimos \"Gatete\" (preguntale el por qué)",
    img: "./data/personas/gatete.jpeg "
  },
  {
    name: "Santiago Pérez",
    description: "Con este chico te cag4s de risa toda la noche, sin dudas. Le decimos \"santy\" o \"el nene\"",
    img: "./data/personas/santy.jpeg "
  },
  {
    name: "Thiago Enríquez",
    description: "Y como en todo grupo siempre tiene que haber un \"Chino\", acá lo tenemos, de bajo presupuesto peeero cumplimos",
    img: "./data/personas/chino.jpeg "
  },
  {
    name: "Thiago García",
    description: "Él también es un niño sistemas. Responde al llamado de \"Thiago\"",
    img: "./data/personas/thia.jpeg "
  }
]
