// ============================================================
// EDU BOT IA - APP.JS
// VERSIÓN CORREGIDA Y UNIFICADA
// ============================================================

let estado = "curso";

let cursoSeleccionado = "";
let gradoSeleccionado = "";

let nivelInglesSeleccionado = "";

let temaSeleccionado = "";
let datosTemaSeleccionado = null;


// ============================================================
// INICIO
// ============================================================

document.addEventListener("DOMContentLoaded", iniciarEduBot);

function iniciarEduBot() {

    console.log("=================================");
    console.log("🤖 EDU BOT IA INICIADO");
    console.log("=================================");

    configurarEventos();

    // Si el chat está vacío, mostrar bienvenida
    const chat = document.getElementById("chat");

    if (chat && chat.children.length === 0) {
        mostrarInicio();
    }
}


// ============================================================
// ELEMENTOS
// ============================================================

function obtenerPregunta() {
    return document.getElementById("pregunta");
}

function obtenerChat() {
    return document.getElementById("chat");
}

function obtenerEnviar() {
    return document.getElementById("enviar");
}


// ============================================================
// EVENTOS
// ============================================================

function configurarEventos() {

    const enviar = obtenerEnviar();
    const pregunta = obtenerPregunta();

    // BOTÓN ENVIAR
    if (enviar) {

        enviar.addEventListener("click", function () {
            responder();
        });

    }


    // ENTER
    if (pregunta) {

        pregunta.addEventListener("keydown", function (evento) {

            if (evento.key === "Enter") {

                evento.preventDefault();

                responder();

            }

        });

    }


    // ========================================================
    // BOTONES DE CURSOS DEL HTML
    // ========================================================

    document.querySelectorAll("[data-curso]").forEach(function (boton) {

        boton.addEventListener("click", function () {

            const curso = this.getAttribute("data-curso") || "";

            seleccionarCurso(normalizar(curso));

        });

    });


    // ========================================================
    // BOTÓN NUEVO CHAT
    // ========================================================

    const nuevoChat = document.getElementById("nuevoChat");

    if (nuevoChat) {

        nuevoChat.addEventListener("click", function () {

            reiniciarEduBot();

        });

    }


    // ========================================================
    // BOTONES VISUALES DE TEMAS
    // ========================================================

    document.addEventListener("click", function (evento) {

        const botonTema =
            evento.target.closest("[data-edubot-tema]");

        if (!botonTema) return;

        const valor =
            botonTema.getAttribute("data-edubot-tema");

        if (valor) {

            seleccionarTema(normalizar(valor));

        }

    });

}


// ============================================================
// MENSAJE INICIAL
// ============================================================

function mostrarInicio() {

    responderBot(`
        <div class="selector-futurista">

            <div class="selector-badge">
                ● EDU BOT IA
            </div>

            <div class="selector-icon">
                🤖
            </div>

            <h2>¡Hola! 👋</h2>

            <p>
                Soy <strong>Edu BOT</strong>.
            </p>

            <p>
                Estoy preparado para ayudarte a aprender.
            </p>

            <div class="selector-linea"></div>

            <h3>📚 Selecciona un curso para comenzar</h3>

        </div>

        <div class="lista-cursos-bot">

            📗 <strong>Matemática</strong><br>
            📘 <strong>Comunicación</strong><br>
            🧪 <strong>Ciencia y Tecnología</strong><br>
            🌎 <strong>Ciencias Sociales</strong><br>
            🇬🇧 <strong>Inglés</strong><br>
            💻 <strong>Computación</strong>

        </div>

        <br>

        ✏️ <strong>Escribe el nombre del curso.</strong>
    `);

}


// ============================================================
// RESPONDER
// ============================================================

function responder() {

    const pregunta = obtenerPregunta();

    if (!pregunta) {

        console.error("❌ No existe #pregunta");

        return;

    }


    const textoOriginal =
        pregunta.value.trim();


    if (!textoOriginal) {

        return;

    }


    const texto =
        normalizar(textoOriginal);


    mostrarUsuario(textoOriginal);


    pregunta.value = "";


    // ========================================================
    // CURSO
    // ========================================================

    if (estado === "curso") {

        seleccionarCurso(texto);

        return;

    }


    // ========================================================
    // GRADO
    // ========================================================

    if (estado === "grado") {

        const grado =
            detectarGrado(texto);


        if (!grado) {

            responderBot(`

                ❌ <strong>No reconocí ese grado.</strong>

                <br><br>

                Puedes escribir:

                <br><br>

                🟢 6 primaria<br>
                🔵 1 secundaria<br>
                🟣 2 secundaria<br>
                🟠 3 secundaria<br>
                🔴 4 secundaria<br>
                🟤 5 secundaria

                <br><br>

                También puedes escribir solamente:

                <strong>1, 2, 3, 4, 5 o 6</strong>.

            `);

            return;

        }


        gradoSeleccionado = grado;


        console.log(
            "🎓 Grado:",
            gradoSeleccionado
        );

        console.log(
            "📚 Curso:",
            cursoSeleccionado
        );


        cargarCurso();


        return;

    }


    // ========================================================
    // NIVEL DE INGLÉS
    // ========================================================

    if (estado === "nivel") {

        seleccionarNivelIngles(texto);

        return;

    }


    // ========================================================
    // TEMA
    // ========================================================

    if (estado === "tema") {

        seleccionarTema(texto);

        return;

    }


    // ========================================================
    // PREGUNTA
    // ========================================================

    if (estado === "pregunta") {

        buscarPreguntaEnTema(texto);

        return;

    }

}


