const comprension1 = {

    nombre: "Comprensión",

    temas: {

        "comprension lectora": {
            titulo: "Comprensión lectora",
            respuesta: "La comprensión lectora es la capacidad de entender, interpretar y analizar un texto. No consiste solamente en leer, sino también en identificar información, relacionar ideas y obtener conclusiones.",
            habilidades: [
                "Identificar información explícita.",
                "Reconocer la idea principal.",
                "Identificar ideas secundarias.",
                "Realizar inferencias.",
                "Interpretar el propósito del autor.",
                "Analizar el contenido del texto."
            ]
        },

        "idea principal": {
            titulo: "Idea principal",
            respuesta: "La idea principal es la información más importante que el autor quiere comunicar en un texto o párrafo.",
            ejemplo: "Si un texto explica los beneficios de hacer ejercicio, la idea principal puede ser que la actividad física contribuye a mantener una buena salud."
        },

        "ideas secundarias": {
            titulo: "Ideas secundarias",
            respuesta: "Las ideas secundarias desarrollan, explican, complementan o ejemplifican la idea principal.",
            ejemplo: "En un texto sobre los beneficios del ejercicio, mencionar que mejora la circulación y fortalece los músculos serían ideas secundarias."
        },

        "informacion explicita": {
            titulo: "Información explícita",
            respuesta: "Es la información que aparece directamente escrita en el texto y puede localizarse mediante una lectura cuidadosa.",
            estrategias: [
                "Buscar datos concretos.",
                "Identificar nombres.",
                "Reconocer fechas.",
                "Localizar lugares.",
                "Encontrar acciones o acontecimientos."
            ]
        },

        "informacion implicita": {
            titulo: "Información implícita",
            respuesta: "Es la información que no aparece directamente en el texto, pero puede deducirse a partir de las pistas y datos proporcionados.",
            ejemplo: "Si el texto dice que una persona salió con paraguas y botas, podemos inferir que probablemente estaba lloviendo."
        },

        "inferencia": {
            titulo: "Inferencia",
            respuesta: "Inferir significa obtener una conclusión utilizando la información que aparece en el texto y nuestros conocimientos previos.",
            pasos: [
                "Leer atentamente.",
                "Identificar las pistas.",
                "Relacionar la información.",
                "Obtener una conclusión."
            ]
        },

        "proposito del autor": {
            titulo: "Propósito del autor",
            respuesta: "El propósito del autor es la intención con la que escribe un texto.",
            tipos: [
                "Informar.",
                "Explicar.",
                "Entretener.",
                "Convencer.",
                "Persuadir.",
                "Reflexionar.",
                "Criticar."
            ]
        },

        "tema": {
            titulo: "Tema del texto",
            respuesta: "El tema es el asunto general del que trata un texto. Normalmente puede expresarse mediante una frase breve.",
            ejemplo: "Si un texto habla sobre la contaminación de los océanos, el tema puede ser 'la contaminación marina'."
        },

        "resumen": {
            titulo: "Resumen",
            respuesta: "El resumen presenta las ideas principales de un texto de manera breve, clara y organizada.",
            pasos: [
                "Leer el texto.",
                "Identificar el tema.",
                "Reconocer las ideas principales.",
                "Eliminar información repetida o poco importante.",
                "Redactar las ideas principales con palabras propias."
            ]
        },

        "parafrasis": {
            titulo: "Paráfrasis",
            respuesta: "La paráfrasis consiste en expresar con nuestras propias palabras el contenido de un texto sin cambiar su significado.",
            ejemplo: "Original: 'El estudiante estudió mucho para el examen.' Paráfrasis: 'El alumno se preparó bastante para rendir su evaluación.'"
        },

        "tipos de texto": {
            titulo: "Tipos de texto",
            respuesta: "Los textos pueden clasificarse según su propósito, estructura y características.",
            tipos: [
                "Narrativo.",
                "Descriptivo.",
                "Expositivo.",
                "Argumentativo.",
                "Instructivo.",
                "Dialogado."
            ]
        },

        "texto narrativo": {
            titulo: "Texto narrativo",
            respuesta: "El texto narrativo cuenta acontecimientos reales o ficticios protagonizados por personajes en un tiempo y espacio determinados.",
            elementos: [
                "Narrador.",
                "Personajes.",
                "Tiempo.",
                "Espacio.",
                "Acciones.",
                "Trama."
            ]
        },

        "texto descriptivo": {
            titulo: "Texto descriptivo",
            respuesta: "El texto descriptivo presenta las características de una persona, animal, objeto, lugar, situación o fenómeno.",
            caracteristicas: [
                "Utiliza detalles.",
                "Presenta características.",
                "Puede utilizar adjetivos.",
                "Permite imaginar aquello que se describe."
            ]
        },

        "texto expositivo": {
            titulo: "Texto expositivo",
            respuesta: "El texto expositivo tiene como finalidad explicar o informar sobre un tema de manera clara y organizada.",
            estructura: [
                "Introducción.",
                "Desarrollo.",
                "Conclusión."
            ]
        },

        "texto argumentativo": {
            titulo: "Texto argumentativo",
            respuesta: "El texto argumentativo presenta una opinión o tesis y utiliza argumentos para defenderla.",
            estructura: [
                "Tesis.",
                "Argumentos.",
                "Ejemplos o evidencias.",
                "Conclusión."
            ]
        },

        "texto instructivo": {
            titulo: "Texto instructivo",
            respuesta: "El texto instructivo presenta indicaciones o pasos para realizar una actividad correctamente.",
            ejemplos: [
                "Recetas.",
                "Manuales.",
                "Instrucciones de uso.",
                "Reglamentos."
            ]
        },

        "texto dialogado": {
            titulo: "Texto dialogado",
            respuesta: "El texto dialogado presenta una conversación entre dos o más personas o personajes.",
            ejemplos: [
                "Conversaciones.",
                "Entrevistas.",
                "Obras teatrales.",
                "Diálogos literarios."
            ]
        },

        "estructura del texto": {
            titulo: "Estructura del texto",
            respuesta: "La estructura organiza las ideas de un texto para que el lector pueda comprenderlas con facilidad.",
            partes: [
                "Introducción.",
                "Desarrollo.",
                "Conclusión."
            ]
        },

        "coherencia": {
            titulo: "Coherencia",
            respuesta: "La coherencia es la relación lógica entre las ideas de un texto. Un texto coherente presenta información ordenada y relacionada con el tema.",
            ejemplo: "Las ideas deben mantener una relación lógica y no contradecirse sin explicación."
        },

        "cohesion": {
            titulo: "Cohesión",
            respuesta: "La cohesión es la forma en que las diferentes partes de un texto se conectan mediante recursos lingüísticos.",
            recursos: [
                "Conectores.",
                "Pronombres.",
                "Repetición controlada.",
                "Sinónimos.",
                "Referencias."
            ]
        },

        "conectores": {
            titulo: "Conectores textuales",
            respuesta: "Los conectores son palabras o expresiones que relacionan ideas dentro de un texto.",
            tipos: {
                "adicion": [
                    "Además.",
                    "También.",
                    "Asimismo."
                ],
                "contraste": [
                    "Sin embargo.",
                    "No obstante.",
                    "En cambio."
                ],
                "causa": [
                    "Porque.",
                    "Debido a que.",
                    "Ya que."
                ],
                "consecuencia": [
                    "Por lo tanto.",
                    "Por eso.",
                    "En consecuencia."
                ],
                "ejemplo": [
                    "Por ejemplo.",
                    "Como muestra.",
                    "Tal como."
                ],
                "conclusion": [
                    "En conclusión.",
                    "Finalmente.",
                    "En síntesis."
                ]
            }
        },

        "hechos y opiniones": {
            titulo: "Hechos y opiniones",
            respuesta: "Un hecho es una afirmación que puede comprobarse mediante evidencias. Una opinión expresa una valoración, pensamiento o punto de vista.",
            ejemplos: [
                "Hecho: La Tierra gira alrededor del Sol.",
                "Opinión: La astronomía es una ciencia fascinante."
            ]
        },

        "fuentes de informacion": {
            titulo: "Fuentes de información",
            respuesta: "Las fuentes de información proporcionan datos que permiten conocer o investigar un tema.",
            tipos: [
                "Libros.",
                "Artículos.",
                "Documentos.",
                "Entrevistas.",
                "Fuentes digitales.",
                "Fuentes históricas."
            ]
        },

        "lectura critica": {
            titulo: "Lectura crítica",
            respuesta: "La lectura crítica consiste en analizar un texto, evaluar sus ideas, identificar argumentos y reflexionar sobre la información presentada.",
            preguntas: [
                "¿Quién es el autor?",
                "¿Cuál es el propósito?",
                "¿Qué idea defiende?",
                "¿Qué evidencias presenta?",
                "¿La información es confiable?",
                "¿Existen opiniones o prejuicios?"
            ]
        },

        "argumentos": {
            titulo: "Argumentos",
            respuesta: "Los argumentos son razones utilizadas para apoyar una opinión o defender una idea.",
            tipos: [
                "Argumento basado en hechos.",
                "Argumento basado en ejemplos.",
                "Argumento basado en datos.",
                "Argumento de autoridad.",
                "Argumento de causa y consecuencia."
            ]
        },

        "tesis": {
            titulo: "Tesis",
            respuesta: "La tesis es la idea principal o posición que el autor defiende en un texto argumentativo.",
            ejemplo: "Tesis: 'El uso responsable de la tecnología mejora el aprendizaje de los estudiantes.'"
        },

        "conclusion": {
            titulo: "Conclusión",
            respuesta: "La conclusión es la parte final de un texto en la que se sintetizan las ideas principales o se presenta el resultado de una reflexión.",
            recomendaciones: [
                "Retomar la idea principal.",
                "Resumir los puntos importantes.",
                "Presentar una reflexión final.",
                "No introducir ideas completamente nuevas."
            ]
        },

        "comprension literal": {
            titulo: "Nivel literal",
            respuesta: "El nivel literal consiste en identificar información que aparece directamente en el texto.",
            preguntas: [
                "¿Quién?",
                "¿Qué?",
                "¿Cuándo?",
                "¿Dónde?"
            ]
        },

        "comprension inferencial": {
            titulo: "Nivel inferencial",
            respuesta: "El nivel inferencial consiste en deducir información que no está expresada directamente en el texto.",
            preguntas: [
                "¿Qué se puede deducir?",
                "¿Por qué ocurrió?",
                "¿Qué podría suceder?",
                "¿Qué quiso decir el autor?"
            ]
        },

        "comprension critica": {
            titulo: "Nivel crítico",
            respuesta: "El nivel crítico consiste en evaluar el contenido del texto y formar una opinión fundamentada.",
            preguntas: [
                "¿Estoy de acuerdo?",
                "¿La información es confiable?",
                "¿Los argumentos son suficientes?",
                "¿Qué opinión puedo formular?"
            ]
        }

    }

};