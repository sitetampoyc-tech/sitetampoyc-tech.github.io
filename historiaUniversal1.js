const historiaUniversal1 = {

    nombre: "Historia Universal",

    temas: {

        "prehistoria": {
            titulo: "La Prehistoria",
            respuesta: "La Prehistoria es el período anterior a la aparición de la escritura. Se divide principalmente en Paleolítico, Neolítico y Edad de los Metales.",
            etapas: [
                "Paleolítico.",
                "Neolítico.",
                "Edad de los Metales."
            ]
        },

        "paleolitico": {
            titulo: "Paleolítico",
            respuesta: "Durante el Paleolítico los seres humanos vivían principalmente de la caza, pesca y recolección.",
            caracteristicas: [
                "Vida nómada.",
                "Caza y recolección.",
                "Uso de herramientas de piedra.",
                "Descubrimiento y control del fuego.",
                "Arte rupestre."
            ]
        },

        "neolitico": {
            titulo: "Neolítico",
            respuesta: "El Neolítico estuvo marcado por el desarrollo de la agricultura y la ganadería, lo que permitió el establecimiento de poblaciones sedentarias.",
            caracteristicas: [
                "Agricultura.",
                "Ganadería.",
                "Sedentarismo.",
                "Cerámica.",
                "Desarrollo de aldeas."
            ]
        },

        "edad_de_los_metales": {
            titulo: "Edad de los Metales",
            respuesta: "Durante la Edad de los Metales los seres humanos comenzaron a utilizar metales para fabricar herramientas y armas.",
            etapas: [
                "Edad del Cobre.",
                "Edad del Bronce.",
                "Edad del Hierro."
            ]
        },

        "mesopotamia": {
            titulo: "Mesopotamia",
            respuesta: "Mesopotamia fue una de las primeras grandes civilizaciones y se desarrolló entre los ríos Tigris y Éufrates.",
            aportes: [
                "Escritura cuneiforme.",
                "Código de Hammurabi.",
                "Desarrollo de ciudades.",
                "Agricultura.",
                "Avances matemáticos y astronómicos."
            ]
        },

        "egipto": {
            titulo: "Antiguo Egipto",
            respuesta: "La civilización egipcia se desarrolló alrededor del río Nilo y estuvo gobernada por faraones.",
            caracteristicas: [
                "Río Nilo.",
                "Faraones.",
                "Pirámides.",
                "Jeroglíficos.",
                "Momificación.",
                "Religión politeísta."
            ]
        },

        "grecia": {
            titulo: "Antigua Grecia",
            respuesta: "La civilización griega tuvo una gran influencia en la filosofía, política, arte, ciencia y cultura occidental.",
            aportes: [
                "Democracia ateniense.",
                "Filosofía.",
                "Teatro.",
                "Mitología.",
                "Matemáticas.",
                "Arquitectura."
            ]
        },

        "roma": {
            titulo: "Antigua Roma",
            respuesta: "Roma construyó uno de los imperios más importantes de la Antigüedad y tuvo una gran influencia política, jurídica y cultural.",
            etapas: [
                "Monarquía.",
                "República.",
                "Imperio."
            ],
            aportes: [
                "Derecho romano.",
                "Arquitectura.",
                "Ingeniería.",
                "Organización política.",
                "Latín."
            ]
        },

        "edad_media": {
            titulo: "Edad Media",
            respuesta: "La Edad Media fue el período comprendido aproximadamente entre la caída del Imperio romano de Occidente y el inicio de la Edad Moderna.",
            caracteristicas: [
                "Feudalismo.",
                "Sociedad estamental.",
                "Gran influencia de la Iglesia.",
                "Castillos y señoríos.",
                "Desarrollo de ciudades y comercio hacia el final del período."
            ]
        },

        "feudalismo": {
            titulo: "Feudalismo",
            respuesta: "El feudalismo fue un sistema político, económico y social característico de gran parte de la Europa medieval.",
            elementos: [
                "Señores feudales.",
                "Nobles.",
                "Campesinos.",
                "Feudos.",
                "Relaciones de vasallaje."
            ]
        },

        "renacimiento": {
            titulo: "Renacimiento",
            respuesta: "El Renacimiento fue un movimiento cultural que recuperó elementos de la cultura clásica y promovió nuevas formas de pensamiento, arte y ciencia.",
            caracteristicas: [
                "Humanismo.",
                "Interés por la Antigüedad clásica.",
                "Desarrollo artístico.",
                "Avances científicos.",
                "Mayor valoración del ser humano."
            ]
        },

        "reforma": {
            titulo: "Reforma Protestante",
            respuesta: "La Reforma Protestante fue un movimiento religioso del siglo XVI que cuestionó diversos aspectos de la Iglesia católica y dio origen a nuevas iglesias cristianas.",
            personaje: "Martín Lutero",
            consecuencias: [
                "División religiosa de Europa.",
                "Nacimiento de iglesias protestantes.",
                "Conflictos religiosos.",
                "Reformas dentro de la Iglesia católica."
            ]
        },

        "revolucion_cientifica": {
            titulo: "Revolución Científica",
            respuesta: "La Revolución Científica transformó la manera de estudiar la naturaleza mediante la observación, la experimentación y el razonamiento.",
            personajes: [
                "Nicolás Copérnico.",
                "Galileo Galilei.",
                "Johannes Kepler.",
                "Isaac Newton."
            ]
        },

        "descubrimientos_geograficos": {
            titulo: "Grandes descubrimientos geográficos",
            respuesta: "Durante los siglos XV y XVI los europeos realizaron grandes viajes marítimos que conectaron diferentes regiones del mundo.",
            acontecimientos: [
                "Viajes portugueses.",
                "Viaje de Cristóbal Colón.",
                "Llegada europea a América.",
                "Circunnavegación del mundo.",
                "Expansión comercial europea."
            ]
        },

        "revolucion_francesa": {
            titulo: "Revolución Francesa",
            respuesta: "La Revolución Francesa comenzó en 1789 y produjo profundas transformaciones políticas y sociales en Francia y Europa.",
            causas: [
                "Desigualdad social.",
                "Crisis económica.",
                "Problemas financieros.",
                "Ideas de la Ilustración."
            ],
            acontecimientos: [
                "Toma de la Bastilla.",
                "Declaración de los Derechos del Hombre y del Ciudadano.",
                "Fin de privilegios feudales.",
                "Cambios políticos."
            ]
        },

        "ilustracion": {
            titulo: "La Ilustración",
            respuesta: "La Ilustración fue un movimiento intelectual que defendió la razón, la libertad, la igualdad y el pensamiento crítico.",
            ideas: [
                "Razón.",
                "Libertad.",
                "Igualdad.",
                "Derechos.",
                "Soberanía popular."
            ]
        },

        "revolucion_industrial": {
            titulo: "Revolución Industrial",
            respuesta: "La Revolución Industrial comenzó en Gran Bretaña durante el siglo XVIII y transformó la producción mediante el uso de máquinas y nuevas fuentes de energía.",
            cambios: [
                "Mecanización.",
                "Fábricas.",
                "Máquina de vapor.",
                "Crecimiento urbano.",
                "Aumento de la producción.",
                "Cambios en el trabajo."
            ]
        },

        "imperialismo": {
            titulo: "Imperialismo",
            respuesta: "El imperialismo fue la expansión política, económica y territorial de las potencias industriales sobre otros territorios, especialmente durante el siglo XIX.",
            causas: [
                "Búsqueda de materias primas.",
                "Nuevos mercados.",
                "Intereses políticos.",
                "Competencia entre potencias."
            ]
        },

        "primera_guerra_mundial": {
            titulo: "Primera Guerra Mundial",
            respuesta: "La Primera Guerra Mundial ocurrió entre 1914 y 1918 y enfrentó a grandes potencias organizadas en diferentes alianzas.",
            causas: [
                "Nacionalismo.",
                "Imperialismo.",
                "Carrera armamentista.",
                "Sistema de alianzas."
            ],
            consecuencias: [
                "Millones de víctimas.",
                "Caída de grandes imperios.",
                "Cambios territoriales.",
                "Creación de la Sociedad de Naciones."
            ]
        },

        "revolucion_rusa": {
            titulo: "Revolución Rusa",
            respuesta: "La Revolución Rusa de 1917 provocó la caída del régimen zarista y posteriormente el establecimiento de un gobierno bolchevique.",
            consecuencias: [
                "Fin del zarismo.",
                "Guerra civil.",
                "Creación de la Unión Soviética.",
                "Expansión de ideas socialistas."
            ]
        },

        "crisis_1929": {
            titulo: "Crisis de 1929",
            respuesta: "La crisis de 1929 comenzó con el colapso de la bolsa de Nueva York y provocó una gran depresión económica internacional.",
            consecuencias: [
                "Desempleo.",
                "Caída de la producción.",
                "Quiebras empresariales.",
                "Reducción del comercio internacional."
            ]
        },

        "segunda_guerra_mundial": {
            titulo: "Segunda Guerra Mundial",
            respuesta: "La Segunda Guerra Mundial ocurrió entre 1939 y 1945 y fue uno de los conflictos más destructivos de la historia.",
            bandos: [
                "Aliados.",
                "Potencias del Eje."
            ],
            acontecimientos: [
                "Invasión de Polonia.",
                "Pearl Harbor.",
                "Desembarco de Normandía.",
                "Derrota de Alemania.",
                "Bombas atómicas sobre Hiroshima y Nagasaki."
            ],
            consecuencias: [
                "Millones de víctimas.",
                "Creación de la ONU.",
                "Cambios territoriales.",
                "Inicio de una nueva etapa de rivalidad internacional."
            ]
        },

        "guerra_fria": {
            titulo: "Guerra Fría",
            respuesta: "La Guerra Fría fue una rivalidad política, económica, militar e ideológica entre Estados Unidos y la Unión Soviética después de la Segunda Guerra Mundial.",
            caracteristicas: [
                "Capitalismo y socialismo.",
                "Carrera armamentista.",
                "Carrera espacial.",
                "Conflictos indirectos.",
                "División política del mundo."
            ]
        },

        "descolonizacion": {
            titulo: "Descolonización",
            respuesta: "La descolonización fue el proceso mediante el cual numerosos territorios de Asia y África obtuvieron su independencia de las potencias coloniales.",
            causas: [
                "Movimientos nacionalistas.",
                "Debilitamiento de las potencias europeas.",
                "Movimientos independentistas.",
                "Cambios políticos después de la Segunda Guerra Mundial."
            ]
        },

        "caida_union_sovietica": {
            titulo: "Caída de la Unión Soviética",
            respuesta: "La Unión Soviética se disolvió en 1991 después de un período de crisis económica, política y social.",
            consecuencias: [
                "Fin de la Unión Soviética.",
                "Independencia de varias repúblicas.",
                "Fin de la Guerra Fría.",
                "Cambios en el orden internacional."
            ]
        },

        "globalizacion": {
            titulo: "Globalización",
            respuesta: "La globalización es un proceso de creciente conexión entre países mediante el comercio, las comunicaciones, la tecnología y los intercambios culturales.",
            aspectos: [
                "Comercio internacional.",
                "Internet.",
                "Tecnología.",
                "Migración.",
                "Intercambio cultural."
            ]
        },

        "mundo_contemporaneo": {
            titulo: "Mundo contemporáneo",
            respuesta: "El mundo contemporáneo está marcado por la globalización, los avances tecnológicos, la interdependencia económica y nuevos desafíos sociales y ambientales.",
            temas: [
                "Globalización.",
                "Tecnología.",
                "Organizaciones internacionales.",
                "Cambio climático.",
                "Conflictos internacionales.",
                "Desarrollo sostenible."
            ]
        }

    }

};