// ============================================================
// SELECCIONAR CURSO
// ============================================================

function seleccionarCurso(texto) {

    texto = normalizar(texto);


    // ========================================================
    // CIENCIA Y TECNOLOGÍA
    // ========================================================

    if (

        texto === "cyt" ||

        texto.includes("ciencia y tecnologia") ||

        texto.includes("ciencia tecnologia") ||

        texto === "ciencia" ||

        texto.includes("tecnologia")

    ) {

        cursoSeleccionado = "cyt";

        gradoSeleccionado = "";

        nivelInglesSeleccionado = "";

        temaSeleccionado = "";

        datosTemaSeleccionado = null;

        estado = "grado";


        responderBot(`

            <div class="selector-futurista">

                <div class="selector-icon">
                    🧪
                </div>

                <h2>CIENCIA Y TECNOLOGÍA</h2>

                <p>
                    Curso seleccionado correctamente.
                </p>

                <div class="selector-linea"></div>

                <h3>🎓 Selecciona tu grado</h3>

            </div>

        `);


        mostrarGrados();

        return;

    }


    // ========================================================
    // MATEMÁTICA
    // ========================================================

    if (

        texto === "mat" ||

        texto === "mate" ||

        texto === "matematica" ||

        texto === "matematicas" ||

        texto.includes("matematica")

    ) {

        cursoSeleccionado = "matematica";

        gradoSeleccionado = "";

        nivelInglesSeleccionado = "";

        temaSeleccionado = "";

        datosTemaSeleccionado = null;

        estado = "grado";


        responderBot(`

            <div class="selector-futurista">

                <div class="selector-icon">
                    🧮
                </div>

                <h2>MATEMÁTICA</h2>

                <p>
                    Curso seleccionado correctamente.
                </p>

                <div class="selector-linea"></div>

                <h3>🎓 Selecciona tu grado</h3>

            </div>

        `);


        mostrarGrados();

        return;

    }


    // ========================================================
    // COMUNICACIÓN
    // ========================================================

    if (

        texto === "com" ||

        texto === "comunicacion" ||

        texto.includes("comunicacion")

    ) {

        cursoSeleccionado = "comunicacion";

        gradoSeleccionado = "";

        nivelInglesSeleccionado = "";

        temaSeleccionado = "";

        datosTemaSeleccionado = null;

        estado = "grado";


        responderBot(`

            <div class="selector-futurista">

                <div class="selector-icon">
                    📖
                </div>

                <h2>COMUNICACIÓN</h2>

                <p>
                    Curso seleccionado correctamente.
                </p>

                <div class="selector-linea"></div>

                <h3>🎓 Selecciona tu grado</h3>

            </div>

        `);


        mostrarGrados();

        return;

    }


    // ========================================================
    // CIENCIAS SOCIALES
    // IMPORTANTE: NO PIDE GRADO
    // ========================================================

    if (

        texto === "sociales" ||

        texto === "social" ||

        texto === "ciencias sociales" ||

        texto.includes("ciencias sociales") ||

        texto.includes("cienciasociales")

    ) {

        cursoSeleccionado = "sociales";

        gradoSeleccionado = "";

        nivelInglesSeleccionado = "";

        temaSeleccionado = "";

        datosTemaSeleccionado = null;

        estado = "tema";


        mostrarTemasSociales();

        return;

    }


    // ========================================================
    // INGLÉS
    // IMPORTANTE: NO PIDE GRADO
    // ========================================================

    if (

        texto === "ingles" ||

        texto === "inglés" ||

        texto === "english" ||

        texto.includes("idioma ingles") ||

        texto.includes("idioma inglés")

    ) {

        cursoSeleccionado = "ingles";

        gradoSeleccionado = "";

        nivelInglesSeleccionado = "";

        temaSeleccionado = "";

        datosTemaSeleccionado = null;

        estado = "nivel";


        mostrarNivelesIngles();

        return;

    }


    // ========================================================
    // COMPUTACIÓN
    // ========================================================

    if (

        texto === "computacion" ||

        texto === "computación" ||

        texto === "computadora" ||

        texto === "informatica" ||

        texto === "informática" ||

        texto.includes("computacion")

    ) {

        cursoSeleccionado = "computacion";

        gradoSeleccionado = "";

        nivelInglesSeleccionado = "";

        temaSeleccionado = "";

        datosTemaSeleccionado = null;

        estado = "grado";


        responderBot(`

            <div class="selector-futurista">

                <div class="selector-icon">
                    💻
                </div>

                <h2>COMPUTACIÓN</h2>

                <p>
                    Curso seleccionado correctamente.
                </p>

                <div class="selector-linea"></div>

                <h3>🎓 Selecciona tu grado</h3>

            </div>

        `);


        mostrarGrados();

        return;

    }


    // ========================================================
    // NO RECONOCIDO
    // ========================================================

    responderBot(`

        ❌ <strong>No reconocí ese curso.</strong>

        <br><br>

        Puedes escribir:

        <br><br>

        🧮 Matemática<br>
        📖 Comunicación<br>
        🧪 Ciencia y Tecnología<br>
        🌎 Ciencias Sociales<br>
        🇬🇧 Inglés<br>
        💻 Computación

    `);

}


