/* =========================================================
   EDU BOT IA — MOTOR PRINCIPAL
   FLUJO:
   CURSO → GRADO → TEMA → EXPLICACIÓN → PREGUNTAS
========================================================= */

let estado = "curso";
let cursoSeleccionado = "";
let gradoSeleccionado = "";
let temaSeleccionado = "";
let datosTemaSeleccionado = null;
let nivelInglesSeleccionado = "";

const pregunta = document.getElementById("pregunta");
const enviar = document.getElementById("enviar");
const chat = document.getElementById("chat");


/* =========================================================
   INICIO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    prepararInterfaz();

});


/* =========================================================
   PREPARAR INTERFAZ
========================================================= */

function prepararInterfaz() {

    /* CURSOS */

    document.querySelectorAll("[data-curso]").forEach(boton => {

        boton.addEventListener("click", () => {

            const curso = boton.dataset.curso || "";

            abrirZonaChat();

            seleccionarCurso(normalizar(curso));

        });

    });


    /* BOTONES DEL CHAT */

    if (chat) {

        chat.addEventListener("click", evento => {

            const gradoBtn =
                evento.target.closest("[data-edubot-grado]");

            const temaBtn =
                evento.target.closest("[data-edubot-tema]");

            const preguntaBtn =
                evento.target.closest("[data-pregunta-sugerida]");


            /* GRADO */

            if (gradoBtn) {

                seleccionarGrado(
                    gradoBtn.dataset.edubotGrado
                );

                return;

            }


            /* TEMA */

            if (temaBtn) {

                seleccionarTema(
                    temaBtn.dataset.edubotTema
                );

                return;

            }


            /* PREGUNTA SUGERIDA */

            if (preguntaBtn) {

                if (!pregunta) return;

                pregunta.value =
                    preguntaBtn.dataset.preguntaSugerida || "";

                pregunta.focus();

            }

        });

    }


    /* BOTÓN ENVIAR */

    if (enviar) {

        enviar.addEventListener("click", responder);

    }


    /* ENTER */

    if (pregunta) {

        pregunta.addEventListener("keydown", evento => {

            if (evento.key === "Enter") {

                evento.preventDefault();

                responder();

            }

        });

    }


    /* NUEVO CHAT */

    const nuevoChat =
        document.getElementById("nuevoChat");

    if (nuevoChat) {

        nuevoChat.addEventListener("click", nuevoChatFuncion);

    }


    /* MODO OSCURO */

    prepararModoOscuro();


    /* MENÚ MÓVIL */

    const abrirMenu =
        document.getElementById("abrirMenu");

    if (abrirMenu) {

        abrirMenu.addEventListener("click", () => {

            document
                .querySelector(".sidebar")
                ?.classList.toggle("abierta");

        });

    }


    /* MENÚ */

    prepararMenu();

}


/* =========================================================
   ABRIR CHAT
========================================================= */

function abrirZonaChat() {

    const inicio =
        document.getElementById("inicio");

    const zonaChat =
        document.getElementById("zonaChat");

    if (inicio) {

        inicio.style.display = "none";

    }

    if (zonaChat) {

        zonaChat.classList.add("visible");

    }

    document
        .querySelectorAll(".seccion-extra")
        .forEach(seccion => {

            seccion.classList.remove("mostrar");

        });

}


/* =========================================================
   RESPONDER
========================================================= */

function responder() {

    if (!pregunta) return;


    const textoOriginal =
        pregunta.value.trim();


    if (!textoOriginal) return;


    const texto =
        normalizar(textoOriginal);


    mostrarUsuario(textoOriginal);

    pregunta.value = "";


    /* CURSO */

    if (estado === "curso") {

        seleccionarCurso(texto);

        return;

    }


    /* GRADO */

    if (estado === "grado") {

        const grado =
            detectarGrado(texto);


        if (!grado) {

            responderBot(`
                <div class="error-card">
                    <div class="error-icon">⚠️</div>

                    <h3>No reconocí ese grado</h3>

                    <p>
                        Selecciona uno de los grados
                        disponibles.
                    </p>

                    <div class="ayuda-texto">
                        Puedes escribir:
                        <strong>1, 2, 3, 4, 5 o 6</strong>
                    </div>
                </div>
            `);

            return;

        }


        seleccionarGrado(grado);

        return;

    }


    /* TEMA */

    if (estado === "tema") {

        seleccionarTema(texto);

        return;

    }


    /* PREGUNTA */

    if (estado === "pregunta") {

        buscarPreguntaEnTema(texto);

        return;

    }

}


