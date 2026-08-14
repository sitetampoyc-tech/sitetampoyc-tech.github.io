const sociales = {

    nombre: "Ciencias Sociales",

    descripcion:
        "Área de Ciencias Sociales organizada en Historia del Perú, Historia Universal y Economía.",

    secciones: {

        historiaPeru: {
            nombre: "Historia del Perú",
            contenido: historiaPeru1
        },

        historiaUniversal: {
            nombre: "Historia Universal",
            contenido: historiaUniversal1
        },

        economia: {
            nombre: "Economía",
            contenido: economia1
        }

    },

    mostrarSecciones: function() {

        return `
📚 CIENCIAS SOCIALES

Tenemos 3 secciones:

🇵🇪 1. Historia del Perú
   Desde los primeros pobladores hasta el Perú contemporáneo.

🌎 2. Historia Universal
   Desde la Prehistoria hasta el mundo contemporáneo.

💰 3. Economía
   Conceptos económicos, mercado, dinero, producción,
   comercio, economía peruana y educación financiera.

👉 Escribe el nombre de una sección para comenzar.
        `;
    },


    buscarSeccion: function(texto) {

        texto = texto.toLowerCase().trim();

        if (
            texto.includes("historia del perú") ||
            texto.includes("historia del peru") ||
            texto.includes("historia peru") ||
            texto.includes("peru")
        ) {
            return this.secciones.historiaPeru;
        }

        if (
            texto.includes("historia universal") ||
            texto.includes("historia mundial") ||
            texto.includes("historia del mundo") ||
            texto.includes("universal")
        ) {
            return this.secciones.historiaUniversal;
        }

        if (
            texto.includes("economía") ||
            texto.includes("economia") ||
            texto.includes("económico") ||
            texto.includes("economico")
        ) {
            return this.secciones.economia;
        }

        return null;
    },


    buscarTema: function(texto) {

        texto = texto.toLowerCase().trim();

        const todasLasSecciones = [
            this.secciones.historiaPeru.contenido.temas,
            this.secciones.historiaUniversal.contenido.temas,
            this.secciones.economia.contenido.temas
        ];

        for (const seccion of todasLasSecciones) {

            for (const clave in seccion) {

                const tema = seccion[clave];

                const palabrasClave = [
                    clave,
                    tema.titulo
                ];

                for (const palabra of palabrasClave) {

                    if (
                        texto.includes(
                            palabra.toLowerCase()
                        )
                    ) {
                        return tema;
                    }

                }

            }

        }

        return null;
    }

};