// ============================================================
// MOSTRAR GRADOS
// ============================================================

function mostrarGrados() {

    responderBot(`

        <div class="grados-futurista">

            <h3>🎓 Selecciona tu grado</h3>

            <div class="grado-item">
                🟢 <strong>6° de Primaria</strong>
            </div>

            <div class="grado-item">
                🔵 <strong>1° de Secundaria</strong>
            </div>

            <div class="grado-item">
                🟣 <strong>2° de Secundaria</strong>
            </div>

            <div class="grado-item">
                🟠 <strong>3° de Secundaria</strong>
            </div>

            <div class="grado-item">
                🔴 <strong>4° de Secundaria</strong>
            </div>

            <div class="grado-item">
                🟤 <strong>5° de Secundaria</strong>
            </div>

            <br>

            ✏️ También puedes escribir solamente:

            <strong>1, 2, 3, 4, 5 o 6</strong>.

        </div>

    `);

}


// ============================================================
// DETECTAR GRADO
// ============================================================

function detectarGrado(texto) {

    texto = normalizar(texto);


    // 6 PRIMARIA

    if (

        texto === "6" ||

        texto.includes("6 primaria") ||

        texto.includes("6to primaria") ||

        texto.includes("6to de primaria") ||

        texto.includes("sexto primaria") ||

        texto.includes("sexto de primaria") ||

        texto.includes("6 grado") ||

        texto.includes("sexto grado")

    ) {

        return "6";

    }


    // 5 SECUNDARIA

    if (

        texto === "5" ||

        texto.includes("5 secundaria") ||

        texto.includes("5to secundaria") ||

        texto.includes("5to de secundaria") ||

        texto.includes("quinto secundaria") ||

        texto.includes("quinto de secundaria")

    ) {

        return "5";

    }


    // 4 SECUNDARIA

    if (

        texto === "4" ||

        texto.includes("4 secundaria") ||

        texto.includes("4to secundaria") ||

        texto.includes("4to de secundaria") ||

        texto.includes("cuarto secundaria") ||

        texto.includes("cuarto de secundaria")

    ) {

        return "4";

    }


    // 3 SECUNDARIA

    if (

        texto === "3" ||

        texto.includes("3 secundaria") ||

        texto.includes("3ro secundaria") ||

        texto.includes("3ro de secundaria") ||

        texto.includes("tercero secundaria") ||

        texto.includes("tercero de secundaria")

    ) {

        return "3";

    }


    // 2 SECUNDARIA

    if (

        texto === "2" ||

        texto.includes("2 secundaria") ||

        texto.includes("2do secundaria") ||

        texto.includes("2do de secundaria") ||

        texto.includes("segundo secundaria") ||

        texto.includes("segundo de secundaria")

    ) {

        return "2";

    }


    // 1 SECUNDARIA

    if (

        texto === "1" ||

        texto.includes("1 secundaria") ||

        texto.includes("1ro secundaria") ||

        texto.includes("1ro de secundaria") ||

        texto.includes("primero secundaria") ||

        texto.includes("primero de secundaria")

    ) {

        return "1";

    }


    return null;

}


// ============================================================
// INGLÉS - NIVELES
// ============================================================