/* =========================================================
   SELECCIONAR CURSO
========================================================= */

function seleccionarCurso(texto) {

    const entrada =
        normalizar(texto);


    /* MATEMÁTICA */

    if (
        entrada === "mat" ||
        entrada === "mate" ||
        entrada === "matematica" ||
        entrada === "matematicas"
    ) {

        establecerCurso("matematica");

        return;

    }


    /* COMUNICACIÓN */

    if (
        entrada === "com" ||
        entrada === "comunicacion" ||
        entrada.includes("comunicacion")
    ) {

        establecerCurso("comunicacion");

        return;

    }


    /* CIENCIA */

    if (
        entrada === "cyt" ||
        entrada === "ciencia" ||
        entrada.includes("ciencia y tecnologia") ||
        entrada.includes("ciencia tecnologia")
    ) {

        establecerCurso("cyt");

        return;

    }


    /* SOCIALES */

    if (
        entrada === "sociales" ||
        entrada === "ciencias sociales" ||
        entrada.includes("ciencias sociales")
    ) {

        establecerCurso("sociales");

        return;

    }


    /* INGLÉS */

    if (
        entrada === "ingles" ||
        entrada.includes("idioma ingles")
    ) {

        establecerCurso("ingles");

        return;

    }


    /* COMPUTACIÓN */

    if (
        entrada === "computacion" ||
        entrada === "computadora" ||
        entrada === "informatica"
    ) {

        establecerCurso("computacion");

        return;

    }


    responderBot(`
        <div class="error-card">

            <div class="error-icon">🔎</div>

            <h3>No reconocí ese curso</h3>

            <p>Selecciona uno de estos cursos:</p>

            <div class="lista-cursos-mini">

                <span>🧮 Matemática</span>
                <span>📖 Comunicación</span>
                <span>🧪 Ciencia y Tecnología</span>
                <span>🌎 Ciencias Sociales</span>
                <span>🇬🇧 Inglés</span>
                <span>💻 Computación</span>

            </div>

        </div>
    `);

}


/* =========================================================
   ESTABLECER CURSO
========================================================= */

function establecerCurso(curso) {

    cursoSeleccionado = curso;

    gradoSeleccionado = "";
    temaSeleccionado = "";
    datosTemaSeleccionado = null;
    nivelInglesSeleccionado = "";

    estado = "grado";


    abrirZonaChat();


    responderBot(`
        <div class="curso-header">

            <div class="curso-header-icon">
                ${iconoCursoActual()}
            </div>

            <div>

                <span class="mini-etiqueta">
                    CURSO SELECCIONADO
                </span>

                <h2>
                    ${nombreCurso(curso)}
                </h2>

                <p>
                    Ahora selecciona tu grado.
                </p>

            </div>

        </div>
    `);


    mostrarGrados();

}


/* =========================================================
   GRADOS
========================================================= */

function mostrarGrados() {

    const grados = [

        ["6", "01", "🟢", "6.º de Primaria"],

        ["1", "02", "🔵", "1.º de Secundaria"],

        ["2", "03", "🟣", "2.º de Secundaria"],

        ["3", "04", "🟠", "3.º de Secundaria"],

        ["4", "05", "🔴", "4.º de Secundaria"],

        ["5", "06", "🟤", "5.º de Secundaria"]

    ];


    responderBot(`
        <div class="selector-futurista">

            <div class="selector-badge">
                ● EDU BOT IA
            </div>

            <div class="selector-icon">
                🎓
            </div>

            <h2>
                Selecciona tu grado
            </h2>

            <p>
                Elige un grado para mostrar
                únicamente sus temas.
            </p>

            <div class="selector-linea"></div>

        </div>
    `);


    grados.forEach(grado => {

        responderBot(`
            <button
                type="button"
                class="tema-futurista tema-boton"
                data-edubot-grado="${grado[0]}"
            >

                <span class="tema-numero">
                    ${grado[1]}
                </span>

                <span class="tema-icono">
                    ${grado[2]}
                </span>

                <span class="tema-info">

                    <strong>
                        ${grado[3]}
                    </strong>

                    <small>
                        Ver temas disponibles
                    </small>

                </span>

                <span class="tema-flecha">
                    →
                </span>

            </button>
        `);

    });


    responderBot(`
        <div class="ayuda-selector">
            ✏️ También puedes escribir
            <strong>1, 2, 3, 4, 5 o 6</strong>.
        </div>
    `);

}


