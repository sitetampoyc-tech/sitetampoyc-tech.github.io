const inglesIntermedio = {

    nivel: "Inglés Intermedio",

    temas: {

        "pasado simple": {
            titulo: "Past Simple",

            respuesta: "El pasado simple se utiliza para hablar de acciones que ocurrieron y terminaron en el pasado.",

            estructura: "Subject + verb in past + complement.",

            ejemplos: [
                "I visited my grandmother yesterday.",
                "She studied English last night.",
                "They played football on Sunday."
            ],

            preguntas: [
                "¿Para qué usamos el pasado simple?",
                "¿Qué ocurre con los verbos regulares?",
                "¿Qué son los verbos irregulares?"
            ],

            respuestas: [
                "Para acciones terminadas en el pasado.",
                "Generalmente agregamos -ed.",
                "Son verbos que cambian de forma en pasado."
            ]
        },

        "verbos irregulares": {
            titulo: "Irregular Verbs",

            respuesta: "Los verbos irregulares no forman el pasado simplemente agregando -ed. Debemos aprender sus formas.",

            vocabulario: {
                "go - went - gone": "ir",
                "eat - ate - eaten": "comer",
                "see - saw - seen": "ver",
                "write - wrote - written": "escribir",
                "take - took - taken": "tomar / llevar",
                "come - came - come": "venir",
                "have - had - had": "tener",
                "make - made - made": "hacer",
                "do - did - done": "hacer",
                "get - got - got": "obtener"
            },

            ejemplos: [
                "I went to school yesterday.",
                "She ate breakfast at seven.",
                "They saw a movie last night."
            ]
        },

        "pasado continuo": {
            titulo: "Past Continuous",

            respuesta: "El pasado continuo se utiliza para hablar de acciones que estaban ocurriendo en un momento determinado del pasado.",

            estructura: "Subject + was/were + verb-ing",

            ejemplos: [
                "I was studying at 8 p.m.",
                "She was watching TV.",
                "They were playing football."
            ],

            preguntas: [
                "¿Para qué usamos el pasado continuo?",
                "¿Qué auxiliares utilizamos?"
            ],

            respuestas: [
                "Para acciones que estaban ocurriendo en el pasado.",
                "Was y were."
            ]
        },

        "futuro will": {
            titulo: "Future with Will",

            respuesta: "Will se utiliza para hablar de decisiones, predicciones y situaciones futuras.",

            estructura: "Subject + will + verb",

            ejemplos: [
                "I will study tomorrow.",
                "She will travel next year.",
                "They will help us."
            ],

            preguntas: [
                "¿Cómo formamos una oración con will?",
                "¿El verbo cambia después de will?"
            ],

            respuestas: [
                "Subject + will + verbo.",
                "No. El verbo permanece en su forma base."
            ]
        },

        "be going to": {
            titulo: "Future with Be Going To",

            respuesta: "Be going to se utiliza principalmente para planes e intenciones futuras o para predicciones basadas en evidencias.",

            ejemplos: [
                "I am going to study tonight.",
                "She is going to travel next week.",
                "They are going to play tomorrow."
            ],

            preguntas: [
                "¿Para qué usamos be going to?",
                "¿Qué verbo auxiliar acompaña a going to?"
            ],

            respuestas: [
                "Para planes, intenciones y algunas predicciones.",
                "Am, is o are."
            ]
        },

        "presente perfecto": {
            titulo: "Present Perfect",

            respuesta: "El presente perfecto relaciona una acción pasada con el presente. Se forma con have o has y el participio del verbo.",

            estructura: "Subject + have/has + past participle",

            ejemplos: [
                "I have finished my homework.",
                "She has visited Cusco.",
                "They have seen that movie."
            ],

            preguntas: [
                "¿Cómo se forma el presente perfecto?",
                "¿Qué auxiliares utilizamos?",
                "¿Qué forma del verbo usamos?"
            ],

            respuestas: [
                "Con have/has + participio.",
                "Have y has.",
                "El participio pasado."
            ]
        },

        "for y since": {
            titulo: "For y Since",

            respuesta: "For indica una duración de tiempo y since indica el momento desde el cual comenzó una acción.",

            ejemplos: [
                "I have lived here for five years.",
                "She has studied English since 2020."
            ],

            preguntas: [
                "¿Cuándo usamos for?",
                "¿Cuándo usamos since?"
            ],

            respuestas: [
                "Para indicar duración.",
                "Para indicar el momento de inicio."
            ]
        },

        "comparativos": {
            titulo: "Comparatives",

            respuesta: "Los comparativos permiten comparar dos personas, animales, objetos o situaciones.",

            ejemplos: [
                "My car is faster than yours.",
                "This book is more interesting than that one.",
                "John is taller than Peter."
            ],

            preguntas: [
                "¿Para qué usamos los comparativos?",
                "¿Qué palabra suele acompañar una comparación?"
            ],

            respuestas: [
                "Para comparar dos elementos.",
                "Than."
            ]
        },

        "superlativos": {
            titulo: "Superlatives",

            respuesta: "Los superlativos se utilizan para indicar que alguien o algo posee una característica en el grado más alto dentro de un grupo.",

            ejemplos: [
                "She is the tallest student in the class.",
                "This is the most interesting book.",
                "He is the fastest runner."
            ],

            preguntas: [
                "¿Para qué usamos los superlativos?",
                "¿Qué artículo suele utilizarse?"
            ],

            respuestas: [
                "Para expresar el grado máximo dentro de un grupo.",
                "The."
            ]
        },

        "modales": {
            titulo: "Modal Verbs",

            respuesta: "Los verbos modales permiten expresar habilidad, posibilidad, permiso, obligación, consejo y otras ideas.",

            vocabulario: {
                "can": "poder / capacidad",
                "could": "podría / podía",
                "may": "puede que / permiso",
                "might": "podría",
                "must": "deber / obligación",
                "should": "debería / consejo",
                "have to": "tener que"
            },

            ejemplos: [
                "You should study more.",
                "You must wear a uniform.",
                "She can swim."
            ]
        },

        "condicional cero": {
            titulo: "Zero Conditional",

            respuesta: "El condicional cero se utiliza para hablar de hechos generales, reglas o situaciones que siempre producen el mismo resultado.",

            estructura: "If + present simple, present simple.",

            ejemplo: "If you heat water, it boils.",

            preguntas: [
                "¿Para qué usamos el condicional cero?",
                "¿Qué tiempos verbales utiliza?"
            ],

            respuestas: [
                "Para hechos generales y situaciones habituales.",
                "Present simple en ambas partes."
            ]
        },

        "primer condicional": {
            titulo: "First Conditional",

            respuesta: "El primer condicional se utiliza para hablar de situaciones futuras posibles y sus consecuencias.",

            estructura: "If + present simple, will + verb.",

            ejemplo: "If it rains, I will stay home.",

            preguntas: [
                "¿Para qué usamos el primer condicional?",
                "¿Qué estructura utiliza?"
            ],

            respuestas: [
                "Para situaciones futuras posibles.",
                "If + presente simple + will + verbo."
            ]
        },

        "segundo condicional": {
            titulo: "Second Conditional",

            respuesta: "El segundo condicional se utiliza para hablar de situaciones hipotéticas o poco probables en el presente o futuro.",

            estructura: "If + past simple, would + verb.",

            ejemplo: "If I had more money, I would travel around the world.",

            preguntas: [
                "¿Para qué usamos el segundo condicional?",
                "¿Qué estructura utiliza?"
            ],

            respuestas: [
                "Para situaciones hipotéticas o poco probables.",
                "If + past simple + would + verbo."
            ]
        },

        "voz pasiva": {
            titulo: "Passive Voice",

            respuesta: "La voz pasiva se utiliza cuando queremos destacar la acción o el objeto que recibe la acción en lugar de quien la realiza.",

            estructura: "Subject + be + past participle.",

            ejemplos: [
                "The book was written by George Orwell.",
                "English is spoken in many countries.",
                "The house was built in 2010."
            ],

            preguntas: [
                "¿Qué es la voz pasiva?",
                "¿Qué forma verbal utiliza?",
                "¿Qué se destaca normalmente?"
            ],

            respuestas: [
                "Una estructura en la que el receptor de la acción ocupa el lugar principal.",
                "El verbo to be + participio.",
                "La acción o quien la recibe."
            ]
        },

        "reported speech": {
            titulo: "Reported Speech",

            respuesta: "El estilo indirecto permite comunicar lo que otra persona dijo sin repetir exactamente sus palabras.",

            ejemplo: "Direct: She said, 'I am tired.' → Reported: She said that she was tired.",

            preguntas: [
                "¿Qué es el reported speech?",
                "¿Para qué se utiliza?"
            ],

            respuestas: [
                "Es el estilo indirecto.",
                "Para comunicar lo que otra persona dijo."
            ]
        },

        "relative clauses": {
            titulo: "Relative Clauses",

            respuesta: "Las oraciones relativas permiten agregar información sobre una persona, animal, objeto o lugar.",

            vocabulario: {
                "who": "quien / que, para personas",
                "which": "que / el cual, para cosas",
                "that": "que",
                "where": "donde",
                "whose": "cuyo / cuya"
            },

            ejemplos: [
                "The girl who lives here is my friend.",
                "This is the book that I bought.",
                "That is the school where I study."
            ]
        },

        "phrasal verbs": {
            titulo: "Phrasal Verbs",

            respuesta: "Los phrasal verbs están formados generalmente por un verbo y una partícula. Juntos pueden tener un significado diferente al del verbo original.",

            vocabulario: {
                "wake up": "despertarse",
                "get up": "levantarse",
                "turn on": "encender",
                "turn off": "apagar",
                "look for": "buscar",
                "look after": "cuidar",
                "give up": "rendirse",
                "find out": "averiguar",
                "pick up": "recoger",
                "take off": "quitarse / despegar"
            },

            ejemplos: [
                "Please turn off the lights.",
                "I am looking for my keys.",
                "Don't give up."
            ]
        },

        "conectores": {
            titulo: "Connectors",

            respuesta: "Los conectores permiten unir ideas y organizar mejor una oración o un texto.",

            vocabulario: {
                "and": "y",
                "but": "pero",
                "because": "porque",
                "so": "por eso / así que",
                "although": "aunque",
                "however": "sin embargo",
                "therefore": "por lo tanto",
                "also": "también",
                "first": "primero",
                "finally": "finalmente"
            },

            ejemplos: [
                "I stayed home because it was raining.",
                "She is tired, but she continues studying.",
                "He studied hard; therefore, he passed."
            ]
        },

        "vocabulario de viajes": {
            titulo: "Travel Vocabulary",

            vocabulario: {
                "airport": "aeropuerto",
                "flight": "vuelo",
                "passport": "pasaporte",
                "ticket": "boleto",
                "hotel": "hotel",
                "reservation": "reserva",
                "luggage": "equipaje",
                "suitcase": "maleta",
                "train station": "estación de tren",
                "boarding pass": "tarjeta de embarque"
            },

            ejemplos: [
                "I have my passport.",
                "Where is the airport?",
                "I have a hotel reservation."
            ]
        },

        "vocabulario de salud": {
            titulo: "Health Vocabulary",

            vocabulario: {
                "headache": "dolor de cabeza",
                "stomachache": "dolor de estómago",
                "fever": "fiebre",
                "cough": "tos",
                "cold": "resfriado",
                "medicine": "medicina",
                "doctor": "médico",
                "hospital": "hospital",
                "healthy": "saludable",
                "exercise": "ejercicio"
            },

            ejemplos: [
                "I have a headache.",
                "You should exercise.",
                "She went to the doctor."
            ]
        },

        "vocabulario de tecnologia": {
            titulo: "Technology Vocabulary",

            vocabulario: {
                "computer": "computadora",
                "keyboard": "teclado",
                "screen": "pantalla",
                "website": "sitio web",
                "internet": "internet",
                "download": "descargar",
                "upload": "subir",
                "password": "contraseña",
                "software": "software",
                "application": "aplicación"
            },

            ejemplos: [
                "I use a computer every day.",
                "Download the application.",
                "Enter your password."
            ]
        },

        "comprension lectora": {
            titulo: "Comprensión lectora",

            respuesta: "La comprensión lectora consiste en entender información explícita e implícita de un texto en inglés.",

            estrategias: [
                "Identificar la idea principal.",
                "Buscar palabras clave.",
                "Identificar personajes y lugares.",
                "Reconocer información específica.",
                "Inferir información por el contexto."
            ],

            preguntas: [
                "¿Qué es la idea principal?",
                "¿Qué son las palabras clave?",
                "¿Por qué es importante el contexto?"
            ]
        },

        "redaccion": {
            titulo: "Writing básico-intermedio",

            respuesta: "La escritura en inglés requiere organizar las ideas, utilizar vocabulario adecuado y aplicar correctamente las estructuras gramaticales.",

            estructura: [
                "Introduction.",
                "Main ideas.",
                "Examples or details.",
                "Conclusion."
            ],

            preguntas: [
                "¿Cómo podemos organizar un texto?",
                "¿Por qué son importantes los conectores?"
            ]
        },

        "conversacion": {
            titulo: "Conversación en inglés",

            respuesta: "La conversación permite utilizar el inglés en situaciones cotidianas mediante preguntas, respuestas y expresiones comunicativas.",

            situaciones: [
                "Presentarse.",
                "Hablar de la familia.",
                "Hablar de gustos.",
                "Hablar de rutinas.",
                "Hablar de experiencias.",
                "Pedir información.",
                "Hablar sobre planes."
            ],

            ejemplos: [
                "What do you like doing?",
                "What did you do yesterday?",
                "What are you going to do tomorrow?"
            ]
        }

    }

};