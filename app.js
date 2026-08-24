// ======================================================
// 🤖 EDU BOT IA — SISTEMA DE APRENDIZAJE
// Curso → Grado → Tema → Explicación → Preguntas
// ======================================================

let estado = "curso";
let cursoSeleccionado = "";
let gradoSeleccionado = "";
let nivelInglesSeleccionado = "";
let temaSeleccionado = "";
let datosTemaSeleccionado = null;

const pregunta = document.getElementById("pregunta");
const enviar = document.getElementById("enviar");
const chat = document.getElementById("chat");


// ======================================================
// 🚀 INICIO
// ======================================================

window.addEventListener("load", () => {

    console.log("🤖 Edu BOT iniciado");

});


// ======================================================
// 🖱️ BOTONES DENTRO DEL CHAT
// ======================================================

if (chat) {

    chat.addEventListener("click", function(e) {

        const gradoBtn =
            e.target.closest("[data-edubot-grado]");

        const temaBtn =
            e.target.closest("[data-edubot-tema]");

        const preguntaBtn =
            e.target.closest("[data-pregunta-sugerida]");


        // -----------------------------
        // GRADO
        // -----------------------------

        if (gradoBtn) {

            const grado =
                gradoBtn.dataset.edubotGrado;

            gradoSeleccionado = grado;

            cargarCurso();

            return;

        }


        // -----------------------------
        // TEMA
        // -----------------------------

        if (temaBtn) {

            seleccionarTema(
                temaBtn.dataset.edubotTema
            );

            return;

        }


        // -----------------------------
        // PREGUNTA SUGERIDA
        // -----------------------------

        if (preguntaBtn) {

            const input =
                document.getElementById("pregunta");

            if (!input) return;

            input.value =
                preguntaBtn.dataset.preguntaSugerida;

            input.focus();

        }

    });

}


// ======================================================
// 📤 BOTÓN ENVIAR
// ======================================================

if (enviar) {

    enviar.addEventListener("click", () => {

        responder();

    });

}


// ======================================================
// ⌨️ ENTER
// ======================================================

if (pregunta) {

    pregunta.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {

            e.preventDefault();

            responder();

        }

    });

}


// ======================================================
// 🧠 FUNCIÓN PRINCIPAL
// ======================================================

function responder() {

    if (!pregunta) return;

    const textoOriginal =
        pregunta.value.trim();

    if (!textoOriginal) return;

    const texto =
        normalizar(textoOriginal);

    mostrarUsuario(textoOriginal);

    pregunta.value = "";


    // -----------------------------
    // CURSO
    // -----------------------------

    if (estado === "curso") {

        seleccionarCurso(texto);

        return;

    }


    // -----------------------------
    // GRADO
    // -----------------------------

    if (estado === "grado") {

        const grado =
            detectarGrado(texto);

        if (!grado) {

            responderBot(`
                <div class="selector-futurista">
                    <div class="selector-badge">
                        ⚠️ GRADO
                    </div>

                    <h2>No reconocí ese grado</h2>

                    <p>
                        Selecciona uno de los grados disponibles.
                    </p>
                </div>
            `);

            mostrarGrados();

            return;

        }

        gradoSeleccionado = grado;

        cargarCurso();

        return;

    }


    // -----------------------------
    // TEMA
    // -----------------------------

    if (estado === "tema") {

        seleccionarTema(texto);

        return;

    }


    // -----------------------------
    // PREGUNTA
    // -----------------------------

    if (estado === "pregunta") {

        buscarPreguntaEnTema(texto);

        return;

    }

}


// ======================================================
// 📚 SELECCIONAR CURSO
// ======================================================