function mostrarNivelesIngles() {

    estado = "nivel";


    responderBot(`

        <div class="selector-futurista">

            <div class="selector-badge">
                ● EDU BOT IA
            </div>

            <div class="selector-icon">
                🇬🇧
            </div>

            <h2>INGLÉS</h2>

            <p>
                No necesitas seleccionar grado.
            </p>

            <div class="selector-linea"></div>

            <h3>🌐 Selecciona tu nivel</h3>

        </div>

        <div class="niveles-ingles">

            <div class="nivel-item">
                🟢 <strong>1. Básico</strong>
            </div>

            <div class="nivel-item">
                🔵 <strong>2. Intermedio</strong>
            </div>

            <div class="nivel-item">
                🟣 <strong>3. Avanzado</strong>
            </div>

        </div>

        <br>

        ✏️ Escribe <strong>básico</strong>,
        <strong>intermedio</strong> o
        <strong>avanzado</strong>.

    `);

}


// ============================================================
// SELECCIONAR NIVEL INGLÉS
// ============================================================

function seleccionarNivelIngles(texto) {

    texto = normalizar(texto);


    let nivel = null;


    if (

        texto === "1" ||

        texto === "basico" ||

        texto.includes("basico") ||

        texto.includes("nivel basico")

    ) {

        nivel = "basico";

    }


    else if (

        texto === "2" ||

        texto === "intermedio" ||

        texto.includes("intermedio") ||

        texto.includes("nivel intermedio")

    ) {

        nivel = "intermedio";

    }


    else if (

        texto === "3" ||

        texto === "avanzado" ||

        texto.includes("avanzado") ||

        texto.includes("nivel avanzado")

    ) {

        nivel = "avanzado";

    }


    if (!nivel) {

        responderBot(`

            ❌ <strong>No reconocí ese nivel.</strong>

            <br><br>

            Elige:

            <br><br>

            🟢 <strong>1. Básico</strong><br>
            🔵 <strong>2. Intermedio</strong><br>
            🟣 <strong>3. Avanzado</strong>

        `);

        return;

    }


    nivelInglesSeleccionado = nivel;

    temaSeleccionado = "";

    datosTemaSeleccionado = null;


    const datos = obtenerDatosCurso();


    if (!datos) {

        responderBot(`

            ❌ <strong>No encontré los contenidos de Inglés ${capitalizar(nivel)}.</strong>

            <br><br>

            Verifica que el archivo correspondiente esté cargado antes de
            <strong>app.js</strong>.

        `);

        return;

    }


    estado = "tema";


    responderBot(`

        <div class="tema-seleccionado-futurista">

            <span>✦ NIVEL SELECCIONADO</span>

            <h2>
                🇬🇧 Inglés ${capitalizar(nivel)}
            </h2>

            <p>
                Ahora selecciona el tema que deseas estudiar.
            </p>

        </div>

    `);


    mostrarTemas(datos);

}


// ============================================================
// CIENCIAS SOCIALES
// SIN GRADO
// ============================================================

function mostrarTemasSociales() {

    estado = "tema";


    const temas = [

        {
            numero: "1",
            nombre: "Historia del Perú",
            icono: "🇵🇪",
            datos: typeof historiaPeru1 !== "undefined"
                ? historiaPeru1
                : null
        },

        {
            numero: "2",
            nombre: "Historia Universal",
            icono: "🌎",
            datos: typeof historiaUniversal1 !== "undefined"
                ? historiaUniversal1
                : null
        },

        {
            numero: "3",
            nombre: "Economía",
            icono: "💰",
            datos: typeof economia1 !== "undefined"
                ? economia1
                : null
        }

    ];


    responderBot(`

        <div class="selector-futurista">

            <div class="selector-badge">
                ● EDU BOT IA
            </div>

            <div class="selector-icon">
                🌎
            </div>

            <h2>CIENCIAS SOCIALES</h2>

            <p>
                No necesitas seleccionar grado.
            </p>

            <div class="selector-linea"></div>

            <h3>🧠 Selecciona un tema</h3>

        </div>

    `);


    temas.forEach(function (tema) {

        responderBot(`

            <div
                class="tema-futurista tema-boton"
                data-edubot-tema="${tema.numero}"
            >

                <span class="tema-numero">
                    ${tema.numero}
                </span>

                <span class="tema-icono">
                    ${tema.icono}
                </span>

                <strong>
                    ${escapeHTML(tema.nombre)}
                </strong>

                <span class="tema-flecha">
                    →
                </span>

            </div>

        `);

    });


    responderBot(`

        <br>

        ✏️ <strong>
            También puedes escribir el número o nombre del tema.
        </strong>

    `);

}


// ============================================================
// CARGAR CURSO
// ============================================================

