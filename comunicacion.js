const comunicacion = {

    nombre: "Comunicación",

    descripcion:
        "Área de Comunicación organizada en Comprensión, Producción y Literatura.",

    secciones: {

        comprension: {
            nombre: "Comprensión",
            contenido: comprension1
        },

        produccion: {
            nombre: "Producción",
            contenido: produccion1
        },

        literatura: {
            nombre: "Literatura",
            contenido: literatura1
        }

    },


    mostrarSecciones: function() {

        return `
📚 COMUNICACIÓN

Puedes aprender mediante estas secciones:

📖 1. Comprensión
   Comprensión lectora, tipos de textos,
   ideas principales, inferencias, resumen
   y lectura crítica.

✍️ 2. Producción
   Redacción, gramática, ortografía,
   producción de textos y expresión escrita.

📚 3. Literatura
   Géneros literarios, literatura peruana,
   literatura universal, autores, obras
   y análisis literario.

👉 Escribe el nombre de una sección
para comenzar.
        `;
    },


    buscarSeccion: function(texto) {

        texto = texto.toLowerCase().trim();

        if (
            texto.includes("comprension") ||
            texto.includes("comprensión") ||
            texto.includes("lectura") ||
            texto.includes("comprension lectora") ||
            texto.includes("comprensión lectora")
        ) {
            return this.secciones.comprension;
        }


        if (
            texto.includes("produccion") ||
            texto.includes("producción") ||
            texto.includes("redaccion") ||
            texto.includes("redacción") ||
            texto.includes("gramatica") ||
            texto.includes("gramática") ||
            texto.includes("ortografia") ||
            texto.includes("ortografía")
        ) {
            return this.secciones.produccion;
        }


        if (
            texto.includes("literatura") ||
            texto.includes("literario") ||
            texto.includes("literaria") ||
            texto.includes("poesia") ||
            texto.includes("poesía") ||
            texto.includes("novela") ||
            texto.includes("cuento")
        ) {
            return this.secciones.literatura;
        }

        return null;
    },


    buscarTema: function(texto) {

        texto = texto.toLowerCase().trim();

        const secciones = [
            this.secciones.comprension.contenido,
            this.secciones.produccion.contenido,
            this.secciones.literatura.contenido
        ];


        for (const seccion of secciones) {

            if (!seccion || !seccion.temas) {
                continue;
            }

            for (const clave in seccion.temas) {

                const tema = seccion.temas[clave];

                const titulo =
                    tema.titulo
                        ? tema.titulo.toLowerCase()
                        : "";

                if (
                    texto.includes(clave.toLowerCase()) ||
                    texto.includes(titulo)
                ) {
                    return {
                        seccion: seccion.nombre,
                        tema: tema
                    };
                }
            }
        }

        return null;
    },


    obtenerTema: function(seccion, tema) {

        if (
            this.secciones[seccion] &&
            this.secciones[seccion].contenido &&
            this.secciones[seccion].contenido.temas
        ) {

            return this.secciones[
                seccion
            ].contenido.temas[tema];

        }

        return null;
    }

};


// Mensaje inicial de Comunicación
function iniciarComunicacion() {

    return `
📚 ¡Bienvenido al área de COMUNICACIÓN!

Tengo tres secciones disponibles:

📖 COMPRENSIÓN
✍️ PRODUCCIÓN
📚 LITERATURA

Puedes escribir, por ejemplo:

👉 "Comprensión"
👉 "Producción"
👉 "Literatura"

O preguntar directamente:

👉 "¿Qué es una metáfora?"
👉 "¿Qué es la idea principal?"
👉 "¿Qué es un texto argumentativo?"
👉 "¿Quién fue César Vallejo?"
👉 "¿Qué es una fábula?"
    `;
}