/* =========================================================
   DETECTAR GRADO
========================================================= */

function detectarGrado(texto) {

    texto =
        normalizar(texto);


    if (
        texto === "6" ||
        texto.includes("6 primaria") ||
        texto.includes("6to primaria") ||
        texto.includes("sexto primaria") ||
        texto.includes("sexto grado")
    ) {

        return "6";

    }


    if (
        texto === "5" ||
        texto.includes("5 secundaria") ||
        texto.includes("5to secundaria") ||
        texto.includes("quinto secundaria")
    ) {

        return "5";

    }


    if (
        texto === "4" ||
        texto.includes("4 secundaria") ||
        texto.includes("4to secundaria") ||
        texto.includes("cuarto secundaria")
    ) {

        return "4";

    }


    if (
        texto === "3" ||
        texto.includes("3 secundaria") ||
        texto.includes("3ro secundaria") ||
        texto.includes("tercero secundaria")
    ) {

        return "3";

    }


    if (
        texto === "2" ||
        texto.includes("2 secundaria") ||
        texto.includes("2do secundaria") ||
        texto.includes("segundo secundaria")
    ) {

        return "2";

    }


    if (
        texto === "1" ||
        texto.includes("1 secundaria") ||
        texto.includes("1ro secundaria") ||
        texto.includes("primero secundaria")
    ) {

        return "1";

    }


    return null;

}


/* =========================================================
   SELECCIONAR GRADO
========================================================= */

function seleccionarGrado(grado) {

    gradoSeleccionado =
        String(grado);


    temaSeleccionado = "";

    datosTemaSeleccionado = null;


    cargarCurso();

}


/* =========================================================
   CARGAR CURSO
========================================================= */

function cargarCurso() {

    abrirZonaChat();


    /* CIENCIA */

    if (cursoSeleccionado === "cyt") {

        cargarCiencia();

        return;

    }


    /* SOCIALES */

    if (cursoSeleccionado === "sociales") {

        mostrarTemasSociales();

        return;

    }


    /* INGLÉS */

    if (cursoSeleccionado === "ingles") {

        mostrarTemasIngles();

        return;

    }


    const datos =
        obtenerDatosCurso();


    if (!datos) {

        responderBot(`
            <div class="error-card">

                <div class="error-icon">
                    📚
                </div>

                <h3>
                    No encontré los contenidos
                </h3>

                <p>
                    El grado
                    <strong>
                        ${nombreGrado(gradoSeleccionado)}
                    </strong>
                    fue reconocido.
                </p>

                <small>
                    Verifica que el archivo de
                    conocimientos de este curso
                    esté cargado.
                </small>

            </div>
        `);

        return;

    }


    estado = "tema";

    mostrarEncabezadoTemas(datos);

}


/* =========================================================
   CIENCIA
========================================================= */

function cargarCiencia() {

    if (typeof cyt === "undefined") {

        responderBot(`
            ❌ No se encontró
            <strong>cyt.js</strong>.
        `);

        return;

    }


    const datos =
        cyt[gradoSeleccionado];


    if (!datos) {

        responderBot(`
            ❌ No encontré contenidos para
            ${nombreGrado(gradoSeleccionado)}.
        `);

        return;

    }


    estado = "tema";

    mostrarEncabezadoTemas(datos);

}


/* =========================================================
   ENCABEZADO DE TEMAS
========================================================= */

function mostrarEncabezadoTemas(datos) {

    responderBot(`
        <div class="selector-futurista">

            <div class="selector-badge">
                ● EDU BOT IA
            </div>

            <div class="selector-icon">
                ${iconoCursoActual()}
            </div>

            <h2>
                ${nombreCurso(cursoSeleccionado)}
            </h2>

            <p>
                ${nombreGrado(gradoSeleccionado)}
            </p>

            <div class="selector-linea"></div>

            <h3>
                🧠 Selecciona un tema
            </h3>

            <small>
                Solo verás los temas disponibles
                para este grado.
            </small>

        </div>
    `);


    mostrarTemas(datos);

}