function cargarCurso() {


    // ========================================================
    // CIENCIA Y TECNOLOGÍA
    // ========================================================

    if (cursoSeleccionado === "cyt") {

        cargarCienciaTecnologia(
            gradoSeleccionado
        );

        return;

    }


    // ========================================================
    // SOCIALES
    // ========================================================

    if (cursoSeleccionado === "sociales") {

        mostrarTemasSociales();

        return;

    }


    // ========================================================
    // RESTO
    // ========================================================

    const datos =
        obtenerDatosCurso();


    if (!datos) {

        responderBot(`

            ❌ <strong>No encontré los contenidos.</strong>

            <br><br>

            Curso:

            <strong>
                ${nombreCurso(cursoSeleccionado)}
            </strong>

            <br><br>

            ${gradoSeleccionado
                ? `Grado: <strong>${nombreGrado(gradoSeleccionado)}</strong>`
                : `Nivel: <strong>${capitalizar(nivelInglesSeleccionado)}</strong>`
            }

            <br><br>

            Verifica que el archivo JS correspondiente esté cargado
            antes de <strong>app.js</strong>.

        `);

        return;

    }


    estado = "tema";

    temaSeleccionado = "";

    datosTemaSeleccionado = null;


    mostrarEncabezadoTemas(datos);

}


// ============================================================
// CIENCIA Y TECNOLOGÍA
// ============================================================

function cargarCienciaTecnologia(grado) {

    if (typeof cyt === "undefined") {

        responderBot(`

            ❌ <strong>No se cargó cyt.js.</strong>

            <br><br>

            Verifica que:

            <strong>cyt.js</strong>

            esté cargado antes de

            <strong>app.js</strong>.

        `);

        return;

    }


    if (!cyt[grado]) {

        responderBot(`

            ❌ <strong>No encontré el grado ${grado} en cyt.js.</strong>

        `);

        return;

    }


    const datos = cyt[grado];


    estado = "tema";

    temaSeleccionado = "";

    datosTemaSeleccionado = null;


    mostrarEncabezadoTemas(datos);

}


// ============================================================
// OBTENER DATOS DEL CURSO
// ============================================================

function obtenerDatosCurso() {

    let datos = null;


    // ========================================================
    // MATEMÁTICA
    // ========================================================

    if (cursoSeleccionado === "matematica") {

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


        else if (gradoSeleccionado === "2") {

            if (typeof aritmetica2 !== "undefined")
                temas.aritmetica = aritmetica2;

            if (typeof algebra2 !== "undefined")
                temas.algebra = algebra2;

            if (typeof geometria2 !== "undefined")
                temas.geometria = geometria2;

            if (typeof estadistica2 !== "undefined")
                temas.estadistica = estadistica2;

        }


        else if (gradoSeleccionado === "3") {

            if (typeof aritmetica3 !== "undefined")
                temas.aritmetica = aritmetica3;

            if (typeof algebra3 !== "undefined")
                temas.algebra = algebra3;

            if (typeof geometria3 !== "undefined")
                temas.geometria = geometria3;

            if (typeof estadistica3 !== "undefined")
                temas.estadistica = estadistica3;

        }


        else if (gradoSeleccionado === "4") {

            if (typeof aritmetica4 !== "undefined")
                temas.aritmetica = aritmetica4;

            if (typeof algebra4 !== "undefined")
                temas.algebra = algebra4;

            if (typeof geometria4 !== "undefined")
                temas.geometria = geometria4;

            if (typeof estadistica4 !== "undefined")
                temas.estadistica = estadistica4;

        }


        else if (gradoSeleccionado === "5") {

            if (typeof aritmetica5 !== "undefined")
                temas.aritmetica = aritmetica5;

            if (typeof algebra5 !== "undefined")
                temas.algebra = algebra5;

            if (typeof geometria5 !== "undefined")
                temas.geometria = geometria5;

            if (typeof estadistica5 !== "undefined")
                temas.estadistica = estadistica5;

        }


        else if (gradoSeleccionado === "6") {

            if (typeof aritmetica6 !== "undefined")
                temas.aritmetica = aritmetica6;

            if (typeof algebra6 !== "undefined")
                temas.algebra = algebra6;

            // Si no existe algebra6, utiliza algebra5
            if (
                typeof algebra6 === "undefined" &&
                typeof algebra5 !== "undefined"
            ) {

                temas.algebra = algebra5;

            }

            if (typeof geometria6 !== "undefined")
                temas.geometria = geometria6;

            if (typeof estadistica6 !== "undefined")
                temas.estadistica = estadistica6;

        }


        if (Object.keys(temas).length > 0) {

            datos = temas;

        }


        // Si tienes un objeto matematica global
        if (!datos && typeof matematica !== "undefined") {

            datos =
                matematica[gradoSeleccionado] ||
                matematica;

        }


        // Si tienes matematicas global
        if (!datos && typeof matematicas !== "undefined") {

            datos =
                matematicas[gradoSeleccionado] ||
                matematicas;

        }

    }


    // ========================================================
    // COMUNICACIÓN
    // ========================================================

    if (cursoSeleccionado === "comunicacion") {

        if (typeof comunicacion !== "undefined") {

            datos =
                comunicacion[gradoSeleccionado] ||
                comunicacion;

        }

        else if (typeof comunicacion1 !== "undefined") {

            datos =
                comunicacion1[gradoSeleccionado] ||
                comunicacion1;

        }

    }


    // ========================================================
    // INGLÉS
    // ========================================================

    if (cursoSeleccionado === "ingles") {

        if (
            nivelInglesSeleccionado === "basico" &&
            typeof inglesBasico !== "undefined"
        ) {

            datos = inglesBasico;

        }


        else if (
            nivelInglesSeleccionado === "intermedio" &&
            typeof inglesIntermedio !== "undefined"
        ) {

            datos = inglesIntermedio;

        }


        else if (
            nivelInglesSeleccionado === "avanzado" &&
            typeof inglesAvanzado !== "undefined"
        ) {

            datos = inglesAvanzado;

        }


        // Posible objeto ingles
        if (!datos && typeof ingles !== "undefined") {

            datos =
                ingles[nivelInglesSeleccionado] ||
                ingles;

        }

    }


    // ========================================================
    // COMPUTACIÓN
    // ========================================================

    if (cursoSeleccionado === "computacion") {

        if (typeof computacion !== "undefined") {

            datos =
                computacion[gradoSeleccionado] ||
                computacion;

        }

    }


    return datos;

}