function seleccionarCurso(texto) {

    texto = normalizar(texto);


    // MATEMÁTICA

    if (
        texto === "mat" ||
        texto === "mate" ||
        texto === "matematica" ||
        texto === "matematicas"
    ) {

        iniciarCurso(
            "matematica",
            "🧮",
            "MATEMÁTICA"
        );

        return;

    }


    // COMUNICACIÓN

    if (
        texto === "com" ||
        texto === "comunicacion"
    ) {

        iniciarCurso(
            "comunicacion",
            "📖",
            "COMUNICACIÓN"
        );

        return;

    }


    // CIENCIA

    if (
        texto === "cyt" ||
        texto === "ciencia" ||
        texto.includes("ciencia y tecnologia") ||
        texto.includes("ciencia tecnologia")
    ) {

        iniciarCurso(
            "cyt",
            "🧪",
            "CIENCIA Y TECNOLOGÍA"
        );

        return;

    }


    // SOCIALES

    if (
        texto === "sociales" ||
        texto === "ciencias sociales" ||
        texto.includes("ciencias sociales")
    ) {

        iniciarCurso(
            "sociales",
            "🌎",
            "CIENCIAS SOCIALES"
        );

        return;

    }


    // INGLÉS

    if (
        texto === "ingles" ||
        texto === "inglés" ||
        texto.includes("idioma ingles")
    ) {

        iniciarCurso(
            "ingles",
            "🇬🇧",
            "INGLÉS"
        );

        return;

    }


    // COMPUTACIÓN

    if (
        texto === "computacion" ||
        texto === "computadora" ||
        texto === "informatica"
    ) {

        iniciarCurso(
            "computacion",
            "💻",
            "COMPUTACIÓN"
        );

        return;

    }


    responderBot(`
        <div class="selector-futurista">

            <div class="selector-badge">
                ❌ CURSO NO ENCONTRADO
            </div>

            <h2>Elige un curso</h2>

            <p>
                📗 Matemática<br>
                📘 Comunicación<br>
                🧪 Ciencia y Tecnología<br>
                🌎 Ciencias Sociales<br>
                🇬🇧 Inglés<br>
                💻 Computación
            </p>

        </div>
    `);

}


// ======================================================
// 🎓 INICIAR CURSO
// ======================================================

function iniciarCurso(curso, icono, nombre) {

    cursoSeleccionado = curso;

    gradoSeleccionado = "";

    nivelInglesSeleccionado = "";

    temaSeleccionado = "";

    datosTemaSeleccionado = null;

    estado = "grado";


    responderBot(`
        <div class="selector-futurista">

            <div class="selector-badge">
                ● EDU BOT IA
            </div>

            <div class="selector-icon">
                ${icono}
            </div>

            <h2>${nombre}</h2>

            <p>
                Curso seleccionado correctamente.
            </p>

            <div class="selector-linea"></div>

            <h3>
                🎓 Ahora selecciona tu grado
            </h3>

        </div>
    `);


    mostrarGrados();

}


// ======================================================
// 🎓 MOSTRAR GRADOS
// ======================================================

function mostrarGrados() {

    const grados = [

        ["6", "01", "🟢", "6.º de Primaria"],

        ["1", "02", "🔵", "1.º de Secundaria"],

        ["2", "03", "🟣", "2.º de Secundaria"],

        ["3", "04", "🟠", "3.º de Secundaria"],

        ["4", "05", "🔴", "4.º de Secundaria"],

        ["5", "06", "🟤", "5.º de Secundaria"]

    ];


    grados.forEach(
        ([valor, numero, icono, nombre]) => {

            responderBot(`

                <button
                    type="button"
                    class="tema-futurista"
                    data-edubot-grado="${valor}"
                >

                    <span class="tema-numero">
                        ${numero}
                    </span>

                    <span class="tema-icono">
                        ${icono}
                    </span>

                    <strong>
                        ${nombre}
                    </strong>

                    <span>
                        →
                    </span>

                </button>

            `);

        }
    );


    responderBot(`
        <br>

        ✏️ También puedes escribir:
        <strong>1, 2, 3, 4, 5 o 6</strong>.
    `);

}


// ======================================================
// 🔎 DETECTAR GRADO
// ======================================================