/* =========================================================
   TEMAS SOCIALES
========================================================= */

function mostrarTemasSociales() {

    estado = "tema";


    responderBot(`
        <div class="selector-futurista">

            <div class="selector-badge">
                ● EDU BOT IA
            </div>

            <div class="selector-icon">
                🌎
            </div>

            <h2>
                Ciencias Sociales
            </h2>

            <p>
                ${nombreGrado(gradoSeleccionado)}
            </p>

            <div class="selector-linea"></div>

            <h3>
                🧠 Selecciona un tema
            </h3>

        </div>
    `);


    const temas = [

        ["01", "🇵🇪", "Historia del Perú"],

        ["02", "🌎", "Historia Universal"],

        ["03", "💰", "Economía"]

    ];


    temas.forEach(tema => {

        responderBot(`
            <button
                type="button"
                class="tema-futurista tema-boton"
                data-edubot-tema="${tema[0]}"
            >

                <span class="tema-numero">
                    ${tema[0]}
                </span>

                <span class="tema-icono">
                    ${tema[1]}
                </span>

                <span class="tema-info">

                    <strong>
                        ${tema[2]}
                    </strong>

                    <small>
                        Seleccionar tema
                    </small>

                </span>

                <span class="tema-flecha">
                    →
                </span>

            </button>
        `);

    });


    responderBot(`
        <div class="ayuda-selector">
            ✏️ Escribe el número o el nombre del tema.
        </div>
    `);

}


/* =========================================================
   INGLÉS
========================================================= */

function mostrarTemasIngles() {

    estado = "tema";


    responderBot(`
        <div class="selector-futurista">

            <div class="selector-badge">
                ● EDU BOT IA
            </div>

            <div class="selector-icon">
                🇬🇧
            </div>

            <h2>
                Inglés
            </h2>

            <p>
                ${nombreGrado(gradoSeleccionado)}
            </p>

            <div class="selector-linea"></div>

            <h3>
                🧠 Selecciona tu nivel
            </h3>

        </div>
    `);


    const niveles = [

        ["01", "🟢", "Básico", "basico"],

        ["02", "🔵", "Intermedio", "intermedio"],

        ["03", "🟣", "Avanzado", "avanzado"]

    ];


    niveles.forEach(nivel => {

        responderBot(`
            <button
                type="button"
                class="tema-futurista tema-boton"
                data-edubot-tema="${nivel[0]}"
            >

                <span class="tema-numero">
                    ${nivel[0]}
                </span>

                <span class="tema-icono">
                    ${nivel[1]}
                </span>

                <span class="tema-info">

                    <strong>
                        ${nivel[2]}
                    </strong>

                    <small>
                        Seleccionar nivel
                    </small>

                </span>

                <span class="tema-flecha">
                    →
                </span>

            </button>
        `);

    });


    responderBot(`
        <div class="ayuda-selector">
            ✏️ Puedes escribir
            <strong>básico</strong>,
            <strong>intermedio</strong>
            o
            <strong>avanzado</strong>.
        </div>
    `);

}


/* =========================================================
   MOSTRAR TEMAS
========================================================= */

function mostrarTemas(datos) {

    const lista =
        obtenerListaTemas(datos);


    if (!lista.length) {

        responderBot(`
            <div class="error-card">
                ❌ No encontré temas disponibles
                para este grado.
            </div>
        `);

        return;

    }


    lista.forEach((tema, indice) => {

        const numero =
            String(indice + 1).padStart(2, "0");


        const iconos = [
            "📘",
            "🔢",
            "📐",
            "📊",
            "🧪",
            "🌎",
            "💡",
            "🧠"
        ];


        responderBot(`
            <button
                type="button"
                class="tema-futurista tema-boton"
                data-edubot-tema="${numero}"
            >

                <span class="tema-numero">
                    ${numero}
                </span>

                <span class="tema-icono">
                    ${iconos[indice % iconos.length]}
                </span>

                <span class="tema-info">

                    <strong>
                        ${escapeHTML(tema.titulo)}
                    </strong>

                    <small>
                        Abrir tema
                    </small>

                </span>

                <span class="tema-flecha">
                    →
                </span>

            </button>
        `);

    });


    responderBot(`
        <div class="ayuda-selector">
            ✏️ Escribe el número o nombre del tema.
        </div>
    `);

}