// ============================================================
// MOSTRAR ENCABEZADO DE TEMAS
// ============================================================

function mostrarEncabezadoTemas(datos) {

    const informacionSecundaria =

        gradoSeleccionado

            ? nombreGrado(gradoSeleccionado)

            : nivelInglesSeleccionado

                ? `Nivel ${capitalizar(nivelInglesSeleccionado)}`

                : "";


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
                ${informacionSecundaria}
            </p>

            <div class="selector-linea"></div>

            <h3>
                🧠 Selecciona un tema
            </h3>

        </div>

    `);


    mostrarTemas(datos);

}


// ============================================================
// OBTENER LISTA DE TEMAS
// ============================================================

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


        lista.push({

            clave: clave,

            titulo: convertirNombre(clave),

            contenido: principal[clave]

        });

    }


    return lista;

}


// ============================================================
// MOSTRAR TEMAS
// ============================================================

function mostrarTemas(objeto) {

    const lista =
        obtenerListaTemas(objeto);


    if (!lista.length) {

        responderBot(`

            ❌ <strong>
                No encontré temas disponibles.
            </strong>

        `);

        return;

    }


    const iconos = [

        "📘",
        "🔢",
        "📐",
        "📊",
        "🧪",
        "🌎",
        "💡",
        "📝",
        "🎯",
        "📚"

    ];


    lista.forEach(function (tema, indice) {

        const numero =
            String(indice + 1).padStart(2, "0");


        const icono =
            iconos[indice % iconos.length];


        responderBot(`

            <div
                class="tema-futurista tema-boton"
                data-edubot-tema="${indice + 1}"
            >

                <span class="tema-numero">
                    ${numero}
                </span>

                <span class="tema-icono">
                    ${icono}
                </span>

                <strong>
                    ${escapeHTML(tema.titulo)}
                </strong>

                <span class="tema-flecha">
                    →
                </span>

            </div>

        `);

    });


    responderBot(`

        <br>

        ✏️ <strong>
            Escribe el número o nombre del tema.
        </strong>

    `);

}


// ============================================================
// SELECCIONAR TEMA
// ============================================================

function seleccionarTema(texto) {

    texto = normalizar(texto);


    // ========================================================
    // SOCIALES
    // ========================================================

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
            temas.find(function (tema) {

                return (

                    texto === tema.numero ||

                    tema.nombres.some(function (nombre) {

                        const n =
                            normalizar(nombre);

                        return (

                            texto === n ||

                            texto.includes(n) ||

                            n.includes(texto)

                        );

                    })

                );

            });


        if (!elegido) {

            responderBot(`

                ❌ <strong>
                    No reconocí ese tema.
                </strong>

                <br><br>

                Elige:

                <br><br>

                🇵🇪 <strong>1. Historia del Perú</strong><br>

                🌎 <strong>2. Historia Universal</strong><br>

                💰 <strong>3. Economía</strong>

            `);

            return;

        }


        temaSeleccionado =
            elegido.titulo;

        datosTemaSeleccionado =
            elegido.datos;

    }


    // ========================================================
    // INGLÉS
    // ========================================================

    else if (cursoSeleccionado === "ingles") {

        const datos =
            obtenerDatosCurso();


        const lista =
            obtenerListaTemas(datos);


        if (!lista.length) {

            responderBot(`

                ❌ <strong>
                    No encontré temas para este nivel de Inglés.
                </strong>

            `);

            return;

        }


        const elegido =
            buscarElementoLista(
                texto,
                lista
            );


        if (!elegido) {

            responderBot(`

                ❌ <strong>
                    No reconocí ese tema.
                </strong>

                <br><br>

                Escribe el número o nombre del tema
                que aparece en la lista.

            `);

            return;

        }


        temaSeleccionado =
            elegido.titulo;

        datosTemaSeleccionado =
            elegido.contenido;

    }


    // ========================================================
    // RESTO DE CURSOS
    // ========================================================

    else {

        const datos =
            obtenerDatosCurso();


        const lista =
            obtenerListaTemas(datos);


        if (!lista.length) {

            responderBot(`

                ❌ <strong>
                    No encontré temas disponibles.
                </strong>

            `);

            return;

        }


        const elegido =
            buscarElementoLista(
                texto,
                lista
            );


        if (!elegido) {

            responderBot(`

                ❌ <strong>
                    No reconocí ese tema.
                </strong>

                <br><br>

                Escribe el número o nombre exactamente
                como aparece en la lista.

            `);

            return;

        }


        temaSeleccionado =
            elegido.titulo;

        datosTemaSeleccionado =
            elegido.contenido;

    }


    // ========================================================
    // COMPROBAR DATOS
    // ========================================================

    if (!datosTemaSeleccionado) {

        responderBot(`

            ❌ <strong>
                El tema fue seleccionado,
                pero no encontré su contenido.
            </strong>

            <br><br>

            Verifica que el archivo JS del tema
            esté cargado antes de <strong>app.js</strong>.

        `);

        return;

    }


    // ========================================================
    // PASAR A PREGUNTAS
    // ========================================================

    estado = "pregunta";


    const explicacion =
        formatearContenido(
            datosTemaSeleccionado
        );


    const informacionCurso =

        cursoSeleccionado === "ingles"

            ? `Inglés · ${capitalizar(nivelInglesSeleccionado)}`

            : cursoSeleccionado === "sociales"

                ? "Ciencias Sociales"

                : `${nombreCurso(cursoSeleccionado)} · ${nombreGrado(gradoSeleccionado)}`;


    responderBot(`

        <div class="tema-seleccionado-futurista">

            <span>
                ✦ TEMA SELECCIONADO
            </span>

            <h2>
                ${escapeHTML(temaSeleccionado)}
            </h2>

            <p>
                ${informacionCurso}
            </p>

        </div>

        <div class="explicacion-futurista">

            <div class="selector-badge">
                📖 EXPLICACIÓN
            </div>

            <h3>
                Aprende sobre ${escapeHTML(temaSeleccionado)}
            </h3>

            <div class="contenido-explicacion">
                ${explicacion}
            </div>

        </div>

        <br>

        💬 <strong>
            Ahora puedes hacerme preguntas sobre este tema.
        </strong>

    `);

}


// ============================================================
// BUSCAR ELEMENTO DE UNA LISTA
// ============================================================

function buscarElementoLista(texto, lista) {

    let indice = null;


    if (/^\d+$/.test(texto)) {

        indice =
            Number(texto) - 1;

    }


    if (
        indice !== null &&
        lista[indice]
    ) {

        return lista[indice];

    }


    return lista.find(function (tema) {

        const clave =
            normalizar(tema.clave);

        const titulo =
            normalizar(tema.titulo);


        return (

            texto === clave ||

            texto === titulo ||

            texto.includes(clave) ||

            texto.includes(titulo) ||

            clave.includes(texto) ||

            titulo.includes(texto)

        );

    }) || null;

}


// ============================================================
// BUSCAR PREGUNTA
// ============================================================

function buscarPreguntaEnTema(texto) {

    if (!datosTemaSeleccionado) {

        responderBot(`

            ❌ <strong>
                No hay un tema seleccionado.
            </strong>

        `);

        estado = "tema";

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

                <h3>
                    📚 ${escapeHTML(resultado.titulo)}
                </h3>

                <div>
                    ${resultado.contenido}
                </div>

            </div>

        `);

        return;

    }


    responderBot(`

        ❌ <strong>
            No encontré una respuesta exacta.
        </strong>

        <br><br>

        Tu pregunta está dentro de:

        <strong>
            ${escapeHTML(temaSeleccionado)}
        </strong>

        <br><br>

        Prueba escribiendo otra pregunta relacionada
        con este tema.

    `);

}