function detectarGrado(texto) {

    texto = normalizar(texto);


    if (
        texto === "6" ||
        texto.includes("6 primaria") ||
        texto.includes("sexto primaria") ||
        texto.includes("sexto de primaria")
    ) {

        return "6";

    }


    if (
        texto === "5" ||
        texto.includes("5 secundaria") ||
        texto.includes("quinto secundaria") ||
        texto.includes("quinto de secundaria")
    ) {

        return "5";

    }


    if (
        texto === "4" ||
        texto.includes("4 secundaria") ||
        texto.includes("cuarto secundaria") ||
        texto.includes("cuarto de secundaria")
    ) {

        return "4";

    }


    if (
        texto === "3" ||
        texto.includes("3 secundaria") ||
        texto.includes("tercero secundaria") ||
        texto.includes("tercero de secundaria")
    ) {

        return "3";

    }


    if (
        texto === "2" ||
        texto.includes("2 secundaria") ||
        texto.includes("segundo secundaria") ||
        texto.includes("segundo de secundaria")
    ) {

        return "2";

    }


    if (
        texto === "1" ||
        texto.includes("1 secundaria") ||
        texto.includes("primero secundaria") ||
        texto.includes("primero de secundaria")
    ) {

        return "1";

    }


    return null;

}


// ======================================================
// 📚 CARGAR CURSO DESPUÉS DEL GRADO
// ======================================================

function cargarCurso() {

    // -----------------------------
    // CIENCIA
    // -----------------------------

    if (cursoSeleccionado === "cyt") {

        if (
            typeof cyt !== "undefined" &&
            cyt[gradoSeleccionado]
        ) {

            estado = "tema";

            mostrarTemasCurso(
                cyt[gradoSeleccionado],
                "🧪",
                "CIENCIA Y TECNOLOGÍA"
            );

        } else {

            errorContenido();

        }

        return;

    }


    // -----------------------------
    // SOCIALES
    // -----------------------------

    if (cursoSeleccionado === "sociales") {

        mostrarTemasSociales();

        return;

    }


    // -----------------------------
    // INGLÉS
    // -----------------------------

    if (cursoSeleccionado === "ingles") {

        mostrarTemasIngles();

        return;

    }


    // -----------------------------
    // MATEMÁTICA
    // -----------------------------

    if (cursoSeleccionado === "matematica") {

        const datos =
            obtenerDatosMatematica();

        if (!datos) {

            errorContenido();

            return;

        }

        mostrarTemasCurso(
            datos,
            "🧮",
            "MATEMÁTICA"
        );

        return;

    }


    // -----------------------------
    // COMUNICACIÓN
    // -----------------------------

    if (cursoSeleccionado === "comunicacion") {

        const datos =
            obtenerDatosGenerales(
                "comunicacion"
            );

        if (!datos) {

            errorContenido();

            return;

        }

        mostrarTemasCurso(
            datos,
            "📖",
            "COMUNICACIÓN"
        );

        return;

    }


    // -----------------------------
    // COMPUTACIÓN
    // -----------------------------

    if (cursoSeleccionado === "computacion") {

        const datos =
            obtenerDatosGenerales(
                "computacion"
            );

        if (!datos) {

            errorContenido();

            return;

        }

        mostrarTemasCurso(
            datos,
            "💻",
            "COMPUTACIÓN"
        );

        return;

    }

}


// ======================================================
// 🧮 DATOS MATEMÁTICA
// ======================================================