/* =========================================================
   OBTENER LISTA DE TEMAS
========================================================= */

function obtenerListaTemas(objeto) {

    if (!objeto) return [];


    const principal =
        objeto.temas &&
        typeof objeto.temas === "object"
            ? objeto.temas
            : objeto;


    const lista = [];


    for (const clave in principal) {

        if (clave === "nombre") continue;


        const contenido =
            principal[clave];


        /*
           Evitamos mostrar propiedades
           técnicas que no son temas.
        */

        if (
            typeof contenido === "function" ||
            contenido === null ||
            contenido === undefined
        ) {

            continue;

        }


        lista.push({

            clave,

            titulo:
                convertirNombre(clave),

            contenido

        });

    }


    return lista;

}


/* =========================================================
   SELECCIONAR TEMA
========================================================= */

function seleccionarTema(entrada) {

    const texto =
        normalizar(entrada);


    /* SOCIALES */

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
            temas.find(tema =>
                texto === tema.numero ||
                tema.nombres.some(nombre =>
                    texto === normalizar(nombre) ||
                    texto.includes(normalizar(nombre))
                )
            );


        if (!elegido) {

            mostrarErrorTema();

            return;

        }


        temaSeleccionado =
            elegido.titulo;

        datosTemaSeleccionado =
            elegido.datos;


        finalizarTema();

        return;

    }


    /* INGLÉS */

    if (cursoSeleccionado === "ingles") {

        const niveles = [

            {
                numero: "1",
                nombres: ["basico"],
                titulo: "Inglés Básico",
                nivel: "basico",
                datos:
                    typeof inglesBasico !== "undefined"
                        ? inglesBasico
                        : null
            },

            {
                numero: "2",
                nombres: ["intermedio"],
                titulo: "Inglés Intermedio",
                nivel: "intermedio",
                datos:
                    typeof inglesIntermedio !== "undefined"
                        ? inglesIntermedio
                        : null
            },

            {
                numero: "3",
                nombres: ["avanzado"],
                titulo: "Inglés Avanzado",
                nivel: "avanzado",
                datos:
                    typeof inglesAvanzado !== "undefined"
                        ? inglesAvanzado
                        : null
            }

        ];


        const elegido =
            niveles.find(nivel =>
                texto === nivel.numero ||
                nivel.nombres.some(nombre =>
                    texto === normalizar(nombre) ||
                    texto.includes(normalizar(nombre))
                )
            );


        if (!elegido) {

            responderBot(`
                ❌ Selecciona:
                <strong>1 Básico</strong>,
                <strong>2 Intermedio</strong>
                o
                <strong>3 Avanzado</strong>.
            `);

            return;

        }


        nivelInglesSeleccionado =
            elegido.nivel;

        temaSeleccionado =
            elegido.titulo;

        datosTemaSeleccionado =
            elegido.datos;


        finalizarTema();

        return;

    }


    /* RESTO DE CURSOS */

    const datos =
        obtenerDatosCurso();


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
            lista.find(tema => {

                const clave =
                    normalizar(tema.clave);

                const titulo =
                    normalizar(tema.titulo);


                return (
                    texto === clave ||
                    texto === titulo ||
                    texto.includes(clave) ||
                    clave.includes(texto) ||
                    titulo.includes(texto)
                );

            });

    }


    if (!elegido) {

        mostrarErrorTema();

        return;

    }


    temaSeleccionado =
        elegido.titulo;

    datosTemaSeleccionado =
        elegido.contenido;


    finalizarTema();

}


/* =========================================================
   FINALIZAR TEMA
========================================================= */

