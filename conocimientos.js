// ============================================================
// EDU BOT IA - CONOCIMIENTOS GENERALES
// ============================================================

const conocimientos = {

    // ========================================================
    // INFORMACIÓN GENERAL
    // ========================================================

    general: {

        saludo: {
            titulo: "Saludo",
            respuesta:
                "¡Hola! 👋 Soy Edu BOT 🤖, tu asistente educativo. Estoy aquí para ayudarte a aprender de manera sencilla, clara y paso a paso."
        },

        ayuda: {
            titulo: "Ayuda",
            respuesta:
                "Puedo ayudarte con Matemática, Comunicación, Ciencia y Tecnología, Ciencias Sociales, Inglés y Computación. 📚"
        },

        edubot: {
            titulo: "¿Qué es Edu BOT?",
            respuesta:
                "Edu BOT es un asistente educativo que ayuda a los estudiantes a aprender mediante explicaciones, ejemplos, ejercicios y preguntas de práctica."
        },

        estudiar: {
            titulo: "¿Qué es estudiar?",
            respuesta:
                "Estudiar es aprender y comprender nuevos conocimientos mediante la lectura, la práctica, la observación, la investigación y la resolución de problemas."
        },

        aprender: {
            titulo: "¿Cómo aprender mejor?",
            respuesta:
                "Para aprender mejor puedes leer con atención, tomar apuntes, practicar ejercicios, hacer preguntas, explicar lo aprendido con tus propias palabras y repasar periódicamente."
        },

        importancia: {
            titulo: "Importancia de estudiar",
            respuesta:
                "Estudiar ayuda a desarrollar conocimientos, habilidades y capacidades que permiten comprender mejor el mundo y resolver diferentes problemas."
        }

    },


    // ========================================================
    // CURSOS
    // ========================================================

    cursos: {

        matematica: {
            nombre: "Matemática",
            icono: "📐",
            descripcion:
                "Estudia números, operaciones, aritmética, álgebra, geometría, estadística, probabilidad y resolución de problemas."
        },

        comunicacion: {
            nombre: "Comunicación",
            icono: "📖",
            descripcion:
                "Desarrolla la comprensión lectora, producción de textos, gramática, ortografía y literatura."
        },

        cyt: {
            nombre: "Ciencia y Tecnología",
            icono: "🧪",
            descripcion:
                "Estudia los seres vivos, materia, energía, cuerpo humano, Tierra, universo, ambiente, ciencia y tecnología."
        },

        sociales: {
            nombre: "Ciencias Sociales",
            icono: "🌎",
            descripcion:
                "Comprende la Historia del Perú, Historia Universal, economía y sociedad."
        },

        ingles: {
            nombre: "Inglés",
            icono: "🇬🇧",
            descripcion:
                "Permite desarrollar vocabulario, gramática, comprensión y comunicación en inglés."
        },

        computacion: {
            nombre: "Computación",
            icono: "💻",
            descripcion:
                "Estudia computadoras, tecnología, programación, internet, redes y herramientas digitales."
        }

    },


    // ========================================================
    // RESPUESTAS BÁSICAS
    // ========================================================

    respuestas: {

        gracias: {
            palabras: [
                "gracias",
                "muchas gracias",
                "te agradezco",
                "gracias bot",
                "gracias edu"
            ],

            respuesta:
                "¡De nada! 😊 Me alegra poder ayudarte. ¡Sigamos aprendiendo!"
        },

        adios: {
            palabras: [
                "adios",
                "chau",
                "hasta luego",
                "nos vemos",
                "me voy"
            ],

            respuesta:
                "¡Hasta luego! 👋😊 Sigue estudiando y aprendiendo. ¡Nos vemos!"
        },

        hola: {
            palabras: [
                "hola",
                "buenas",
                "buenos dias",
                "buenas tardes",
                "buenas noches",
                "hey",
                "holaa",
                "holaaa"
            ],

            respuesta:
                "¡Hola! 👋🤖 Soy Edu BOT. ¿Qué curso deseas aprender?"
        },

        como_estas: {
            palabras: [
                "como estas",
                "cómo estás",
                "que tal",
                "qué tal",
                "como te encuentras"
            ],

            respuesta:
                "¡Estoy muy bien! 🤖😊 Listo para ayudarte a estudiar. ¿Qué curso quieres aprender?"
        },

        quien_eres: {
            palabras: [
                "quien eres",
                "quién eres",
                "que eres",
                "qué eres"
            ],

            respuesta:
                "Soy Edu BOT 🤖, un asistente educativo creado para ayudarte a estudiar y comprender diferentes temas."
        },

        ayuda: {
            palabras: [
                "ayuda",
                "ayudame",
                "ayúdame",
                "necesito ayuda",
                "puedes ayudarme"
            ],

            respuesta:
                "¡Claro! 😊 Puedo ayudarte con Matemática, Comunicación, Ciencia y Tecnología, Ciencias Sociales, Inglés y Computación."
        }

    },


    // ========================================================
    // MOSTRAR CURSOS
    // ========================================================

    mostrarCursos: function () {

        return `
            📚 <strong>CURSOS DISPONIBLES</strong><br><br>

            📐 <strong>Matemática</strong><br>
            📖 <strong>Comunicación</strong><br>
            🧪 <strong>Ciencia y Tecnología</strong><br>
            🌎 <strong>Ciencias Sociales</strong><br>
            🇬🇧 <strong>Inglés</strong><br>
            💻 <strong>Computación</strong><br><br>

            👉 Escribe el nombre del curso para comenzar.
        `;
    },


    // ========================================================
    // NORMALIZAR TEXTO
    // ========================================================

    normalizar: function (texto) {

        if (!texto) {
            return "";
        }

        return texto
            .toString()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    },


    // ========================================================
    // BUSCAR CURSO
    // ========================================================

    buscarCurso: function (texto) {

        texto = this.normalizar(texto);

        // -----------------------------------------
        // MATEMÁTICA
        // -----------------------------------------

        if (
            texto === "mat" ||
            texto === "mate" ||
            texto.includes("matematica") ||
            texto.includes("matematicas")
        ) {
            return "Matemática";
        }


        // -----------------------------------------
        // COMUNICACIÓN
        // -----------------------------------------

        if (
            texto === "com" ||
            texto === "comu" ||
            texto.includes("comunicacion")
        ) {
            return "Comunicación";
        }


        // -----------------------------------------
        // CIENCIA Y TECNOLOGÍA
        // -----------------------------------------

        if (
            texto === "cyt" ||
            texto === "c y t" ||
            texto.includes("ciencia y tecnologia") ||
            texto === "ciencia" ||
            texto.includes("ciencias y tecnologia") ||
            texto.includes("ciencia tecnologia") ||
            texto === "tecnologia"
        ) {
            return "Ciencia y Tecnología";
        }


        // -----------------------------------------
        // CIENCIAS SOCIALES
        // -----------------------------------------

        if (
            texto === "social" ||
            texto === "sociales" ||
            texto === "cs" ||
            texto.includes("ciencias sociales")
        ) {
            return "Ciencias Sociales";
        }


        // -----------------------------------------
        // INGLÉS
        // -----------------------------------------

        if (
            texto === "ing" ||
            texto === "english" ||
            texto.includes("ingles")
        ) {
            return "Inglés";
        }


        // -----------------------------------------
        // COMPUTACIÓN
        // -----------------------------------------

        if (
            texto === "comp" ||
            texto === "computacion" ||
            texto === "informatica" ||
            texto.includes("computacion") ||
            texto.includes("informatica")
        ) {
            return "Computación";
        }


        return null;
    },


    // ========================================================
    // BUSCAR RESPUESTA GENERAL
    // ========================================================

    buscarRespuesta: function (texto) {

        texto = this.normalizar(texto);

        if (!texto) {
            return null;
        }


        // Recorremos todas las respuestas
        for (const categoria in this.respuestas) {

            const datos = this.respuestas[categoria];

            if (!datos || !Array.isArray(datos.palabras)) {
                continue;
            }

            for (const palabra of datos.palabras) {

                const palabraNormalizada =
                    this.normalizar(palabra);

                if (
                    texto === palabraNormalizada ||
                    texto.includes(palabraNormalizada)
                ) {

                    return datos.respuesta;
                }
            }
        }


        return null;
    },


    // ========================================================
    // OBTENER INFORMACIÓN DE UN CURSO
    // ========================================================

    obtenerCurso: function (curso) {

        const texto = this.normalizar(curso);

        const cursoEncontrado = this.buscarCurso(texto);

        if (!cursoEncontrado) {
            return null;
        }


        for (const clave in this.cursos) {

            const datos = this.cursos[clave];

            if (
                this.normalizar(datos.nombre) ===
                this.normalizar(cursoEncontrado)
            ) {

                return datos;
            }
        }


        return null;
    },


    // ========================================================
    // MOSTRAR INFORMACIÓN DE UN CURSO
    // ========================================================

    informacionCurso: function (curso) {

        const datos = this.obtenerCurso(curso);

        if (!datos) {
            return null;
        }

        return `
            ${datos.icono} <strong>${datos.nombre}</strong><br><br>

            ${datos.descripcion}<br><br>

            👉 Escribe el grado que deseas estudiar.
        `;
    }

};


// ============================================================
// MENSAJE DE PRUEBA
// ============================================================

console.log("✅ conocimientos.js cargado correctamente.");
console.log("📚 Cursos disponibles:", conocimientos.cursos);