function obtenerDatosMatematica() {

    const temas = {};


    if (gradoSeleccionado === "1") {

        if (typeof aritmetica1 !== "undefined")
            temas.aritmetica = aritmetica1;

        if (typeof algebra1 !== "undefined")
            temas.algebra = algebra1;

        if (typeof geometria1 !== "undefined")
            temas.geometria = geometria1;

        if (typeof estadistica1 !== "undefined")
            temas.estadistica = estadistica1;

    }


    if (gradoSeleccionado === "2") {

        if (typeof aritmetica2 !== "undefined")
            temas.aritmetica = aritmetica2;

        if (typeof algebra2 !== "undefined")
            temas.algebra = algebra2;

        if (typeof geometria2 !== "undefined")
            temas.geometria = geometria2;

        if (typeof estadistica2 !== "undefined")
            temas.estadistica = estadistica2;

    }


    if (gradoSeleccionado === "3") {

        if (typeof aritmetica3 !== "undefined")
            temas.aritmetica = aritmetica3;

        if (typeof algebra3 !== "undefined")
            temas.algebra = algebra3;

        if (typeof geometria3 !== "undefined")
            temas.geometria = geometria3;

        if (typeof estadistica3 !== "undefined")
            temas.estadistica = estadistica3;

    }


    if (gradoSeleccionado === "4") {

        if (typeof aritmetica4 !== "undefined")
            temas.aritmetica = aritmetica4;

        if (typeof algebra4 !== "undefined")
            temas.algebra = algebra4;

        if (typeof geometria4 !== "undefined")
            temas.geometria = geometria4;

        if (typeof estadistica4 !== "undefined")
            temas.estadistica = estadistica4;

    }


    if (gradoSeleccionado === "5") {

        if (typeof aritmetica5 !== "undefined")
            temas.aritmetica = aritmetica5;

        if (typeof algebra5 !== "undefined")
            temas.algebra = algebra5;

        if (typeof geometria5 !== "undefined")
            temas.geometria = geometria5;

        if (typeof estadistica5 !== "undefined")
            temas.estadistica = estadistica5;

    }


    if (gradoSeleccionado === "6") {

        if (typeof aritmetica6 !== "undefined")
            temas.aritmetica = aritmetica6;

        if (typeof geometria6 !== "undefined")
            temas.geometria = geometria6;

        if (typeof estadistica6 !== "undefined")
            temas.estadistica = estadistica6;

    }


    return Object.keys(temas).length
        ? temas
        : null;

}


// ======================================================
// 📖 DATOS GENERALES
// ======================================================

function obtenerDatosGenerales(nombre) {

    if (
        typeof window[nombre] !== "undefined"
    ) {

        const datos =
            window[nombre];

        return datos[gradoSeleccionado]
            || datos;

    }


    return null;

}


// ======================================================
// 📋 MOSTRAR TEMAS
// ======================================================

function mostrarTemasCurso(
    datos,
    icono,
    nombre
) {

    estado = "tema";

    temaSeleccionado = "";

    datosTemaSeleccionado = null;


    responderBot(`

        <div class="selector-futurista">

            <div class="selector-badge">
                ● ${nombre}
            </div>

            <div class="selector-icon">
                ${icono}
            </div>

            <h2>
                ${nombre}
            </h2>

            <p>
                ${nombreGrado(gradoSeleccionado)}
            </p>

            <div class="selector-linea"></div>

            <h3>
                📚 Selecciona un tema
            </h3>

        </div>

    `);


    const lista =
        obtenerListaTemas(datos);


    if (!lista.length) {

        errorContenido();

        return;

    }


    lista.forEach(
        (tema, indice) => {

            const numero =
                String(indice + 1)
                    .padStart(2, "0");


            const iconos = [
                "🧮",
                "🔢",
                "📐",
                "📊",
                "🧪",
                "🌎",
                "💡"
            ];


            responderBot(`

                <button
                    type="button"
                    class="tema-futurista"
                    data-edubot-tema="${numero}"
                >

                    <span class="tema-numero">
                        ${numero}
                    </span>

                    <span class="tema-icono">
                        ${iconos[indice % iconos.length]}
                    </span>

                    <strong>
                        ${escapeHTML(tema.titulo)}
                    </strong>

                    <span>
                        →
                    </span>

                </button>

            `);

        }
    );


    responderBot(`

        <br>

        ✏️ Selecciona un tema
        o escribe su número.

    `);

}


// ======================================================
// 🌎 SOCIALES
// ======================================================