// ============================================================
// BUSCADOR RECURSIVO
// ============================================================

function buscarRecursivo(objeto, texto) {

    if (!objeto) {

        return null;

    }


    // ========================================================
    // STRING
    // ========================================================

    if (typeof objeto === "string") {

        const contenido =
            normalizar(objeto);


        if (

            contenido.includes(texto) ||

            texto.includes(contenido)

        ) {

            return {

                titulo: objeto,

                contenido: objeto

            };

        }


        return null;

    }


    // ========================================================
    // ARRAY
    // ========================================================

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


    // ========================================================
    // OBJETO
    // ========================================================

    if (
        typeof objeto === "object" &&
        objeto !== null
    ) {

        for (const clave in objeto) {

            if (clave === "nombre") {

                continue;

            }


            const claveNormalizada =
                normalizar(
                    convertirNombre(clave)
                );


            // Buscar por nombre de categoría

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


            // Buscar dentro

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


// ============================================================
// FORMATEAR CONTENIDO
// ============================================================

function formatearContenido(contenido) {

    if (typeof contenido === "string") {

        return contenido;

    }


    if (Array.isArray(contenido)) {

        return contenido

            .map(function (item) {

                if (
                    typeof item === "string"
                ) {

                    return `📌 ${escapeHTML(item)}`;

                }


                return formatearContenido(item);

            })

            .join("<br>");

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
                        📌 ${escapeHTML(convertirNombre(clave))}
                    </strong>

                    <br>

                    ${formatearContenido(
                        contenido[clave]
                    )}

                </div>

            `;

        }


        return resultado;

    }


    return "No hay contenido disponible.";

}


// ============================================================
// NORMALIZAR
// ============================================================

function normalizar(texto) {

    return String(texto || "")

        .toLowerCase()

        .normalize("NFD")

        .replace(
            /[\u0300-\u036f]/g,
            ""
        )

        .replace(
            /\s+/g,
            " "
        )

        .trim();

}


// ============================================================
// CONVERTIR NOMBRES
// ============================================================

function convertirNombre(texto) {

    if (!texto) {

        return "";

    }


    return String(texto)

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
            function (letra) {

                return letra.toUpperCase();

            }
        )

        .trim();

}


// ============================================================
// NOMBRE CURSO
// ============================================================

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


// ============================================================
// NOMBRE GRADO
// ============================================================

function nombreGrado(grado) {

    const nombres = {

        "6":
            "6° de Primaria",

        "1":
            "1° de Secundaria",

        "2":
            "2° de Secundaria",

        "3":
            "3° de Secundaria",

        "4":
            "4° de Secundaria",

        "5":
            "5° de Secundaria"

    };


    return nombres[grado] ||
        "Grado desconocido";

}


// ============================================================
// ICONO CURSO
// ============================================================

function iconoCursoActual() {

    const iconos = {

        matematica:
            "🧮",

        comunicacion:
            "📖",

        cyt:
            "🧪",

        sociales:
            "🌎",

        ingles:
            "🇬🇧",

        computacion:
            "💻"

    };


    return iconos[cursoSeleccionado] ||
        "📚";

}


// ============================================================
// CAPITALIZAR
// ============================================================

function capitalizar(texto) {

    if (!texto) {

        return "";

    }


    return texto
        .charAt(0)
        .toUpperCase() +
        texto.slice(1);

}


// ============================================================
// MOSTRAR USUARIO
// ============================================================

function mostrarUsuario(texto) {

    const chat =
        obtenerChat();


    if (!chat) {

        return;

    }


    const mensaje =
        document.createElement("p");


    mensaje.className =
        "mensaje-usuario";


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


// ============================================================
// MOSTRAR BOT
// ============================================================

function responderBot(texto) {

    const chat =
        obtenerChat();


    if (!chat) {

        console.log(
            "🤖 BOT:",
            texto
        );

        return;

    }


    const mensaje =
        document.createElement("div");


    mensaje.className =
        "mensaje-bot";


    mensaje.innerHTML =
        texto;


    chat.appendChild(mensaje);


    chat.scrollTop =
        chat.scrollHeight;

}


// ============================================================
// ESCAPAR HTML
// ============================================================

function escapeHTML(texto) {

    const div =
        document.createElement("div");


    div.textContent =
        String(texto ?? "");


    return div.innerHTML;

}


// ============================================================
// NUEVO CHAT
// ============================================================

function reiniciarEduBot() {

    estado = "curso";

    cursoSeleccionado = "";

    gradoSeleccionado = "";

    nivelInglesSeleccionado = "";

    temaSeleccionado = "";

    datosTemaSeleccionado = null;


    const chat =
        obtenerChat();


    if (chat) {

        chat.innerHTML = "";

    }


    const pregunta =
        obtenerPregunta();


    if (pregunta) {

        pregunta.value = "";

        pregunta.focus();

    }


    mostrarInicio();


    console.log(
        "🔄 Edu BOT reiniciado"
    );

}


// ============================================================
// FUNCIONES GLOBALES
// ============================================================

// Estas funciones quedan disponibles
// para botones HTML u otros archivos.

window.seleccionarCurso =
    seleccionarCurso;

window.reiniciarEduBot =
    reiniciarEduBot;

window.responder =
    responder;

window.seleccionarTema =
    seleccionarTema;

window.mostrarInicio =
    mostrarInicio;

window.mostrarTemasSociales =
    mostrarTemasSociales;

window.mostrarNivelesIngles =
    mostrarNivelesIngles;