function finalizarTema() {

    if (!datosTemaSeleccionado) {

        responderBot(`
            <div class="error-card">

                ❌ El tema fue encontrado,
                pero su archivo de conocimientos
                no está disponible.

            </div>
        `);

        return;

    }


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
                ${escapeHTML(temaSeleccionado)}
            </h2>

            <p>
                ${nombreCurso(cursoSeleccionado)}
                ·
                ${nombreGrado(gradoSeleccionado)}
            </p>

        </div>


        <div class="explicacion-futurista">

            <div class="selector-badge">
                📖 EXPLICACIÓN
            </div>

            <h3>
                Aprendamos sobre
                ${escapeHTML(temaSeleccionado)}
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
                Ahora puedes preguntarme sobre
                <strong>
                    ${escapeHTML(temaSeleccionado)}
                </strong>.
            </p>

            <div class="preguntas-grid">

                <button
                    type="button"
                    class="pregunta-sugerida"
                    data-pregunta-sugerida="¿Qué es ${escapeHTML(temaSeleccionado)}?"
                >
                    ❓ ¿Qué es?
                </button>

                <button
                    type="button"
                    class="pregunta-sugerida"
                    data-pregunta-sugerida="Explícame ${escapeHTML(temaSeleccionado)} con un ejemplo"
                >
                    💡 Dame un ejemplo
                </button>

                <button
                    type="button"
                    class="pregunta-sugerida"
                    data-pregunta-sugerida="Hazme una pregunta sobre ${escapeHTML(temaSeleccionado)}"
                >
                    🎯 Hazme una pregunta
                </button>

            </div>

        </div>

        <div class="mensaje-final-chat">

            💬 También puedes escribir
            tu propia pregunta abajo.

        </div>

    `);

}


/* =========================================================
   ERROR TEMA
========================================================= */

function mostrarErrorTema() {

    responderBot(`

        <div class="error-card">

            <div class="error-icon">
                🔎
            </div>

            <h3>
                No reconocí ese tema
            </h3>

            <p>
                Selecciona uno de los temas
                mostrados arriba.
            </p>

            <small>
                Puedes escribir su número
                o su nombre.
            </small>

        </div>

    `);

}


/* =========================================================
   BUSCAR PREGUNTA DENTRO DEL TEMA
========================================================= */

function buscarPreguntaEnTema(texto) {

    if (!datosTemaSeleccionado) {

        estado = "tema";

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
                    📚 ${escapeHTML(resultado.titulo)}
                </h3>

                <div class="respuesta-contenido">

                    ${resultado.contenido}

                </div>

            </div>

        `);

        return;

    }


    responderBot(`

        <div class="error-card">

            <div class="error-icon">
                🔍
            </div>

            <h3>
                No encontré una respuesta exacta
            </h3>

            <p>
                No encontré esa pregunta dentro
                de <strong>
                    ${escapeHTML(temaSeleccionado)}
                </strong>.
            </p>

            <small>
                Prueba con otra pregunta
                relacionada con el tema.
            </small>

        </div>

    `);

}


/* =========================================================
   OBTENER DATOS
========================================================= */

function obtenerDatosCurso() {

    let datos = null;


    /* MATEMÁTICA */

    if (cursoSeleccionado === "matematica") {

        const temas = {};


        const numero =
            gradoSeleccionado;


        const fuentes = {

            "1": [
                ["aritmetica", "aritmetica1"],
                ["algebra", "algebra1"],
                ["geometria", "geometria1"],
                ["estadistica", "estadistica1"]
            ],

            "2": [
                ["aritmetica", "aritmetica2"],
                ["algebra", "algebra2"],
                ["geometria", "geometria2"],
                ["estadistica", "estadistica2"]
            ],

            "3": [
                ["aritmetica", "aritmetica3"],
                ["algebra", "algebra3"],
                ["geometria", "geometria3"],
                ["estadistica", "estadistica3"]
            ],

            "4": [
                ["aritmetica", "aritmetica4"],
                ["algebra", "algebra4"],
                ["geometria", "geometria4"],
                ["estadistica", "estadistica4"]
            ],

            "5": [
                ["aritmetica", "aritmetica5"],
                ["algebra", "algebra5"],
                ["geometria", "geometria5"],
                ["estadistica", "estadistica5"]
            ],

            "6": [
                ["aritmetica", "aritmetica6"],
                ["algebra", "algebra5"],
                ["geometria", "geometria6"],
                ["estadistica", "estadistica6"]
            ]

        };


        const lista =
            fuentes[numero] || [];


        lista.forEach(([nombre, variable]) => {

            try {

                const datosVariable =
                    eval(variable);

                if (datosVariable) {

                    temas[nombre] =
                        datosVariable;

                }

            }
            catch (error) {

                console.warn(
                    "No disponible:",
                    variable
                );

            }

        });


        if (Object.keys(temas).length) {

            datos = temas;

        }

    }


    /* COMUNICACIÓN */

    if (cursoSeleccionado === "comunicacion") {

        if (
            typeof comunicacion !== "undefined"
        ) {

            datos =
                comunicacion[gradoSeleccionado] ||
                comunicacion;

        }

    }


    /* COMPUTACIÓN */

    if (cursoSeleccionado === "computacion") {

        if (
            typeof computacion !== "undefined"
        ) {

            datos =
                computacion[gradoSeleccionado] ||
                computacion;

        }

    }


    return datos;

}