function mostrarTemasSociales() {

    estado = "tema";

    responderBot(`

        <div class="selector-futurista">

            <div class="selector-badge">
                ● CIENCIAS SOCIALES
            </div>

            <div class="selector-icon">
                🌎
            </div>

            <h2>
                CIENCIAS SOCIALES
            </h2>

            <p>
                ${nombreGrado(gradoSeleccionado)}
            </p>

            <div class="selector-linea"></div>

            <h3>
                📚 Selecciona un tema
            </h3>

        </div>

    `);


    const temas = [

        ["1", "🇵🇪", "Historia del Perú"],

        ["2", "🌎", "Historia Universal"],

        ["3", "💰", "Economía"]

    ];


    temas.forEach(
        ([numero, icono, nombre]) => {

            responderBot(`

                <button
                    type="button"
                    class="tema-futurista"
                    data-edubot-tema="${numero}"
                >

                    <span class="tema-numero">
                        0${numero}
                    </span>

                    <span class="tema-icono">
                        ${icono}
                    </span>

                    <strong>
                        ${nombre}
                    </strong>

                    <span>
                        →
                    </span>

                </button>

            `);

        }
    );

}


// ======================================================
// 🇬🇧 INGLÉS
// ======================================================

function mostrarTemasIngles() {

    estado = "tema";


    responderBot(`

        <div class="selector-futurista">

            <div class="selector-badge">
                ● INGLÉS
            </div>

            <div class="selector-icon">
                🇬🇧
            </div>

            <h2>
                INGLÉS
            </h2>

            <p>
                ${nombreGrado(gradoSeleccionado)}
            </p>

            <div class="selector-linea"></div>

            <h3>
                📚 Selecciona tu nivel
            </h3>

        </div>

    `);


    const niveles = [

        ["1", "🟢", "Básico"],

        ["2", "🔵", "Intermedio"],

        ["3", "🟣", "Avanzado"]

    ];


    niveles.forEach(
        ([numero, icono, nombre]) => {

            responderBot(`

                <button
                    type="button"
                    class="tema-futurista"
                    data-edubot-tema="${numero}"
                >

                    <span class="tema-numero">
                        0${numero}
                    </span>

                    <span class="tema-icono">
                        ${icono}
                    </span>

                    <strong>
                        ${nombre}
                    </strong>

                    <span>
                        →
                    </span>

                </button>

            `);

        }
    );

}


// ======================================================
// 🔎 LISTA DE TEMAS
// ======================================================

function obtenerListaTemas(objeto) {

    if (!objeto) return [];


    const principal =
        objeto.temas &&
        typeof objeto.temas === "object"
            ? objeto.temas
            : objeto;


    const lista = [];


    for (const clave in principal) {

        if (clave === "nombre")
            continue;


        lista.push({

            clave,

            titulo:
                convertirNombre(clave),

            contenido:
                principal[clave]

        });

    }


    return lista;

}


// ======================================================
// 👆 SELECCIONAR TEMA
// ======================================================

