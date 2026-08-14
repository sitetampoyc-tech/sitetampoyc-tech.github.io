const algebra5 = {

    grado: "5° de Secundaria",

    temas: {

        "expresiones algebraicas": {
            titulo: "Expresiones algebraicas",

            respuesta: "Una expresión algebraica combina números, variables y operaciones matemáticas.",

            ejemplo: "3x² + 5x - 7.",

            preguntas: [
                "¿Qué es una expresión algebraica?",
                "¿Qué es una variable?",
                "¿Qué es un coeficiente?",
                "¿Qué es el grado de un término?"
            ],

            ejercicios: [
                "Identifica el coeficiente y el grado del término 7x³."
            ],

            soluciones: [
                "El coeficiente es 7 y el grado es 3."
            ]
        },

        "polinomios": {
            titulo: "Polinomios",

            respuesta: "Un polinomio es una expresión algebraica formada por la suma o resta de términos algebraicos.",

            ejemplo: "P(x) = 4x³ - 2x² + 5x - 8.",

            preguntas: [
                "¿Qué es un polinomio?",
                "¿Qué es un término?",
                "¿Cómo se determina el grado de un polinomio?"
            ],

            ejercicios: [
                "Determina el grado de P(x) = 5x⁴ - 3x² + x - 9."
            ],

            soluciones: [
                "El grado del polinomio es 4."
            ]
        },

        "operaciones con polinomios": {
            titulo: "Operaciones con polinomios",

            respuesta: "Los polinomios pueden sumarse, restarse, multiplicarse y dividirse aplicando las propiedades algebraicas.",

            ejemplo: "(3x + 2) + (5x - 4) = 8x - 2.",

            preguntas: [
                "¿Cómo se suman polinomios?",
                "¿Cómo se restan polinomios?",
                "¿Cómo se multiplican polinomios?"
            ],

            ejercicios: [
                "Suma: (3x² + 2x + 1) + (5x² - x + 4).",
                "Resta: (7x² + 3x - 2) - (2x² - x + 5)."
            ],

            soluciones: [
                "8x² + x + 5.",
                "5x² + 4x - 7."
            ]
        },

        "productos notables": {
            titulo: "Productos notables",

            respuesta: "Los productos notables son identidades algebraicas que permiten desarrollar determinadas multiplicaciones de manera rápida.",

            tipos: [
                "Cuadrado de una suma.",
                "Cuadrado de una diferencia.",
                "Suma por diferencia.",
                "Cubo de una suma.",
                "Cubo de una diferencia."
            ],

            ejemplo: "(x + 4)² = x² + 8x + 16.",

            preguntas: [
                "¿Qué son los productos notables?",
                "¿Qué es el cuadrado de una suma?",
                "¿Qué es la diferencia de cuadrados?"
            ],

            ejercicios: [
                "Desarrolla: (x + 5)².",
                "Desarrolla: (x - 3)².",
                "Resuelve: (x + 7)(x - 7)."
            ],

            soluciones: [
                "x² + 10x + 25.",
                "x² - 6x + 9.",
                "x² - 49."
            ]
        },

        "factorizacion": {
            titulo: "Factorización",

            respuesta: "Factorizar consiste en expresar un polinomio como producto de factores más simples.",

            tipos: [
                "Factor común.",
                "Agrupación.",
                "Diferencia de cuadrados.",
                "Trinomio cuadrado perfecto.",
                "Trinomio de segundo grado."
            ],

            ejemplo: "6x + 12 = 6(x + 2).",

            preguntas: [
                "¿Qué significa factorizar?",
                "¿Qué es el factor común?",
                "¿Para qué sirve la factorización?"
            ],

            ejercicios: [
                "Factoriza: 10x + 20.",
                "Factoriza: x² - 36."
            ],

            soluciones: [
                "10(x + 2).",
                "(x + 6)(x - 6)."
            ]
        },

        "ecuaciones de segundo grado": {
            titulo: "Ecuaciones de segundo grado",

            respuesta: "Una ecuación de segundo grado es aquella cuyo mayor exponente de la incógnita es 2.",

            ejemplo: "x² - 7x + 12 = 0.",

            preguntas: [
                "¿Qué es una ecuación de segundo grado?",
                "¿Cuál es su forma general?",
                "¿Qué métodos pueden utilizarse para resolverla?"
            ],

            ejercicios: [
                "Resuelve: x² - 7x + 12 = 0.",
                "Resuelve: x² - 16 = 0."
            ],

            soluciones: [
                "x = 3 y x = 4.",
                "x = 4 y x = -4."
            ]
        },

        "formula general": {
            titulo: "Fórmula general",

            respuesta: "La fórmula general permite resolver ecuaciones cuadráticas incluso cuando no pueden factorizarse fácilmente.",

            ejemplo: "Puede utilizarse para resolver ecuaciones de la forma ax² + bx + c = 0.",

            preguntas: [
                "¿Para qué sirve la fórmula general?",
                "¿Qué valores necesitamos identificar?",
                "¿Cuándo resulta útil?"
            ],

            ejercicios: [
                "Identifica a, b y c en 3x² - 5x + 2 = 0."
            ],

            soluciones: [
                "a = 3, b = -5 y c = 2."
            ]
        },

        "discriminante": {
            titulo: "Discriminante",

            respuesta: "El discriminante permite determinar la cantidad y el tipo de soluciones de una ecuación de segundo grado.",

            ejemplo: "Si el discriminante es positivo, existen dos soluciones reales diferentes.",

            preguntas: [
                "¿Qué es el discriminante?",
                "¿Qué ocurre si es positivo?",
                "¿Qué ocurre si es cero?",
                "¿Qué ocurre si es negativo?"
            ],

            ejercicios: [
                "Calcula el discriminante de x² - 5x + 6 = 0."
            ],

            soluciones: [
                "El discriminante es 1."
            ]
        },

        "sistemas de ecuaciones": {
            titulo: "Sistemas de ecuaciones",

            respuesta: "Un sistema de ecuaciones está formado por dos o más ecuaciones que deben cumplirse simultáneamente.",

            metodos: [
                "Sustitución.",
                "Igualación.",
                "Reducción.",
                "Método gráfico."
            ],

            ejemplo: "x + y = 10 y x - y = 2 tienen como solución x = 6, y = 4.",

            preguntas: [
                "¿Qué es un sistema de ecuaciones?",
                "¿Qué métodos pueden utilizarse?",
                "¿Qué significa encontrar la solución?"
            ],

            ejercicios: [
                "Resuelve: x + y = 14 y x - y = 4."
            ],

            soluciones: [
                "x = 9, y = 5."
            ]
        },

        "inecuaciones": {
            titulo: "Inecuaciones",

            respuesta: "Una inecuación es una desigualdad matemática que contiene una o más incógnitas.",

            ejemplo: "2x + 4 > 10 tiene como solución x > 3.",

            preguntas: [
                "¿Qué es una inecuación?",
                "¿Qué símbolos se utilizan?",
                "¿Qué diferencia existe entre una ecuación y una inecuación?"
            ],

            ejercicios: [
                "Resuelve: 3x + 2 > 14.",
                "Resuelve: 5x - 3 ≤ 17."
            ],

            soluciones: [
                "x > 4.",
                "x ≤ 4."
            ]
        },

        "funciones": {
            titulo: "Funciones",

            respuesta: "Una función relaciona cada valor de una variable independiente con un único valor de una variable dependiente.",

            ejemplo: "Si f(x) = 2x + 3, entonces f(4) = 11.",

            preguntas: [
                "¿Qué es una función?",
                "¿Qué es la variable independiente?",
                "¿Qué es la variable dependiente?"
            ],

            ejercicios: [
                "Calcula f(5) si f(x) = 3x - 2."
            ],

            soluciones: [
                "f(5) = 13."
            ]
        },

        "funcion lineal": {
            titulo: "Función lineal",

            respuesta: "Una función lineal representa una relación de primer grado y su gráfica es una recta.",

            ejemplo: "f(x) = 3x + 2.",

            preguntas: [
                "¿Qué es una función lineal?",
                "¿Qué representa la pendiente?",
                "¿Cómo se representa gráficamente?"
            ],

            ejercicios: [
                "Calcula f(6) si f(x) = 2x + 5."
            ],

            soluciones: [
                "f(6) = 17."
            ]
        },

        "funcion cuadratica": {
            titulo: "Función cuadrática",

            respuesta: "Una función cuadrática contiene una variable elevada al cuadrado y su gráfica tiene forma de parábola.",

            ejemplo: "f(x) = x² - 4x + 3.",

            preguntas: [
                "¿Qué es una función cuadrática?",
                "¿Qué forma tiene su gráfica?",
                "¿Qué relación tiene con las ecuaciones de segundo grado?"
            ],

            ejercicios: [
                "Calcula f(3) si f(x) = x² + 2x - 3."
            ],

            soluciones: [
                "f(3) = 12."
            ]
        },

        "sucesiones": {
            titulo: "Sucesiones",

            respuesta: "Una sucesión es una lista ordenada de números que sigue una regla determinada.",

            ejemplo: "2, 6, 10, 14... aumenta de 4 en 4.",

            preguntas: [
                "¿Qué es una sucesión?",
                "¿Qué es el término general?",
                "¿Cómo identificamos el patrón?"
            ],

            ejercicios: [
                "Encuentra los siguientes dos términos: 5, 9, 13, 17..."
            ],

            soluciones: [
                "21 y 25."
            ]
        },

        "progresiones": {
            titulo: "Progresiones",

            respuesta: "Las progresiones son sucesiones que siguen una regla constante. Las principales son las progresiones aritméticas y geométricas.",

            ejemplo: "2, 5, 8, 11... es una progresión aritmética.",

            preguntas: [
                "¿Qué es una progresión?",
                "¿Qué diferencia existe entre una progresión aritmética y una geométrica?"
            ],

            ejercicios: [
                "Identifica si 3, 6, 9, 12... es una progresión aritmética o geométrica."
            ],

            soluciones: [
                "Es una progresión aritmética porque aumenta de 3 en 3."
            ]
        },

        "logaritmos": {
            titulo: "Logaritmos",

            respuesta: "El logaritmo indica el exponente al que debemos elevar una base para obtener un número determinado.",

            ejemplo: "log₂(8) = 3 porque 2³ = 8.",

            preguntas: [
                "¿Qué es un logaritmo?",
                "¿Qué relación existe entre logaritmos y potencias?",
                "¿Qué es la base de un logaritmo?"
            ],

            ejercicios: [
                "Calcula log₂(16).",
                "Calcula log₃(27)."
            ],

            soluciones: [
                "4.",
                "3."
            ]
        },

        "propiedades de los logaritmos": {
            titulo: "Propiedades de los logaritmos",

            respuesta: "Las propiedades de los logaritmos permiten transformar y simplificar expresiones logarítmicas.",

            propiedades: [
                "Logaritmo de un producto.",
                "Logaritmo de un cociente.",
                "Logaritmo de una potencia.",
                "Cambio de base."
            ],

            preguntas: [
                "¿Para qué sirven las propiedades de los logaritmos?",
                "¿Qué ocurre con el logaritmo de un producto?",
                "¿Qué ocurre con el logaritmo de una potencia?"
            ],

            ejercicios: [
                "Explica qué propiedad permite transformar el logaritmo de una potencia."
            ],

            soluciones: [
                "Permite convertir el exponente en un factor que multiplica al logaritmo."
            ]
        },

        "ecuaciones exponenciales": {
            titulo: "Ecuaciones exponenciales",

            respuesta: "Son ecuaciones en las que la incógnita aparece en el exponente.",

            ejemplo: "2ˣ = 16 tiene como solución x = 4.",

            preguntas: [
                "¿Qué es una ecuación exponencial?",
                "¿Cómo podemos resolverla?",
                "¿Qué relación tiene con los logaritmos?"
            ],

            ejercicios: [
                "Resuelve: 3ˣ = 81."
            ],

            soluciones: [
                "x = 4."
            ]
        },

        "ecuaciones logaritmicas": {
            titulo: "Ecuaciones logarítmicas",

            respuesta: "Son ecuaciones en las que la incógnita aparece dentro de un logaritmo.",

            ejemplo: "log₂(x) = 3 tiene como solución x = 8.",

            preguntas: [
                "¿Qué es una ecuación logarítmica?",
                "¿Qué relación existe entre logaritmos y exponentes?"
            ],

            ejercicios: [
                "Resuelve: log₃(x) = 4."
            ],

            soluciones: [
                "x = 81."
            ]
        },

        "problemas algebraicos": {
            titulo: "Problemas algebraicos",

            respuesta: "Los problemas algebraicos permiten representar situaciones reales mediante variables, ecuaciones, funciones e inecuaciones.",

            ejemplo: "La suma de dos números es 50 y uno es 10 mayor que el otro.",

            preguntas: [
                "¿Cómo identificamos la incógnita?",
                "¿Cómo planteamos una ecuación?",
                "¿Cómo comprobamos la respuesta?"
            ],

            ejercicios: [
                "La suma de dos números es 50 y uno supera al otro en 10. Encuentra ambos números."
            ],

            soluciones: [
                "Los números son 20 y 30."
            ]
        }

    }

};