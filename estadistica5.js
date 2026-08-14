const estadistica5 = {

    grado: "5° de Secundaria",

    temas: {

        "poblacion y muestra": {
            titulo: "Población y muestra",

            respuesta: "La población es el conjunto total de elementos que se desea estudiar. La muestra es una parte representativa de esa población.",

            ejemplo: "Si queremos conocer la opinión de todos los estudiantes de un colegio, todos los estudiantes forman la población y un grupo seleccionado forma la muestra.",

            preguntas: [
                "¿Qué es una población?",
                "¿Qué es una muestra?",
                "¿Por qué se utiliza una muestra?"
            ],

            ejercicios: [
                "En un colegio de 800 estudiantes se encuesta a 100. Identifica la población y la muestra."
            ],

            soluciones: [
                "La población son los 800 estudiantes y la muestra son los 100 estudiantes encuestados."
            ]
        },

        "variables estadisticas": {
            titulo: "Variables estadísticas",

            respuesta: "Una variable estadística es una característica que puede tomar diferentes valores en los elementos de una población.",

            tipos: [
                "Variable cualitativa.",
                "Variable cuantitativa discreta.",
                "Variable cuantitativa continua."
            ],

            preguntas: [
                "¿Qué es una variable estadística?",
                "¿Qué es una variable cualitativa?",
                "¿Qué es una variable cuantitativa?"
            ],

            ejercicios: [
                "Clasifica la variable 'número de hermanos'."
            ],

            soluciones: [
                "Es una variable cuantitativa discreta."
            ]
        },

        "tablas de frecuencia": {
            titulo: "Tablas de frecuencia",

            respuesta: "Una tabla de frecuencia organiza los datos y muestra cuántas veces aparece cada valor.",

            tipos: [
                "Frecuencia absoluta.",
                "Frecuencia relativa.",
                "Frecuencia acumulada.",
                "Frecuencia relativa acumulada."
            ],

            preguntas: [
                "¿Qué es una tabla de frecuencia?",
                "¿Qué es la frecuencia absoluta?",
                "¿Qué es la frecuencia relativa?"
            ],

            ejercicios: [
                "Explica qué información proporciona la frecuencia absoluta."
            ],

            soluciones: [
                "Indica cuántas veces aparece un determinado valor en el conjunto de datos."
            ]
        },

        "frecuencia absoluta": {
            titulo: "Frecuencia absoluta",

            respuesta: "La frecuencia absoluta indica el número de veces que se repite un determinado dato.",

            ejemplo: "Si la nota 15 aparece 6 veces, su frecuencia absoluta es 6.",

            preguntas: [
                "¿Qué representa la frecuencia absoluta?",
                "¿Cómo se obtiene?"
            ],

            ejercicios: [
                "En los datos 2, 3, 3, 4, 4, 4, ¿cuál es la frecuencia absoluta del número 4?"
            ],

            soluciones: [
                "3."
            ]
        },

        "frecuencia relativa": {
            titulo: "Frecuencia relativa",

            respuesta: "La frecuencia relativa representa la proporción o porcentaje que corresponde a cada valor respecto del total de datos.",

            ejemplo: "Si un dato aparece 20 veces en un total de 100 datos, su frecuencia relativa es 0,20 o 20%.",

            preguntas: [
                "¿Qué representa la frecuencia relativa?",
                "¿Cómo puede expresarse?"
            ],

            ejercicios: [
                "Un dato aparece 15 veces en una muestra de 60 datos. Calcula su frecuencia relativa."
            ],

            soluciones: [
                "0,25 o 25%."
            ]
        },

        "media aritmetica": {
            titulo: "Media aritmética",

            respuesta: "La media aritmética se obtiene sumando todos los datos y dividiendo el resultado entre el número total de datos.",

            ejemplo: "La media de 10, 12 y 14 es 12.",

            preguntas: [
                "¿Qué es la media aritmética?",
                "¿Cómo se calcula?",
                "¿Para qué sirve?"
            ],

            ejercicios: [
                "Calcula la media de 12, 15, 18, 20 y 25."
            ],

            soluciones: [
                "18."
            ]
        },

        "mediana": {
            titulo: "Mediana",

            respuesta: "La mediana es el valor que ocupa la posición central cuando los datos están ordenados.",

            ejemplo: "En 3, 5, 7, 9, 11, la mediana es 7.",

            preguntas: [
                "¿Qué es la mediana?",
                "¿Por qué debemos ordenar los datos?",
                "¿Qué ocurre si hay una cantidad par de datos?"
            ],

            ejercicios: [
                "Encuentra la mediana de 4, 7, 2, 9 y 5."
            ],

            soluciones: [
                "Ordenando: 2, 4, 5, 7, 9. La mediana es 5."
            ]
        },

        "moda": {
            titulo: "Moda",

            respuesta: "La moda es el valor que aparece con mayor frecuencia en un conjunto de datos.",

            ejemplo: "En 2, 3, 3, 4, 5, la moda es 3.",

            preguntas: [
                "¿Qué es la moda?",
                "¿Puede existir más de una moda?",
                "¿Puede un conjunto no tener moda?"
            ],

            ejercicios: [
                "Encuentra la moda de 5, 7, 7, 8, 9, 7, 10."
            ],

            soluciones: [
                "La moda es 7."
            ]
        },

        "medidas de tendencia central": {
            titulo: "Medidas de tendencia central",

            respuesta: "Las principales medidas de tendencia central son la media, la mediana y la moda. Permiten representar un conjunto de datos mediante valores centrales o representativos.",

            preguntas: [
                "¿Cuáles son las principales medidas de tendencia central?",
                "¿Qué diferencia existe entre media, mediana y moda?"
            ],

            ejercicios: [
                "Menciona las tres principales medidas de tendencia central."
            ],

            soluciones: [
                "Media aritmética, mediana y moda."
            ]
        },

        "rango": {
            titulo: "Rango",

            respuesta: "El rango es una medida de dispersión que se obtiene restando el menor dato del mayor dato.",

            ejemplo: "Para los datos 4, 7, 10 y 15, el rango es 15 - 4 = 11.",

            preguntas: [
                "¿Qué es el rango?",
                "¿Cómo se calcula?",
                "¿Qué información proporciona?"
            ],

            ejercicios: [
                "Calcula el rango de 8, 12, 15, 21 y 25."
            ],

            soluciones: [
                "17."
            ]
        },

        "medidas de dispersion": {
            titulo: "Medidas de dispersión",

            respuesta: "Las medidas de dispersión indican qué tan separados o concentrados están los datos respecto de un valor central.",

            tipos: [
                "Rango.",
                "Varianza.",
                "Desviación estándar."
            ],

            preguntas: [
                "¿Qué miden las medidas de dispersión?",
                "¿Qué es el rango?",
                "¿Qué indica la desviación estándar?"
            ],

            ejercicios: [
                "Menciona tres medidas de dispersión."
            ],

            soluciones: [
                "Rango, varianza y desviación estándar."
            ]
        },

        "varianza": {
            titulo: "Varianza",

            respuesta: "La varianza mide la dispersión de los datos respecto de la media mediante el promedio de los cuadrados de las diferencias.",

            preguntas: [
                "¿Qué mide la varianza?",
                "¿Respecto a qué valor se comparan los datos?"
            ],

            ejercicios: [
                "Explica qué significa una varianza pequeña."
            ],

            soluciones: [
                "Significa que los datos están relativamente próximos a la media."
            ]
        },

        "desviacion estandar": {
            titulo: "Desviación estándar",

            respuesta: "La desviación estándar mide cuánto se alejan, en promedio, los datos respecto de la media.",

            preguntas: [
                "¿Qué mide la desviación estándar?",
                "¿Qué significa una desviación estándar pequeña?"
            ],

            ejercicios: [
                "Explica qué significa que un conjunto de datos tenga una desviación estándar pequeña."
            ],

            soluciones: [
                "Significa que los datos están más concentrados alrededor de la media."
            ]
        },

        "graficos estadisticos": {
            titulo: "Gráficos estadísticos",

            respuesta: "Los gráficos estadísticos permiten representar datos de manera visual para facilitar su análisis e interpretación.",

            tipos: [
                "Gráfico de barras.",
                "Gráfico circular.",
                "Histograma.",
                "Gráfico lineal."
            ],

            preguntas: [
                "¿Para qué sirven los gráficos estadísticos?",
                "¿Qué tipos de gráficos existen?",
                "¿Qué información podemos obtener de ellos?"
            ],

            ejercicios: [
                "Menciona cuatro tipos de gráficos estadísticos."
            ],

            soluciones: [
                "Gráfico de barras, gráfico circular, histograma y gráfico lineal."
            ]
        },

        "histogramas": {
            titulo: "Histogramas",

            respuesta: "Un histograma representa la distribución de datos cuantitativos agrupados en intervalos.",

            ejemplo: "Puede utilizarse para representar las edades de un grupo de estudiantes mediante intervalos.",

            preguntas: [
                "¿Qué es un histograma?",
                "¿Qué tipo de datos representa?",
                "¿Qué diferencia existe entre un histograma y un gráfico de barras?"
            ],

            ejercicios: [
                "Explica para qué puede utilizarse un histograma."
            ],

            soluciones: [
                "Para representar la distribución de datos cuantitativos agrupados en intervalos."
            ]
        },

        "probabilidad": {
            titulo: "Probabilidad",

            respuesta: "La probabilidad mide qué tan posible es que ocurra un evento.",

            ejemplo: "Al lanzar una moneda equilibrada, la probabilidad de obtener cara es 1/2.",

            preguntas: [
                "¿Qué es la probabilidad?",
                "¿Qué valores puede tomar una probabilidad?",
                "¿Qué significa que un evento tenga probabilidad 0?"
            ],

            ejercicios: [
                "Al lanzar un dado, ¿cuál es la probabilidad de obtener un número par?"
            ],

            soluciones: [
                "3/6 = 1/2."
            ]
        },

        "espacio muestral": {
            titulo: "Espacio muestral",

            respuesta: "El espacio muestral es el conjunto de todos los resultados posibles de un experimento aleatorio.",

            ejemplo: "Al lanzar un dado, el espacio muestral es {1, 2, 3, 4, 5, 6}.",

            preguntas: [
                "¿Qué es el espacio muestral?",
                "¿Qué elementos contiene?"
            ],

            ejercicios: [
                "Escribe el espacio muestral al lanzar una moneda."
            ],

            soluciones: [
                "{cara, sello}."
            ]
        },

        "sucesos": {
            titulo: "Sucesos o eventos",

            respuesta: "Un suceso es un conjunto de resultados posibles dentro de un espacio muestral.",

            ejemplo: "Al lanzar un dado, obtener un número par es el suceso {2, 4, 6}.",

            preguntas: [
                "¿Qué es un suceso?",
                "¿Cómo se representa un suceso?"
            ],

            ejercicios: [
                "En el lanzamiento de un dado, representa el suceso 'obtener un número mayor que 4'."
            ],

            soluciones: [
                "{5, 6}."
            ]
        },

        "probabilidad de eventos": {
            titulo: "Probabilidad de eventos",

            respuesta: "La probabilidad de un evento permite determinar qué tan posible es que ocurra un resultado o conjunto de resultados.",

            ejemplo: "Al lanzar un dado, la probabilidad de obtener un número mayor que 4 es 2/6 = 1/3.",

            preguntas: [
                "¿Cómo se calcula la probabilidad de un evento?",
                "¿Qué diferencia existe entre un evento seguro y uno imposible?"
            ],

            ejercicios: [
                "Al lanzar un dado, calcula la probabilidad de obtener un número menor que 3."
            ],

            soluciones: [
                "2/6 = 1/3."
            ]
        },

        "probabilidad compuesta": {
            titulo: "Probabilidad compuesta",

            respuesta: "La probabilidad compuesta estudia situaciones en las que intervienen dos o más eventos.",

            preguntas: [
                "¿Qué es una probabilidad compuesta?",
                "¿Qué tipos de eventos pueden combinarse?"
            ],

            ejercicios: [
                "Explica qué significa estudiar dos eventos dentro de un mismo experimento."
            ],

            soluciones: [
                "Significa analizar la ocurrencia conjunta o relacionada de dos eventos."
            ]
        },

        "eventos independientes": {
            titulo: "Eventos independientes",

            respuesta: "Dos eventos son independientes cuando la ocurrencia de uno no modifica la probabilidad de que ocurra el otro.",

            ejemplo: "Lanzar una moneda dos veces son experimentos independientes.",

            preguntas: [
                "¿Qué son eventos independientes?",
                "¿La primera tirada de una moneda afecta la segunda?"
            ],

            ejercicios: [
                "Indica si dos lanzamientos consecutivos de una moneda son independientes."
            ],

            soluciones: [
                "Sí, son eventos independientes."
            ]
        },

        "combinatoria": {
            titulo: "Combinatoria",

            respuesta: "La combinatoria estudia las diferentes formas de organizar, seleccionar o agrupar elementos.",

            tipos: [
                "Permutaciones.",
                "Variaciones.",
                "Combinaciones."
            ],

            preguntas: [
                "¿Qué estudia la combinatoria?",
                "¿Qué son las permutaciones?",
                "¿Qué son las combinaciones?"
            ],

            ejercicios: [
                "Menciona tres conceptos importantes de la combinatoria."
            ],

            soluciones: [
                "Permutaciones, variaciones y combinaciones."
            ]
        },

        "permutaciones": {
            titulo: "Permutaciones",

            respuesta: "Las permutaciones permiten determinar de cuántas formas se pueden ordenar determinados elementos cuando el orden es importante.",

            ejemplo: "Las letras A, B y C pueden ordenarse de diferentes maneras.",

            preguntas: [
                "¿Qué es una permutación?",
                "¿Importa el orden en una permutación?"
            ],

            ejercicios: [
                "¿Cuántas formas diferentes existen para ordenar las letras A, B y C?"
            ],

            soluciones: [
                "6 formas."
            ]
        },

        "combinaciones": {
            titulo: "Combinaciones",

            respuesta: "Las combinaciones permiten seleccionar elementos de un conjunto cuando el orden no es importante.",

            ejemplo: "Elegir 2 estudiantes de un grupo para formar un equipo es un problema de combinación cuando el orden no importa.",

            preguntas: [
                "¿Qué es una combinación?",
                "¿Importa el orden en una combinación?"
            ],

            ejercicios: [
                "Explica la diferencia principal entre una permutación y una combinación."
            ],

            soluciones: [
                "En la permutación el orden importa; en la combinación el orden no importa."
            ]
        },

        "interpretacion de datos": {
            titulo: "Interpretación de datos",

            respuesta: "Interpretar datos consiste en analizar tablas, gráficos y medidas estadísticas para obtener conclusiones.",

            preguntas: [
                "¿Qué significa interpretar datos?",
                "¿Qué información debemos observar?",
                "¿Cómo podemos obtener conclusiones?"
            ],

            ejercicios: [
                "Explica por qué es importante analizar los datos antes de sacar una conclusión."
            ],

            soluciones: [
                "Porque permite evitar interpretaciones incorrectas y obtener conclusiones basadas en la información disponible."
            ]
        },

        "analisis estadistico": {
            titulo: "Análisis estadístico",

            respuesta: "El análisis estadístico consiste en organizar, representar, analizar e interpretar datos para obtener información útil.",

            etapas: [
                "Recolección de datos.",
                "Organización.",
                "Representación.",
                "Análisis.",
                "Interpretación."
            ],

            preguntas: [
                "¿Qué etapas tiene un análisis estadístico?",
                "¿Para qué sirve analizar datos?"
            ],

            ejercicios: [
                "Ordena las etapas básicas de un análisis estadístico."
            ],

            soluciones: [
                "Recolección, organización, representación, análisis e interpretación."
            ]
        }

    }

};