function seleccionarTema(texto) {

    texto = normalizar(texto);


    // -----------------------------
    // SOCIALES
    // -----------------------------

    if (cursoSeleccionado === "sociales") {

        const temas = [

            {
                numero: "1",
                nombres: [
                    "historia del peru",
                    "historia peru",
                    "peru"
                ],
                titulo: "Historia del Perú",
                datos:
                    typeof historiaPeru1 !== "undefined"
                        ? historiaPeru1
                        : null
            },

            {
                numero: "2",
                nombres: [
                    "historia universal",
                    "historia del mundo",
                    "universal"
                ],
                titulo: "Historia Universal",
                datos:
                    typeof historiaUniversal1 !== "undefined"
                        ? historiaUniversal1
                        : null
            },

            {
                numero: "3",
                nombres: [
                    "economia"
                ],
                titulo: "Economía",
                datos:
                    typeof economia1 !== "undefined"
                        ? economia1
                        : null
            }

        ];


        const elegido =
            temas.find(t =>
                texto === t.numero ||
                t.nombres.some(
                    n =>
                        texto === normalizar(n) ||
                        texto.includes(normalizar(n))
                )
            );


        if (!elegido) {

            responderBot(`
                ❌ No reconocí ese tema.
                <br><br>
                Elige 1, 2 o 3.
            `);

            return;

        }


        temaSeleccionado =
            elegido.titulo;

        datosTemaSeleccionado =
            elegido.datos;

    }


    // -----------------------------
    // INGLÉS
    // -----------------------------

    else if (cursoSeleccionado === "ingles") {

        const niveles = [

            {
                numero: "1",
                nombre: "Inglés Básico",
                nivel: "basico",
                datos:
                    typeof inglesBasico !== "undefined"
                        ? inglesBasico
                        : null
            },

            {
                numero: "2",
                nombre: "Inglés Intermedio",
                nivel: "intermedio",
                datos:
                    typeof inglesIntermedio !== "undefined"
                        ? inglesIntermedio
                        : null
            },

            {
                numero: "3",
                nombre: "Inglés Avanzado",
                nivel: "avanzado",
                datos:
                    typeof inglesAvanzado !== "undefined"
                        ? inglesAvanzado
                        : null
            }

        ];


        const elegido =
            niveles.find(
                n =>
                    texto === n.numero ||
                    texto.includes(
                        normalizar(n.nivel)
                    )
            );


        if (!elegido) {

            responderBot(`
                ❌ No reconocí ese nivel.
                <br><br>
                1️⃣ Básico<br>
                2️⃣ Intermedio<br>
                3️⃣ Avanzado
            `);

            return;

        }


        nivelInglesSeleccionado =
            elegido.nivel;

        temaSeleccionado =
            elegido.nombre;

        datosTemaSeleccionado =
            elegido.datos;

    }


    // -----------------------------
    // RESTO
    // -----------------------------

    else {

        const datos =
            cursoSeleccionado === "matematica"
                ? obtenerDatosMatematica()
                : obtenerDatosGenerales(
                    cursoSeleccionado
                );


        const lista =
            obtenerListaTemas(datos);


        let indice = null;


        if (/^\d+$/.test(texto)) {

            indice =
                Number(texto) - 1;

        }


        let elegido =
            indice !== null &&
            lista[indice]
                ? lista[indice]
                : null;


        if (!elegido) {

            elegido =
                lista.find(t => {

                    const clave =
                        normalizar(t.clave);

                    const titulo =
                        normalizar(t.titulo);

                    return (
                        texto === clave ||
                        texto === titulo ||
                        texto.includes(clave) ||
                        clave.includes(texto)
                    );

                });

        }


        if (!elegido) {

            responderBot(`
                ❌ No reconocí ese tema.
                <br><br>
                Selecciona uno de los temas mostrados.
            `);

            return;

        }


        temaSeleccionado =
            elegido.titulo;

        datosTemaSeleccionado =
            elegido.contenido;

    }


    // -----------------------------
    // COMPROBAR CONTENIDO
    // -----------------------------

    if (!datosTemaSeleccionado) {

        responderBot(`
            ❌ El tema fue seleccionado,
            pero no encontré su contenido.
        `);

        return;

    }


    // ==================================================
    // 📖 AQUÍ COMIENZA LA EXPLICACIÓN
    // ==================================================

    estado = "pregunta";


    const explicacion =
        formatearContenido(
            datosTemaSeleccionado
        );


    responderBot(`

        <div class="tema-seleccionado-futurista">

            <span>
                ✦ TEMA SELECCIONADO
            </span>

            <h2>
                ${escapeHTML(
                    temaSeleccionado
                )}
            </h2>

            <p>
                ${nombreCurso(
                    cursoSeleccionado
                )}
                ·
                ${nombreGrado(
                    gradoSeleccionado
                )}
            </p>

        </div>


        <div class="explicacion-futurista">

            <div class="selector-badge">
                📖 EXPLICACIÓN
            </div>

            <h3>
                Aprendamos sobre
                ${escapeHTML(
                    temaSeleccionado
                )}
            </h3>

            <div class="contenido-explicacion">

                ${explicacion}

            </div>

        </div>


        <div class="preguntas-futuristas">

            <div class="selector-badge">
                🧠 PRACTIQUEMOS
            </div>

            <p>
                Ahora puedes practicar:
            </p>


            <button
                type="button"
                class="pregunta-sugerida"
                data-pregunta-sugerida="Explícame ${escapeHTML(temaSeleccionado)} con un ejemplo"
            >
                💡 Explícame con un ejemplo
            </button>


            <button
                type="button"
                class="pregunta-sugerida"
                data-pregunta-sugerida="Hazme una pregunta sobre ${escapeHTML(temaSeleccionado)}"
            >
                🎯 Hazme una pregunta
            </button>


            <button
                type="button"
                class="pregunta-sugerida"
                data-pregunta-sugerida="Hazme un resumen de ${escapeHTML(temaSeleccionado)}"
            >
                📚 Hazme un resumen
            </button>

        </div>


        <br>

        💬 <strong>
            También puedes escribir tu propia pregunta abajo.
        </strong>

    `);

}