/* =========================================================
   BUSCADOR RECURSIVO
========================================================= */

function buscarRecursivo(objeto, texto) {

    if (!objeto) return null;


    /* STRING */

    if (typeof objeto === "string") {

        const contenido =
            normalizar(objeto);


        if (
            contenido.includes(texto) ||
            texto.includes(contenido)
        ) {

            return {

                titulo: "Información",

                contenido:
                    escapeHTML(objeto)

            };

        }


        return null;

    }


    /* ARRAY */

    if (Array.isArray(objeto)) {

        for (const elemento of objeto) {

            const resultado =
                buscarRecursivo(
                    elemento,
                    texto
                );


            if (resultado) {

                return resultado;

            }

        }


        return null;

    }


    /* OBJETO */

    if (typeof objeto === "object") {

        for (const clave in objeto) {

            if (clave === "nombre") {

                continue;

            }


            const claveNormalizada =
                normalizar(
                    convertirNombre(clave)
                );


            if (
                claveNormalizada.includes(texto) ||
                texto.includes(claveNormalizada)
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


            if (resultado) {

                return resultado;

            }

        }

    }


    return null;

}


/* =========================================================
   FORMATEAR CONTENIDO
========================================================= */

function formatearContenido(contenido) {

    if (typeof contenido === "string") {

        return contenido;

    }


    if (Array.isArray(contenido)) {

        return contenido
            .map(item => {

                if (typeof item === "string") {

                    return `
                        <div class="contenido-item">
                            📌 ${item}
                        </div>
                    `;

                }

                return formatearContenido(item);

            })
            .join("");

    }


    if (
        typeof contenido === "object" &&
        contenido !== null
    ) {

        let resultado = "";


        for (const clave in contenido) {

            resultado += `

                <div class="contenido-bloque">

                    <strong>
                        📌 ${convertirNombre(clave)}
                    </strong>

                    <div>
                        ${formatearContenido(
                            contenido[clave]
                        )}
                    </div>

                </div>

            `;

        }


        return resultado;

    }


    return "No hay contenido disponible.";

}


/* =========================================================
   UTILIDADES
========================================================= */

function normalizar(texto) {

    return String(texto || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}


function convertirNombre(texto) {

    if (!texto) return "";


    return String(texto)
        .replace(/([A-Z])/g, " $1")
        .replace(/_/g, " ")
        .replace(/\b\w/g, letra =>
            letra.toUpperCase()
        )
        .trim();

}


function nombreCurso(curso) {

    const nombres = {

        matematica: "Matemática",

        comunicacion: "Comunicación",

        cyt: "Ciencia y Tecnología",

        sociales: "Ciencias Sociales",

        ingles: "Inglés",

        computacion: "Computación"

    };


    return nombres[curso] || curso;

}


function nombreGrado(grado) {

    const nombres = {

        "6": "6.º de Primaria",

        "1": "1.º de Secundaria",

        "2": "2.º de Secundaria",

        "3": "3.º de Secundaria",

        "4": "4.º de Secundaria",

        "5": "5.º de Secundaria"

    };


    return nombres[grado] || "Grado";

}


function iconoCursoActual() {

    const iconos = {

        matematica: "🧮",

        comunicacion: "📖",

        cyt: "🧪",

        sociales: "🌎",

        ingles: "🇬🇧",

        computacion: "💻"

    };


    return (
        iconos[cursoSeleccionado] ||
        "📚"
    );

}


function escapeHTML(texto) {

    const div =
        document.createElement("div");


    div.textContent =
        String(texto ?? "");


    return div.innerHTML;

}


/* =========================================================
   MENSAJES
========================================================= */

function mostrarUsuario(texto) {

    if (!chat) return;


    const mensaje =
        document.createElement("div");


    mensaje.className =
        "mensaje-usuario";


    mensaje.innerHTML = `
        <span class="mensaje-avatar">
            👤
        </span>

        <div>
            <small>Tú</small>
            <p>
                ${escapeHTML(texto)}
            </p>
        </div>
    `;


    chat.appendChild(mensaje);


    chat.scrollTop =
        chat.scrollHeight;

}


function responderBot(texto) {

    if (!chat) return;


    const mensaje =
        document.createElement("div");


    mensaje.className =
        "mensaje-bot";


    mensaje.innerHTML = `

        <span class="mensaje-avatar">
            🤖
        </span>

        <div class="mensaje-bot-contenido">

            ${texto}

        </div>

    `;


    chat.appendChild(mensaje);


    chat.scrollTop =
        chat.scrollHeight;

}


/* =========================================================
   NUEVO CHAT
========================================================= */

function nuevoChatFuncion() {

    estado = "curso";

    cursoSeleccionado = "";

    gradoSeleccionado = "";

    temaSeleccionado = "";

    datosTemaSeleccionado = null;

    nivelInglesSeleccionado = "";


    if (pregunta) {

        pregunta.value = "";

    }


    if (chat) {

        chat.innerHTML = "";

    }


    const inicio =
        document.getElementById("inicio");

    const zonaChat =
        document.getElementById("zonaChat");


    if (inicio) {

        inicio.style.display = "block";

    }


    if (zonaChat) {

        zonaChat.classList.remove("visible");

    }


    responderBot(`
        <strong>¡Nuevo chat! 👋</strong>

        <br><br>

        Soy <b>Edu BOT</b> 🤖.

        <br><br>

        Selecciona un curso para comenzar.
    `);

}


/* =========================================================
   MODO OSCURO
========================================================= */

function prepararModoOscuro() {

    const modo =
        document.getElementById("modoOscuro");


    if (!modo) return;


    if (
        localStorage.getItem("eduBotModo") ===
        "oscuro"
    ) {

        document.body.classList.add("oscuro");

        modo.checked = true;

    }


    modo.addEventListener("change", () => {

        document.body.classList.toggle(
            "oscuro",
            modo.checked
        );


        localStorage.setItem(
            "eduBotModo",
            modo.checked
                ? "oscuro"
                : "claro"
        );

    });

}


/* =========================================================
   MENÚ
========================================================= */

function prepararMenu() {

    document
        .querySelectorAll(".menu-btn")
        .forEach(btn => {

            btn.addEventListener("click", () => {

                const seccion =
                    btn.dataset.seccion;


                document
                    .querySelectorAll(".menu-btn")
                    .forEach(b =>
                        b.classList.remove("activo")
                    );


                btn.classList.add("activo");


                const inicio =
                    document.getElementById("inicio");

                const zonaChat =
                    document.getElementById("zonaChat");


                if (seccion === "inicio") {

                    inicio.style.display =
                        "block";

                    zonaChat.classList.remove(
                        "visible"
                    );

                    document
                        .querySelectorAll(".seccion-extra")
                        .forEach(s =>
                            s.classList.remove("mostrar")
                        );

                }


                else if (seccion === "cursos") {

                    inicio.style.display =
                        "block";

                    zonaChat.classList.remove(
                        "visible"
                    );

                    document
                        .getElementById("cursos")
                        ?.scrollIntoView({
                            behavior: "smooth"
                        });

                }


                else {

                    inicio.style.display =
                        "none";

                    zonaChat.classList.remove(
                        "visible"
                    );


                    document
                        .querySelectorAll(".seccion-extra")
                        .forEach(s =>
                            s.classList.remove("mostrar")
                        );


                    document
                        .getElementById(seccion)
                        ?.classList.add("mostrar");

                }

            });

        });

}
