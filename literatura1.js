const literatura1 = {

    nombre: "Literatura",

    temas: {

        "literatura": {
            titulo: "¿Qué es la literatura?",
            respuesta: "La literatura es una manifestación artística que utiliza el lenguaje para expresar ideas, emociones, experiencias y representar diferentes aspectos de la realidad o la imaginación.",
            caracteristicas: [
                "Utiliza el lenguaje como medio de expresión.",
                "Puede ser escrita u oral.",
                "Expresa emociones e ideas.",
                "Puede representar la realidad o la ficción.",
                "Tiene una finalidad artística y estética."
            ]
        },

        "generos literarios": {
            titulo: "Géneros literarios",
            respuesta: "Los géneros literarios son categorías que permiten clasificar las obras literarias según sus características y formas de expresión.",
            tipos: [
                "Género narrativo.",
                "Género lírico.",
                "Género dramático."
            ]
        },

        "genero narrativo": {
            titulo: "Género narrativo",
            respuesta: "El género narrativo presenta una historia mediante un narrador que cuenta acontecimientos protagonizados por personajes.",
            elementos: [
                "Narrador.",
                "Personajes.",
                "Acciones.",
                "Tiempo.",
                "Espacio.",
                "Trama."
            ],
            ejemplos: [
                "Cuento.",
                "Novela.",
                "Leyenda.",
                "Mito.",
                "Fábula."
            ]
        },

        "genero lirico": {
            titulo: "Género lírico",
            respuesta: "El género lírico expresa principalmente sentimientos, emociones, pensamientos y estados de ánimo.",
            caracteristicas: [
                "Expresión de sentimientos.",
                "Uso de lenguaje figurado.",
                "Presencia de ritmo.",
                "Puede utilizar versos y estrofas."
            ],
            ejemplos: [
                "Poema.",
                "Oda.",
                "Elegía.",
                "Soneto.",
                "Himno."
            ]
        },

        "genero dramatico": {
            titulo: "Género dramático",
            respuesta: "El género dramático presenta acciones y conflictos mediante diálogos destinados principalmente a ser representados ante un público.",
            elementos: [
                "Personajes.",
                "Diálogo.",
                "Conflicto.",
                "Acotaciones.",
                "Actos.",
                "Escenas."
            ],
            ejemplos: [
                "Tragedia.",
                "Comedia.",
                "Drama."
            ]
        },

        "cuento": {
            titulo: "El cuento",
            respuesta: "El cuento es una narración breve que presenta pocos personajes y desarrolla una historia alrededor de uno o varios acontecimientos.",
            estructura: [
                "Inicio.",
                "Nudo.",
                "Desenlace."
            ]
        },

        "novela": {
            titulo: "La novela",
            respuesta: "La novela es una narración extensa que desarrolla una historia compleja con numerosos personajes, acontecimientos y escenarios.",
            caracteristicas: [
                "Mayor extensión que el cuento.",
                "Tramas principales y secundarias.",
                "Diversidad de personajes.",
                "Desarrollo amplio de los acontecimientos."
            ]
        },

        "fabula": {
            titulo: "La fábula",
            respuesta: "La fábula es una narración breve que generalmente presenta animales u objetos personificados y transmite una enseñanza o moraleja.",
            caracteristicas: [
                "Narración breve.",
                "Personificación.",
                "Enseñanza moral.",
                "Presencia de moraleja."
            ]
        },

        "mito": {
            titulo: "El mito",
            respuesta: "El mito es una narración tradicional que intenta explicar el origen de fenómenos, seres, costumbres o acontecimientos mediante elementos sobrenaturales.",
            caracteristicas: [
                "Forma parte de una tradición cultural.",
                "Incluye seres sobrenaturales.",
                "Explica determinados fenómenos.",
                "Se transmite de generación en generación."
            ]
        },

        "leyenda": {
            titulo: "La leyenda",
            respuesta: "La leyenda es una narración tradicional que combina elementos reales con elementos fantásticos o sobrenaturales.",
            caracteristicas: [
                "Tiene origen tradicional.",
                "Puede estar relacionada con lugares o personajes reales.",
                "Incluye elementos fantásticos.",
                "Se transmite de generación en generación."
            ]
        },

        "poesia": {
            titulo: "Poesía",
            respuesta: "La poesía es una expresión literaria que utiliza el lenguaje de manera estética para transmitir emociones, ideas y sentimientos.",
            elementos: [
                "Verso.",
                "Estrofa.",
                "Ritmo.",
                "Rima.",
                "Hablante lírico."
            ]
        },

        "verso": {
            titulo: "Verso",
            respuesta: "El verso es cada una de las líneas que forman un poema."
        },

        "estrofa": {
            titulo: "Estrofa",
            respuesta: "La estrofa es un conjunto de versos que forman una unidad dentro de un poema."
        },

        "rima": {
            titulo: "Rima",
            respuesta: "La rima es la semejanza de sonidos que se produce entre palabras al final de determinados versos.",
            tipos: [
                "Rima consonante.",
                "Rima asonante."
            ]
        },

        "recursos literarios": {
            titulo: "Recursos literarios",
            respuesta: "Los recursos literarios son procedimientos utilizados por los escritores para dar mayor expresividad, belleza o fuerza a sus textos.",
            tipos: [
                "Metáfora.",
                "Símil.",
                "Personificación.",
                "Hipérbole.",
                "Anáfora.",
                "Onomatopeya."
            ]
        },

        "metafora": {
            titulo: "Metáfora",
            respuesta: "La metáfora establece una relación entre dos elementos diferentes sin utilizar una comparación directa.",
            ejemplo: "Tus ojos son dos estrellas."
        },

        "simil": {
            titulo: "Símil o comparación",
            respuesta: "El símil relaciona dos elementos utilizando expresiones como 'como', 'parece' o 'semejante a'.",
            ejemplo: "Sus ojos brillaban como estrellas."
        },

        "personificacion": {
            titulo: "Personificación",
            respuesta: "La personificación atribuye características o acciones humanas a animales, objetos o elementos de la naturaleza.",
            ejemplo: "El viento susurraba entre los árboles."
        },

        "hiperbole": {
            titulo: "Hipérbole",
            respuesta: "La hipérbole consiste en exagerar una idea o situación para producir un efecto expresivo.",
            ejemplo: "Te he llamado un millón de veces."
        },

        "anafora": {
            titulo: "Anáfora",
            respuesta: "La anáfora consiste en repetir una palabra o expresión al comienzo de varios versos u oraciones.",
            ejemplo: "Aquí todo es silencio, aquí todo es calma."
        },

        "onomatopeya": {
            titulo: "Onomatopeya",
            respuesta: "La onomatopeya consiste en representar mediante palabras sonidos reales.",
            ejemplos: [
                "tic-tac",
                "miau",
                "guau",
                "bum",
                "ring"
            ]
        },

        "literatura peruana": {
            titulo: "Literatura peruana",
            respuesta: "La literatura peruana reúne las obras y expresiones literarias producidas en el territorio peruano y refleja diferentes etapas históricas y culturales.",
            etapas: [
                "Literatura prehispánica.",
                "Literatura colonial.",
                "Literatura de la independencia.",
                "Literatura republicana.",
                "Literatura contemporánea."
            ]
        },

        "literatura prehispanica": {
            titulo: "Literatura prehispánica",
            respuesta: "La literatura prehispánica comprende las expresiones orales y tradicionales de los pueblos que habitaron el territorio peruano antes de la llegada de los españoles.",
            caracteristicas: [
                "Predominio de la oralidad.",
                "Tradición colectiva.",
                "Relación con la naturaleza.",
                "Presencia de mitos y leyendas."
            ],
            ejemplos: [
                "Mitos de origen.",
                "Leyendas andinas.",
                "Relatos tradicionales."
            ]
        },

        "literatura colonial": {
            titulo: "Literatura colonial",
            respuesta: "La literatura colonial se desarrolló durante el período de dominio español y estuvo influenciada por la cultura europea y la realidad americana.",
            caracteristicas: [
                "Influencia española.",
                "Temas religiosos.",
                "Crónicas.",
                "Descripción de la sociedad colonial."
            ]
        },

        "cronicas": {
            titulo: "Las crónicas",
            respuesta: "Las crónicas fueron textos escritos principalmente durante la conquista y el período colonial para narrar acontecimientos y describir territorios y sociedades.",
            autores: [
                "Inca Garcilaso de la Vega.",
                "Pedro Cieza de León.",
                "Guamán Poma de Ayala."
            ]
        },

        "inca garcilaso": {
            titulo: "Inca Garcilaso de la Vega",
            respuesta: "El Inca Garcilaso de la Vega fue un importante escritor e historiador peruano de origen mestizo. Es reconocido por sus obras sobre la historia y cultura del Perú.",
            obras: [
                "Comentarios Reales de los Incas.",
                "Historia General del Perú."
            ]
        },

        "guaman poma": {
            titulo: "Guamán Poma de Ayala",
            respuesta: "Guamán Poma de Ayala fue un cronista indígena que escribió sobre la sociedad andina y los problemas del período colonial.",
            obra: "Nueva corónica y buen gobierno."
        },

        "ricardo palma": {
            titulo: "Ricardo Palma",
            respuesta: "Ricardo Palma fue un escritor peruano conocido principalmente por sus Tradiciones Peruanas.",
            obra: "Tradiciones Peruanas",
            caracteristicas: [
                "Mezcla historia y ficción.",
                "Utiliza humor e ironía.",
                "Presenta acontecimientos y personajes del pasado peruano."
            ]
        },

        "tradiciones peruanas": {
            titulo: "Tradiciones Peruanas",
            respuesta: "Tradiciones Peruanas es una colección de relatos escritos por Ricardo Palma que combina elementos históricos, costumbristas y ficticios.",
            autor: "Ricardo Palma"
        },

        "clorinda matto": {
            titulo: "Clorinda Matto de Turner",
            respuesta: "Clorinda Matto de Turner fue una escritora peruana vinculada al indigenismo y autora de obras que denunciaron problemas sociales de su época.",
            obra: "Aves sin nido"
        },

        "aves sin nido": {
            titulo: "Aves sin nido",
            respuesta: "Aves sin nido es una novela de Clorinda Matto de Turner que presenta problemas sociales y abusos sufridos por comunidades indígenas.",
            autora: "Clorinda Matto de Turner",
            temas: [
                "Abuso de poder.",
                "Desigualdad social.",
                "Situación de las comunidades indígenas."
            ]
        },

        "cesar vallejo": {
            titulo: "César Vallejo",
            respuesta: "César Vallejo fue uno de los poetas peruanos más importantes del siglo XX. Su obra aborda temas como el dolor humano, la solidaridad, la injusticia y la existencia.",
            obras: [
                "Los heraldos negros.",
                "Trilce.",
                "Poemas humanos.",
                "España, aparta de mí este cáliz."
            ]
        },

        "los heraldos negros": {
            titulo: "Los heraldos negros",
            respuesta: "Los heraldos negros es un poemario de César Vallejo publicado en 1919. Presenta temas relacionados con el dolor, la existencia y el sufrimiento humano.",
            autor: "César Vallejo"
        },

        "trilce": {
            titulo: "Trilce",
            respuesta: "Trilce es una de las obras poéticas más innovadoras de César Vallejo. Se caracteriza por el uso experimental del lenguaje.",
            autor: "César Vallejo",
            caracteristicas: [
                "Innovación lingüística.",
                "Lenguaje experimental.",
                "Ruptura de estructuras tradicionales.",
                "Reflexión sobre la existencia."
            ]
        },

        "jose maria arguedas": {
            titulo: "José María Arguedas",
            respuesta: "José María Arguedas fue un escritor y antropólogo peruano cuya obra representa profundamente el mundo andino y el encuentro entre culturas.",
            obras: [
                "Los ríos profundos.",
                "Yawar Fiesta.",
                "Todas las sangres."
            ]
        },

        "los rios profundos": {
            titulo: "Los ríos profundos",
            respuesta: "Los ríos profundos es una novela de José María Arguedas que representa el mundo andino y los conflictos culturales y sociales del Perú.",
            autor: "José María Arguedas",
            temas: [
                "Cultura andina.",
                "Identidad.",
                "Desigualdad.",
                "Conflicto cultural."
            ]
        },

        "mario vargas llosa": {
            titulo: "Mario Vargas Llosa",
            respuesta: "Mario Vargas Llosa fue un escritor peruano perteneciente al llamado Boom latinoamericano. Es autor de numerosas novelas y ensayos.",
            obras: [
                "La ciudad y los perros.",
                "La casa verde.",
                "Conversación en La Catedral.",
                "La fiesta del Chivo."
            ]
        },

        "la ciudad y los perros": {
            titulo: "La ciudad y los perros",
            respuesta: "La ciudad y los perros es una novela de Mario Vargas Llosa que presenta la vida de jóvenes dentro de un colegio militar y aborda temas como autoridad, violencia y disciplina.",
            autor: "Mario Vargas Llosa"
        },

        "boom latinoamericano": {
            titulo: "Boom latinoamericano",
            respuesta: "El Boom latinoamericano fue un fenómeno literario de gran difusión internacional que destacó a varios escritores latinoamericanos principalmente durante las décadas de 1960 y 1970.",
            autores: [
                "Gabriel García Márquez.",
                "Mario Vargas Llosa.",
                "Julio Cortázar.",
                "Carlos Fuentes."
            ]
        },

        "realismo magico": {
            titulo: "Realismo mágico",
            respuesta: "El realismo mágico combina elementos extraordinarios o fantásticos con situaciones presentadas dentro de una realidad cotidiana.",
            autor_destacado: "Gabriel García Márquez",
            obra_destacada: "Cien años de soledad"
        },

        "literatura universal": {
            titulo: "Literatura universal",
            respuesta: "La literatura universal comprende obras de diferentes culturas, épocas y regiones que han tenido importancia en la historia de la humanidad.",
            autores: [
                "Homero.",
                "Dante Alighieri.",
                "William Shakespeare.",
                "Miguel de Cervantes.",
                "Fiódor Dostoyevski.",
                "Franz Kafka."
            ]
        },

        "homero": {
            titulo: "Homero",
            respuesta: "Homero es el nombre tradicionalmente asociado con dos grandes obras de la literatura griega antigua: La Ilíada y La Odisea.",
            obras: [
                "La Ilíada.",
                "La Odisea."
            ]
        },

        "la iliada": {
            titulo: "La Ilíada",
            respuesta: "La Ilíada es un poema épico atribuido tradicionalmente a Homero que narra acontecimientos relacionados con la guerra de Troya.",
            autor: "Homero"
        },

        "la odisea": {
            titulo: "La Odisea",
            respuesta: "La Odisea es un poema épico atribuido tradicionalmente a Homero que relata el largo viaje de regreso de Odiseo a Ítaca.",
            autor: "Homero"
        },

        "dante": {
            titulo: "Dante Alighieri",
            respuesta: "Dante Alighieri fue un poeta italiano medieval y autor de una de las obras fundamentales de la literatura universal.",
            obra: "La Divina Comedia"
        },

        "divina comedia": {
            titulo: "La Divina Comedia",
            respuesta: "La Divina Comedia es un poema de Dante Alighieri que narra un viaje simbólico por el Infierno, el Purgatorio y el Paraíso.",
            autor: "Dante Alighieri",
            partes: [
                "Infierno.",
                "Purgatorio.",
                "Paraíso."
            ]
        },

        "shakespeare": {
            titulo: "William Shakespeare",
            respuesta: "William Shakespeare fue un dramaturgo y poeta inglés considerado uno de los autores más importantes de la literatura universal.",
            obras: [
                "Romeo y Julieta.",
                "Hamlet.",
                "Macbeth.",
                "Otelo."
            ]
        },

        "don quijote": {
            titulo: "Don Quijote de la Mancha",
            respuesta: "Don Quijote de la Mancha es una novela de Miguel de Cervantes que narra las aventuras de Alonso Quijano, quien adopta el nombre de Don Quijote.",
            autor: "Miguel de Cervantes",
            temas: [
                "Realidad y ficción.",
                "Idealismo.",
                "Libertad.",
                "Amistad.",
                "Crítica social."
            ]
        },

        "miguel de cervantes": {
            titulo: "Miguel de Cervantes Saavedra",
            respuesta: "Miguel de Cervantes Saavedra fue un escritor español considerado una de las figuras fundamentales de la literatura en lengua española.",
            obra_principal: "Don Quijote de la Mancha"
        },

        "realismo": {
            titulo: "Realismo literario",
            respuesta: "El Realismo fue un movimiento literario que buscó representar la realidad cotidiana de manera detallada y crítica.",
            caracteristicas: [
                "Observación de la realidad.",
                "Descripción detallada.",
                "Temas sociales.",
                "Personajes cotidianos."
            ]
        },

        "romanticismo": {
            titulo: "Romanticismo",
            respuesta: "El Romanticismo fue un movimiento artístico y literario que destacó los sentimientos, la libertad, la imaginación y la individualidad.",
            caracteristicas: [
                "Importancia de los sentimientos.",
                "Libertad creativa.",
                "Naturaleza.",
                "Imaginación.",
                "Individualismo."
            ]
        },

        "modernismo": {
            titulo: "Modernismo",
            respuesta: "El Modernismo fue un movimiento literario que renovó el lenguaje poético y buscó la belleza y musicalidad en la expresión.",
            autor_destacado: "Rubén Darío",
            caracteristicas: [
                "Musicalidad.",
                "Lenguaje elegante.",
                "Búsqueda de belleza.",
                "Innovación poética."
            ]
        },

        "vanguardismo": {
            titulo: "Vanguardismo",
            respuesta: "Las vanguardias fueron movimientos artísticos y literarios que buscaron romper con las formas tradicionales y experimentar con nuevas maneras de expresión.",
            caracteristicas: [
                "Innovación.",
                "Experimentación.",
                "Ruptura con la tradición.",
                "Nuevas formas de expresión."
            ]
        },

        "indigenismo": {
            titulo: "Indigenismo",
            respuesta: "El indigenismo literario aborda la realidad, problemas, cultura e identidad de los pueblos indígenas, especialmente en América Latina.",
            autores: [
                "José María Arguedas.",
                "Ciro Alegría.",
                "Clorinda Matto de Turner."
            ]
        },

        "analisis literario": {
            titulo: "Análisis literario",
            respuesta: "El análisis literario consiste en estudiar una obra para comprender sus personajes, temas, estructura, lenguaje, contexto y mensaje.",
            elementos: [
                "Autor.",
                "Título.",
                "Género.",
                "Tema.",
                "Argumento.",
                "Personajes.",
                "Espacio.",
                "Tiempo.",
                "Narrador.",
                "Mensaje."
            ]
        },

        "personajes": {
            titulo: "Personajes literarios",
            respuesta: "Los personajes son los seres que participan en los acontecimientos de una obra narrativa o dramática.",
            tipos: [
                "Protagonista.",
                "Antagonista.",
                "Personaje secundario.",
                "Personaje principal."
            ]
        },

        "narrador": {
            titulo: "Narrador",
            respuesta: "El narrador es la voz que cuenta los acontecimientos de una narración.",
            tipos: [
                "Narrador protagonista.",
                "Narrador testigo.",
                "Narrador omnisciente.",
                "Narrador en tercera persona."
            ]
        },

        "tema literario": {
            titulo: "Tema literario",
            respuesta: "El tema literario es la idea central o asunto principal que desarrolla una obra.",
            ejemplos: [
                "Amor.",
                "Muerte.",
                "Libertad.",
                "Justicia.",
                "Soledad.",
                "Identidad."
            ]
        },

        "mensaje literario": {
            titulo: "Mensaje de una obra",
            respuesta: "El mensaje es la reflexión, enseñanza o idea que el lector puede obtener después de analizar una obra literaria."
        }

    }

};