// ======================================================
// 🤖 BUSCAR PREGUNTA EN EL TEMA
// ======================================================

function buscarPreguntaEnTema(texto) {

    if (!datosTemaSeleccionado) {

        responderBot(`
            ❌ Primero selecciona un tema.
        `);

        return;

    }


    const resultado =
        buscarRecursivo(
            datosTemaSeleccionado,
            texto
        );


    if (resultado) {

        responderBot(`

            <div class="respuesta-futurista">

                <div class="selector-badge">
                    🤖 EDU BOT
                </div>

                <h3>
                    📚 ${escapeHTML(
                        resultado.titulo
                    )}
                </h3>

                <div>
                    ${resultado.contenido}
                </div>

            </div>

        `);

        return;

    }


    responderBot(`

        <div class="respuesta-futurista">

            <div class="selector-badge">
                🔎 EDU BOT
            </div>

            <h3>
                No encontré una respuesta exacta.
            </h3>

            <p>
                Intenta formular la pregunta
                de otra manera o pide un ejemplo
                sobre <strong>
                ${escapeHTML(
                    temaSeleccionado
                )}
                </strong>.
            </p>

        </div>

    `);

}


// ======================================================
// 🔍 BUSCADOR
// ======================================================

function buscarRecursivo(objeto, texto) {

    if (!objeto) return null;


    if (typeof objeto === "string") {

        const contenido =
            normalizar(objeto);


        if (
            contenido.includes(texto) ||
            texto.includes(contenido)
        ) {

            return {

                titulo: objeto,

                contenido: escapeHTML(objeto)

            };

        }


        return null;

    }


    if (Array.isArray(objeto)) {

        for (
            const elemento of objeto
        ) {

            const resultado =
                buscarRecursivo(
                    elemento,
                    texto
                );


            if (resultado)
                return resultado;

        }


        return null;

    }


    if (typeof objeto === "object") {

        for (
            const clave in objeto
        ) {

            if (clave === "nombre")
                continue;


            const claveNormalizada =
                normalizar(
                    convertirNombre(clave)
                );


            if (
                claveNormalizada.includes(texto) ||
                texto.includes(
                    claveNormalizada
                )
            ) {

                return {

                    titulo:
                        convertirNombre(clave),

                    contenido:
                        formatearContenido(
                            objeto[clave]
                        )

                };

            }


            const resultado =
                buscarRecursivo(
                    objeto[clave],
                    texto
                );


            if (resultado)
                return resultado;

        }

    }


    return null;

}


// ======================================================
// 📝 FORMATEAR CONTENIDO
// ======================================================

