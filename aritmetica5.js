const aritmetica5 = {

    grado: "5° de Secundaria",

    temas: {

        "numeros reales": {
            titulo: "Números reales",

            respuesta: "Los números reales incluyen los números racionales e irracionales y pueden representarse en la recta numérica.",

            ejemplo: "Son números reales: -5, 0, 3/4, √2 y π.",

            preguntas: [
                "¿Qué son los números reales?",
                "¿Qué diferencia existe entre números racionales e irracionales?",
                "¿Cómo se representan los números reales?"
            ],

            ejercicios: [
                "Clasifica los números -4, 3/5, √2 y π."
            ],

            soluciones: [
                "-4 y 3/5 son racionales; √2 y π son irracionales."
            ]
        },

        "razones y proporciones": {
            titulo: "Razones y proporciones",

            respuesta: "Una razón compara dos cantidades mediante una división. Una proporción establece una igualdad entre dos razones.",

            ejemplo: "3/5 = 6/10 es una proporción.",

            preguntas: [
                "¿Qué es una razón?",
                "¿Qué es una proporción?",
                "¿Cómo se verifica una proporción?"
            ],

            ejercicios: [
                "Encuentra x: 4/7 = x/21."
            ],

            soluciones: [
                "x = 12."
            ]
        },

        "regla de tres": {
            titulo: "Regla de tres",

            respuesta: "La regla de tres permite calcular un valor desconocido cuando existe una relación proporcional entre cantidades.",

            ejemplo: "Si 5 cuadernos cuestan S/30, entonces 10 cuadernos cuestan S/60.",

            preguntas: [
                "¿Para qué sirve la regla de tres?",
                "¿Qué datos necesitamos para aplicarla?",
                "¿Qué diferencia existe entre regla de tres directa e inversa?"
            ],

            ejercicios: [
                "Si 8 trabajadores realizan una obra en 15 días, ¿cuántos días tardarán 12 trabajadores si trabajan al mismo ritmo?"
            ],

            soluciones: [
                "10 días."
            ]
        },

        "porcentajes": {
            titulo: "Porcentajes",

            respuesta: "Un porcentaje representa una cantidad como una parte de cien. Se utiliza en descuentos, aumentos, estadísticas y situaciones financieras.",

            ejemplo: "El 20% de 350 es 70.",

            preguntas: [
                "¿Qué es un porcentaje?",
                "¿Cómo se calcula un porcentaje?",
                "¿Dónde se utilizan los porcentajes?"
            ],

            ejercicios: [
                "Calcula el 35% de 800."
            ],

            soluciones: [
                "280."
            ]
        },

        "aumentos y descuentos sucesivos": {
            titulo: "Aumentos y descuentos sucesivos",

            respuesta: "Los aumentos y descuentos sucesivos se aplican uno después de otro sobre el nuevo valor obtenido.",

            ejemplo: "Un producto de S/100 con dos descuentos sucesivos del 10% termina costando S/81.",

            preguntas: [
                "¿Qué son los descuentos sucesivos?",
                "¿Por qué no se suman directamente los porcentajes?",
                "¿Cómo se calcula el precio final?"
            ],

            ejercicios: [
                "Un producto cuesta S/800 y recibe descuentos sucesivos del 10% y 20%. ¿Cuál es su precio final?"
            ],

            soluciones: [
                "S/576."
            ]
        },

        "interes simple": {
            titulo: "Interés simple",

            respuesta: "El interés simple se calcula siempre sobre el capital inicial.",

            ejemplo: "S/2000 al 10% anual durante 2 años produce S/400 de interés.",

            preguntas: [
                "¿Qué es el interés simple?",
                "¿Qué es el capital?",
                "¿Qué es la tasa de interés?"
            ],

            ejercicios: [
                "Calcula el interés generado por S/3000 al 8% anual durante 2 años."
            ],

            soluciones: [
                "S/480."
            ]
        },

        "interes compuesto": {
            titulo: "Interés compuesto",

            respuesta: "En el interés compuesto, los intereses obtenidos se incorporan al capital y también generan nuevos intereses.",

            ejemplo: "Si un capital aumenta cada período por los intereses acumulados, estamos ante interés compuesto.",

            preguntas: [
                "¿Qué es el interés compuesto?",
                "¿En qué se diferencia del interés simple?",
                "¿Por qué el capital aumenta más rápidamente?"
            ],

            ejercicios: [
                "Explica la diferencia entre interés simple e interés compuesto."
            ],

            soluciones: [
                "En el interés simple los intereses se calculan sobre el capital inicial; en el compuesto los intereses acumulados también generan intereses."
            ]
        },

        "sucesiones numericas": {
            titulo: "Sucesiones numéricas",

            respuesta: "Una sucesión es una lista ordenada de números que sigue una determinada regla.",

            ejemplo: "2, 5, 8, 11, 14... aumenta de 3 en 3.",

            preguntas: [
                "¿Qué es una sucesión?",
                "¿Cómo se identifica su patrón?",
                "¿Qué es un término de una sucesión?"
            ],

            ejercicios: [
                "Encuentra los siguientes dos términos: 7, 12, 17, 22..."
            ],

            soluciones: [
                "27 y 32."
            ]
        },

        "progresiones aritmeticas": {
            titulo: "Progresiones aritméticas",

            respuesta: "Una progresión aritmética es una sucesión en la que la diferencia entre dos términos consecutivos es constante.",

            ejemplo: "4, 9, 14, 19... tiene diferencia común 5.",

            preguntas: [
                "¿Qué es una progresión aritmética?",
                "¿Qué es la diferencia común?",
                "¿Cómo encontramos un término de la progresión?"
            ],

            ejercicios: [
                "Encuentra el décimo término de 3, 7, 11, 15..."
            ],

            soluciones: [
                "39."
            ]
        },

        "progresiones geometricas": {
            titulo: "Progresiones geométricas",

            respuesta: "Una progresión geométrica es una sucesión en la que cada término se obtiene multiplicando el anterior por una razón constante.",

            ejemplo: "2, 6, 18, 54... tiene razón 3.",

            preguntas: [
                "¿Qué es una progresión geométrica?",
                "¿Qué es la razón?",
                "¿Cómo se obtiene el siguiente término?"
            ],

            ejercicios: [
                "Encuentra el sexto término de 2, 4, 8, 16..."
            ],

            soluciones: [
                "64."
            ]
        },

        "promedios": {
            titulo: "Promedios",

            respuesta: "Los promedios permiten representar un conjunto de datos mediante un valor central o representativo.",

            ejemplo: "El promedio de 10, 14 y 18 es 14.",

            preguntas: [
                "¿Qué es un promedio?",
                "¿Cómo se calcula la media aritmética?",
                "¿Para qué sirven los promedios?"
            ],

            ejercicios: [
                "Calcula el promedio de 12, 15, 18, 20 y 25."
            ],

            soluciones: [
                "18."
            ]
        },

        "fracciones": {
            titulo: "Operaciones con fracciones",

            respuesta: "Las fracciones representan partes de una unidad y permiten realizar operaciones con cantidades racionales.",

            ejemplo: "1/2 + 1/4 = 3/4.",

            preguntas: [
                "¿Qué representa una fracción?",
                "¿Cómo se suman fracciones con diferente denominador?",
                "¿Cómo se multiplican fracciones?"
            ],

            ejercicios: [
                "Calcula: 3/4 + 2/5.",
                "Calcula: 5/6 × 3/10."
            ],

            soluciones: [
                "23/20.",
                "1/4."
            ]
        },

        "potenciacion": {
            titulo: "Potenciación",

            respuesta: "La potenciación representa una multiplicación repetida de una misma cantidad.",

            ejemplo: "2⁵ = 32.",

            preguntas: [
                "¿Qué es la base?",
                "¿Qué es el exponente?",
                "¿Qué propiedades tiene la potenciación?"
            ],

            ejercicios: [
                "Calcula 3⁴.",
                "Simplifica 5³ × 5²."
            ],

            soluciones: [
                "81.",
                "5⁵ = 3125."
            ]
        },

        "radicacion": {
            titulo: "Radicación",

            respuesta: "La radicación es una operación inversa de la potenciación.",

            ejemplo: "√144 = 12 porque 12² = 144.",

            preguntas: [
                "¿Qué es la radicación?",
                "¿Qué es el radicando?",
                "¿Qué relación existe entre potenciación y radicación?"
            ],

            ejercicios: [
                "Calcula √225.",
                "Calcula ∛216."
            ],

            soluciones: [
                "15.",
                "6."
            ]
        },

        "magnitudes proporcionales": {
            titulo: "Magnitudes proporcionales",

            respuesta: "Dos magnitudes son directamente proporcionales cuando aumentan o disminuyen en la misma proporción. Son inversamente proporcionales cuando una aumenta mientras la otra disminuye proporcionalmente.",

            ejemplo: "Si el precio unitario permanece constante, el costo total aumenta proporcionalmente a la cantidad comprada.",

            preguntas: [
                "¿Qué es una magnitud directamente proporcional?",
                "¿Qué es una magnitud inversamente proporcional?",
                "¿Cómo podemos reconocerlas?"
            ],

            ejercicios: [
                "Si 4 libros cuestan S/80, ¿cuánto cuestan 7 libros al mismo precio unitario?"
            ],

            soluciones: [
                "S/140."
            ]
        },

        "reparto proporcional": {
            titulo: "Reparto proporcional",

            respuesta: "El reparto proporcional consiste en distribuir una cantidad de acuerdo con determinadas proporciones.",

            ejemplo: "S/600 repartidos en proporción 1:2:3 producen S/100, S/200 y S/300.",

            preguntas: [
                "¿Qué es un reparto proporcional?",
                "¿Cómo se determina la parte que corresponde a cada persona?"
            ],

            ejercicios: [
                "Reparte S/900 en la proporción 2:3:4."
            ],

            soluciones: [
                "S/200, S/300 y S/400."
            ]
        },

        "conjuntos numericos": {
            titulo: "Conjuntos numéricos",

            respuesta: "Los conjuntos numéricos permiten clasificar los números en naturales, enteros, racionales, irracionales y reales.",

            ejemplo: "Los números naturales forman parte de los enteros, y los enteros forman parte de los racionales.",

            preguntas: [
                "¿Qué son los números naturales?",
                "¿Qué son los números enteros?",
                "¿Qué son los números racionales?",
                "¿Qué son los números irracionales?"
            ],

            ejercicios: [
                "Clasifica el número -7.",
                "Clasifica el número √3."
            ],

            soluciones: [
                "-7 es entero, racional y real.",
                "√3 es irracional y real."
            ]
        },

        "problemas de aplicacion": {
            titulo: "Problemas de aplicación",

            respuesta: "Los problemas de aplicación permiten utilizar operaciones, proporciones, porcentajes, intereses y sucesiones para resolver situaciones de la vida cotidiana.",

            ejemplo: "Calcular cuánto se debe pagar por un producto después de aplicar un descuento y posteriormente un impuesto.",

            preguntas: [
                "¿Qué datos debemos identificar?",
                "¿Qué operación debemos realizar primero?",
                "¿Cómo comprobamos la respuesta?"
            ],

            ejercicios: [
                "Un producto cuesta S/500 y tiene un descuento del 20%. ¿Cuál es el precio final?"
            ],

            soluciones: [
                "El descuento es S/100 y el precio final es S/400."
            ]
        }

    }

};