const geometria5 = {

    grado: "5° de Secundaria",

    temas: {

        "angulos": {
            titulo: "Ángulos",

            respuesta: "Un ángulo es la abertura formada por dos semirrectas que tienen un mismo origen llamado vértice.",

            ejemplo: "Un ángulo de 90° es un ángulo recto.",

            preguntas: [
                "¿Qué es un ángulo?",
                "¿Qué es el vértice?",
                "¿Cómo se clasifican los ángulos?"
            ],

            ejercicios: [
                "Clasifica los ángulos de 30°, 90° y 120°."
            ],

            soluciones: [
                "30° es agudo, 90° es recto y 120° es obtuso."
            ]
        },

        "triangulos": {
            titulo: "Triángulos",

            respuesta: "Un triángulo es un polígono de tres lados, tres vértices y tres ángulos. La suma de sus ángulos interiores es 180°.",

            ejemplo: "Un triángulo con lados 5 cm, 5 cm y 8 cm es isósceles.",

            preguntas: [
                "¿Qué es un triángulo?",
                "¿Cuánto suman sus ángulos interiores?",
                "¿Cómo se clasifican según sus lados?"
            ],

            ejercicios: [
                "Calcula el tercer ángulo de un triángulo cuyos otros ángulos son 55° y 65°."
            ],

            soluciones: [
                "60°."
            ]
        },

        "congruencia de triangulos": {
            titulo: "Congruencia de triángulos",

            respuesta: "Dos triángulos son congruentes cuando tienen la misma forma y el mismo tamaño. Sus lados y ángulos correspondientes son iguales.",

            criterios: [
                "Lado-Lado-Lado (LLL).",
                "Lado-Ángulo-Lado (LAL).",
                "Ángulo-Lado-Ángulo (ALA)."
            ],

            preguntas: [
                "¿Qué significa que dos triángulos sean congruentes?",
                "¿Qué criterios permiten demostrar la congruencia?",
                "¿Qué ocurre con sus lados correspondientes?"
            ],

            ejercicios: [
                "Menciona tres criterios de congruencia de triángulos."
            ],

            soluciones: [
                "LLL, LAL y ALA."
            ]
        },

        "semejanza de triangulos": {
            titulo: "Semejanza de triángulos",

            respuesta: "Dos triángulos son semejantes cuando tienen la misma forma. Sus ángulos correspondientes son iguales y sus lados correspondientes son proporcionales.",

            ejemplo: "Los triángulos de lados 3, 4, 5 y 6, 8, 10 son semejantes.",

            preguntas: [
                "¿Qué significa que dos triángulos sean semejantes?",
                "¿Qué relación existe entre sus lados?",
                "¿Qué ocurre con sus ángulos correspondientes?"
            ],

            ejercicios: [
                "Si dos lados correspondientes miden 5 cm y 15 cm, ¿cuál es la razón de semejanza?"
            ],

            soluciones: [
                "3."
            ]
        },

        "teorema de pitagoras": {
            titulo: "Teorema de Pitágoras",

            respuesta: "En un triángulo rectángulo existe una relación entre los cuadrados de sus catetos y el cuadrado de su hipotenusa.",

            ejemplo: "Si los catetos miden 6 cm y 8 cm, la hipotenusa mide 10 cm.",

            preguntas: [
                "¿En qué tipo de triángulo se aplica?",
                "¿Qué es la hipotenusa?",
                "¿Qué son los catetos?"
            ],

            ejercicios: [
                "Calcula la hipotenusa de un triángulo rectángulo cuyos catetos miden 9 cm y 12 cm."
            ],

            soluciones: [
                "15 cm."
            ]
        },

        "poligonos": {
            titulo: "Polígonos",

            respuesta: "Los polígonos son figuras geométricas planas cerradas formadas por segmentos de recta.",

            ejemplo: "Triángulo, cuadrado, pentágono, hexágono y octágono son polígonos.",

            preguntas: [
                "¿Qué es un polígono?",
                "¿Qué es un polígono regular?",
                "¿Cómo se clasifican según el número de lados?"
            ],

            ejercicios: [
                "¿Cuántos lados tiene un decágono?",
                "¿Cuántos lados tiene un dodecágono?"
            ],

            soluciones: [
                "10 lados.",
                "12 lados."
            ]
        },

        "cuadrilateros": {
            titulo: "Cuadriláteros",

            respuesta: "Los cuadriláteros son polígonos que tienen cuatro lados, cuatro vértices y cuatro ángulos.",

            tipos: [
                "Cuadrado.",
                "Rectángulo.",
                "Rombo.",
                "Romboide.",
                "Trapecio."
            ],

            preguntas: [
                "¿Qué es un cuadrilátero?",
                "¿Cuánto suman sus ángulos interiores?",
                "¿Qué tipos de cuadriláteros existen?"
            ],

            ejercicios: [
                "¿Cuánto suman los ángulos interiores de un cuadrilátero?"
            ],

            soluciones: [
                "360°."
            ]
        },

        "areas de figuras planas": {
            titulo: "Áreas de figuras planas",

            respuesta: "El área representa la superficie que ocupa una figura geométrica plana.",

            ejemplo: "El área de un rectángulo de 8 cm por 5 cm es 40 cm².",

            preguntas: [
                "¿Qué es el área?",
                "¿En qué unidades se mide?",
                "¿Cómo se calcula el área de un rectángulo?"
            ],

            ejercicios: [
                "Calcula el área de un rectángulo de 12 cm de largo y 7 cm de ancho."
            ],

            soluciones: [
                "84 cm²."
            ]
        },

        "area de triangulos": {
            titulo: "Área de triángulos",

            respuesta: "El área de un triángulo depende de la medida de su base y de su altura.",

            ejemplo: "Un triángulo de base 10 cm y altura 8 cm tiene un área de 40 cm².",

            preguntas: [
                "¿Qué datos necesitamos para calcular el área?",
                "¿Qué representa la altura?"
            ],

            ejercicios: [
                "Calcula el área de un triángulo de base 16 cm y altura 9 cm."
            ],

            soluciones: [
                "72 cm²."
            ]
        },

        "circunferencia": {
            titulo: "Circunferencia",

            respuesta: "La circunferencia es una línea curva cerrada cuyos puntos se encuentran a la misma distancia de un punto llamado centro.",

            ejemplo: "La distancia desde el centro hasta cualquier punto de la circunferencia es el radio.",

            preguntas: [
                "¿Qué es una circunferencia?",
                "¿Qué es el radio?",
                "¿Qué es el diámetro?"
            ],

            ejercicios: [
                "Si el radio mide 9 cm, ¿cuánto mide el diámetro?"
            ],

            soluciones: [
                "18 cm."
            ]
        },

        "longitud de la circunferencia": {
            titulo: "Longitud de la circunferencia",

            respuesta: "La longitud de una circunferencia representa la distancia alrededor de ella.",

            ejemplo: "Una circunferencia de radio 5 cm tiene una longitud aproximada de 31,4 cm usando π = 3,14.",

            preguntas: [
                "¿Qué representa la longitud de una circunferencia?",
                "¿Qué relación existe entre radio y diámetro?"
            ],

            ejercicios: [
                "Calcula la longitud de una circunferencia de radio 7 cm usando π = 3,14."
            ],

            soluciones: [
                "43,96 cm."
            ]
        },

        "area del circulo": {
            titulo: "Área del círculo",

            respuesta: "El área del círculo representa la superficie interior limitada por una circunferencia.",

            ejemplo: "Un círculo de radio 5 cm tiene un área aproximada de 78,5 cm² usando π = 3,14.",

            preguntas: [
                "¿Qué diferencia existe entre círculo y circunferencia?",
                "¿De qué depende el área del círculo?"
            ],

            ejercicios: [
                "Calcula el área de un círculo de radio 10 cm usando π = 3,14."
            ],

            soluciones: [
                "314 cm²."
            ]
        },

        "prismas": {
            titulo: "Prismas",

            respuesta: "Un prisma es un sólido geométrico que tiene dos bases iguales y paralelas y caras laterales.",

            ejemplo: "Una caja rectangular puede representarse como un prisma rectangular.",

            preguntas: [
                "¿Qué es un prisma?",
                "¿Cuántas bases tiene?",
                "¿Qué forma tienen sus caras laterales?"
            ],

            ejercicios: [
                "Calcula el volumen de un prisma rectangular de 8 cm de largo, 5 cm de ancho y 4 cm de alto."
            ],

            soluciones: [
                "160 cm³."
            ]
        },

        "piramides": {
            titulo: "Pirámides",

            respuesta: "Una pirámide es un sólido geométrico que tiene una base y caras laterales triangulares que se unen en un vértice.",

            ejemplo: "Una pirámide de base cuadrada tiene cuatro caras laterales triangulares.",

            preguntas: [
                "¿Qué es una pirámide?",
                "¿Cuántas bases tiene?",
                "¿Dónde se unen sus caras laterales?"
            ],

            ejercicios: [
                "¿Cuántas caras laterales tiene una pirámide de base pentagonal?"
            ],

            soluciones: [
                "5 caras laterales."
            ]
        },

        "cilindro": {
            titulo: "Cilindro",

            respuesta: "El cilindro es un sólido que tiene dos bases circulares iguales y paralelas y una superficie lateral curva.",

            ejemplo: "Una lata de bebida tiene aproximadamente forma de cilindro.",

            preguntas: [
                "¿Cuántas bases tiene un cilindro?",
                "¿Qué forma tienen sus bases?"
            ],

            ejercicios: [
                "Calcula el volumen de un cilindro de radio 4 cm y altura 10 cm usando π = 3,14."
            ],

            soluciones: [
                "502,4 cm³."
            ]
        },

        "cono": {
            titulo: "Cono",

            respuesta: "El cono tiene una base circular y una superficie lateral que termina en un vértice.",

            ejemplo: "Un cono de helado tiene aproximadamente esta forma.",

            preguntas: [
                "¿Cuántas bases tiene un cono?",
                "¿Qué forma tiene su base?",
                "¿Qué es el vértice?"
            ],

            ejercicios: [
                "Calcula el volumen de un cono de radio 3 cm y altura 12 cm usando π = 3,14."
            ],

            soluciones: [
                "113,04 cm³."
            ]
        },

        "esfera": {
            titulo: "Esfera",

            respuesta: "Una esfera es un sólido cuyos puntos de la superficie están a la misma distancia de un punto central llamado centro.",

            ejemplo: "Una pelota puede aproximarse a una esfera.",

            preguntas: [
                "¿Qué es una esfera?",
                "¿Qué es el radio?",
                "¿Qué objetos tienen forma aproximadamente esférica?"
            ],

            ejercicios: [
                "Menciona dos objetos que tengan una forma aproximadamente esférica."
            ],

            soluciones: [
                "Una pelota y una canica."
            ]
        },

        "volumen de solidos": {
            titulo: "Volumen de sólidos",

            respuesta: "El volumen mide el espacio que ocupa un cuerpo tridimensional y se expresa en unidades cúbicas.",

            ejemplo: "Un prisma rectangular de 5 cm × 4 cm × 3 cm tiene un volumen de 60 cm³.",

            preguntas: [
                "¿Qué es el volumen?",
                "¿En qué unidades se expresa?",
                "¿Por qué es importante conocer las dimensiones del sólido?"
            ],

            ejercicios: [
                "Calcula el volumen de un cubo cuyo lado mide 6 cm."
            ],

            soluciones: [
                "216 cm³."
            ]
        },

        "area lateral y total": {
            titulo: "Área lateral y área total",

            respuesta: "El área lateral corresponde a las superficies laterales de un sólido. El área total incluye las áreas laterales y las bases.",

            ejemplo: "En un prisma, el área total se obtiene sumando el área lateral y las áreas de sus dos bases.",

            preguntas: [
                "¿Qué es el área lateral?",
                "¿Qué es el área total?",
                "¿Qué diferencia existe entre ambas?"
            ],

            ejercicios: [
                "Explica qué superficies se consideran para calcular el área total de un prisma."
            ],

            soluciones: [
                "Se consideran las caras laterales y las dos bases."
            ]
        },

        "geometria analitica": {
            titulo: "Geometría analítica",

            respuesta: "La geometría analítica estudia figuras geométricas utilizando coordenadas y expresiones algebraicas.",

            ejemplo: "El punto A(3,4) representa una ubicación en el plano cartesiano.",

            preguntas: [
                "¿Qué es la geometría analítica?",
                "¿Qué son las coordenadas?",
                "¿Qué representa un punto en el plano cartesiano?"
            ],

            ejercicios: [
                "Indica las coordenadas de un punto ubicado 5 unidades a la derecha y 3 unidades hacia arriba del origen."
            ],

            soluciones: [
                "A = (5,3)."
            ]
        },

        "distancia entre dos puntos": {
            titulo: "Distancia entre dos puntos",

            respuesta: "La distancia entre dos puntos del plano cartesiano permite conocer la longitud del segmento que los une.",

            ejemplo: "La distancia entre A(0,0) y B(3,4) es 5 unidades.",

            preguntas: [
                "¿Qué información necesitamos para calcular la distancia?",
                "¿Qué relación tiene con el teorema de Pitágoras?"
            ],

            ejercicios: [
                "Calcula la distancia entre A(0,0) y B(6,8)."
            ],

            soluciones: [
                "10 unidades."
            ]
        },

        "punto medio": {
            titulo: "Punto medio",

            respuesta: "El punto medio es el punto que se encuentra exactamente a la misma distancia de los extremos de un segmento.",

            ejemplo: "El punto medio entre A(2,4) y B(6,8) es M(4,6).",

            preguntas: [
                "¿Qué es el punto medio?",
                "¿Cómo se obtiene?"
            ],

            ejercicios: [
                "Encuentra el punto medio entre A(2,3) y B(8,7)."
            ],

            soluciones: [
                "M = (5,5)."
            ]
        },

        "recta": {
            titulo: "Recta en el plano cartesiano",

            respuesta: "Una recta puede representarse mediante una ecuación que relaciona las coordenadas x e y.",

            ejemplo: "y = 2x + 1 representa una recta.",

            preguntas: [
                "¿Qué es una recta?",
                "¿Qué representa la pendiente?",
                "¿Qué representa el punto de corte con el eje y?"
            ],

            ejercicios: [
                "En y = 4x + 3, identifica la pendiente y el término independiente."
            ],

            soluciones: [
                "Pendiente = 4 y término independiente = 3."
            ]
        },

        "transformaciones geometricas": {
            titulo: "Transformaciones geométricas",

            respuesta: "Las transformaciones geométricas modifican la posición, orientación o tamaño de una figura.",

            tipos: [
                "Traslación.",
                "Rotación.",
                "Reflexión.",
                "Homotecia."
            ],

            preguntas: [
                "¿Qué es una traslación?",
                "¿Qué es una rotación?",
                "¿Qué es una reflexión?",
                "¿Qué es una homotecia?"
            ],

            ejercicios: [
                "Menciona cuatro transformaciones geométricas."
            ],

            soluciones: [
                "Traslación, rotación, reflexión y homotecia."
            ]
        },

        "trigonometria basica": {
            titulo: "Trigonometría básica",

            respuesta: "La trigonometría estudia las relaciones entre los lados y ángulos de los triángulos, especialmente de los triángulos rectángulos.",

            razones: [
                "Seno.",
                "Coseno.",
                "Tangente."
            ],

            ejemplo: "En un triángulo rectángulo, la tangente relaciona el cateto opuesto con el cateto adyacente.",

            preguntas: [
                "¿Qué estudia la trigonometría?",
                "¿Qué es el seno?",
                "¿Qué es el coseno?",
                "¿Qué es la tangente?"
            ],

            ejercicios: [
                "Menciona las tres razones trigonométricas básicas."
            ],

            soluciones: [
                "Seno, coseno y tangente."
            ]
        },

        "razones trigonometricas": {
            titulo: "Razones trigonométricas",

            respuesta: "Las razones trigonométricas relacionan los lados de un triángulo rectángulo con respecto a uno de sus ángulos agudos.",

            preguntas: [
                "¿Qué lados intervienen en el seno?",
                "¿Qué lados intervienen en el coseno?",
                "¿Qué lados intervienen en la tangente?"
            ],

            ejercicios: [
                "En un triángulo rectángulo, identifica el cateto opuesto y el cateto adyacente respecto a un ángulo."
            ],

            soluciones: [
                "El cateto opuesto está frente al ángulo y el cateto adyacente está junto al ángulo, sin contar la hipotenusa."
            ]
        }

    }

};