function formatearContenido(contenido) {

    if (
        typeof contenido === "string"
    ) {

        return contenido;

    }


    if (Array.isArray(contenido)) {

        return contenido
            .map(item => {

                if (
                    typeof item === "string"
                ) {

                    return `📌 ${item}`;

                }

                return formatearContenido(
                    item
                );

            })
            .join("<br>");

    }


    if (
        typeof contenido === "object" &&
        contenido !== null
    ) {

        let resultado = "";


        for (
            const clave in contenido
        ) {

            resultado += `

                <br>

                <strong>
                    📌 ${convertirNombre(
                        clave
                    )}
                </strong>

                <br>

                ${formatearContenido(
                    contenido[clave]
                )}

                <br>

            `;

        }


        return resultado;

    }


    return "No hay contenido disponible.";

}


// ======================================================
// 🧹 NORMALIZAR
// ======================================================

function normalizar(texto) {

    return texto

        .toLowerCase()

        .normalize("NFD")

        .replace(
            /[\u0300-\u036f]/g,
            ""
        )

        .trim();

}


// ======================================================
// ✨ CONVERTIR NOMBRE
// ======================================================

function convertirNombre(texto) {

    if (!texto)
        return "";


    return texto

        .replace(
            /([A-Z])/g,
            " $1"
        )

        .replace(
            /_/g,
            " "
        )

        .replace(
            /\b\w/g,
            letra =>
                letra.toUpperCase()
        )

        .trim();

}


// ======================================================
// 📚 NOMBRE CURSO
// ======================================================

function nombreCurso(curso) {

    const nombres = {

        cyt:
            "Ciencia y Tecnología",

        matematica:
            "Matemática",

        comunicacion:
            "Comunicación",

        sociales:
            "Ciencias Sociales",

        ingles:
            "Inglés",

        computacion:
            "Computación"

    };


    return nombres[curso] || curso;

}


// ======================================================
// 🎓 NOMBRE GRADO
// ======================================================

function nombreGrado(grado) {

    const nombres = {

        "6":
            "6.º de Primaria",

        "1":
            "1.º de Secundaria",

        "2":
            "2.º de Secundaria",

        "3":
            "3.º de Secundaria",

        "4":
            "4.º de Secundaria",

        "5":
            "5.º de Secundaria"

    };


    return nombres[grado]
        || "Grado desconocido";

}


// ======================================================
// 👤 MOSTRAR USUARIO
// ======================================================

function mostrarUsuario(texto) {

    if (!chat) return;


    const mensaje =
        document.createElement("p");


    mensaje.innerHTML = `

        <strong>
            Tú:
        </strong>

        ${escapeHTML(texto)}

    `;


    chat.appendChild(mensaje);

    chat.scrollTop =
        chat.scrollHeight;

}


// ======================================================
// 🤖 MOSTRAR BOT
// ======================================================

function responderBot(texto) {

    if (!chat) {

        console.log(
            "BOT:",
            texto
        );

        return;

    }


    const mensaje =
        document.createElement("div");


    mensaje.className =
        "bot";


    mensaje.innerHTML =
        texto;


    chat.appendChild(mensaje);


    chat.scrollTop =
        chat.scrollHeight;

}


// ======================================================
// ❌ ERROR
// ======================================================

function errorContenido() {

    responderBot(`

        <div class="selector-futurista">

            <div class="selector-badge">
                ⚠️ CONTENIDO
            </div>

            <h2>
                No encontré los contenidos
            </h2>

            <p>
                El grado fue seleccionado,
                pero no encontré el archivo
                correspondiente.
            </p>

        </div>

    `);

}


// ======================================================
// 🛡️ SEGURIDAD
// ======================================================

function escapeHTML(texto) {

    const div =
        document.createElement("div");

    div.textContent =
        texto;

    return div.innerHTML;

}


// ======================================================
// 🔄 NUEVO CHAT
// ======================================================

function reiniciarEduBot() {

    estado = "curso";

    cursoSeleccionado = "";

    gradoSeleccionado = "";

    nivelInglesSeleccionado = "";

    temaSeleccionado = "";

    datosTemaSeleccionado = null;


    console.log(
        "🔄 Edu BOT reiniciado"
    );

}
