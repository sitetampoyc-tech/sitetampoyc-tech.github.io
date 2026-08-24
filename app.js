// ======================================================
// EDU BOT IA
// SISTEMA:
// CURSO → GRADO/NIVEL → TEMAS → PREGUNTAS
// ======================================================


// ======================================================
// VARIABLES GLOBALES
// ======================================================

let estado = "curso";

let cursoSeleccionado = "";

let gradoSeleccionado = "";

let nivelInglesSeleccionado = "";

let temaSeleccionado = "";

let datosTemaSeleccionado = null;


// ======================================================
// ELEMENTOS DEL HTML
// ======================================================

const pregunta = document.getElementById("pregunta");

const enviar = document.getElementById("enviar");

const chat = document.getElementById("chat");


// ======================================================
// BOTÓN ENVIAR
// ======================================================

if (enviar) {

    enviar.addEventListener("click", function () {

        responder();

    });

}


// ======================================================
// ENTER PARA ENVIAR
// ======================================================

if (pregunta) {

    pregunta.addEventListener("keydown", function (e) {

        if (e.key === "Enter") {

            e.preventDefault();

            responder();

        }

    });

}


// ======================================================
// RESPONDER
// ======================================================

function responder() {

    if (!pregunta) return;


    const textoOriginal = pregunta.value.trim();


    if (!textoOriginal) return;


    const texto = normalizar(textoOriginal);


    mostrarUsuario(textoOriginal);


    pregunta.value = "";


    // ==================================================
    // ESTADO CURSO
    // ==================================================

    if (estado === "curso") {

        seleccionarCurso(texto);

        return;

    }


    // ==================================================
    // ESTADO GRADO
    // SOLO MATEMÁTICA / COMUNICACIÓN / CYT
    // ==================================================

    if (estado === "grado") {

        const grado = detectarGrado(texto);


        if (!grado) {

            responderBot(`

                ❌ <strong>No reconocí ese grado.</strong>

                <br><br>

                Puedes escribir:

                <br><br>

                🟢 6 primaria

                <br>

                🔵 1 secundaria

                <br>

                🟣 2 secundaria

                <br>

                🟠 3 secundaria

                <br>

                🔴 4 secundaria

                <br>

                🟤 5 secundaria

                <br><br>

                ✏️ También puedes escribir solamente:

                <strong>1</strong>, <strong>2</strong>,
                <strong>3</strong>, <strong>4</strong>,
                <strong>5</strong> o <strong>6</strong>.

            `);

            return;

        }


        gradoSeleccionado = grado;


        // ------------------------------------------------
        // SEGURIDAD
        // ------------------------------------------------
        // Sociales e Inglés NO deberían llegar aquí.
        // Pero si llegan, los redirigimos correctamente.
        // ------------------------------------------------

        if (cursoSeleccionado === "sociales") {

            cargarSociales();

            return;

        }


        if (cursoSeleccionado === "ingles") {

            estado = "nivel";

            mostrarNivelesIngles();

            return;

        }


        // ------------------------------------------------
        // RESTO DE CURSOS
        // ------------------------------------------------

        cargarCurso();

        return;

    }


    // ==================================================
    // NIVEL DE INGLÉS
    // ==================================================

    if (estado === "nivel") {

        seleccionarNivelIngles(texto);

        return;

    }


    // ==================================================
    // TEMA
    // ==================================================

    if (estado === "tema") {

        seleccionarTema(texto);

        return;

    }


    // ==================================================
    // PREGUNTA
    // ==================================================

    if (estado === "pregunta") {

        buscarPreguntaEnTema(texto);

        return;

    }

}


// ======================================================
// SELECCIONAR CURSO
// ======================================================

function seleccionarCurso(texto) {

    texto = normalizar(texto);


    // ==================================================
    // MATEMÁTICA
    // ==================================================

    if (

        texto === "mat" ||

        texto === "mate" ||

        texto === "matematica" ||

        texto === "matematicas" ||

        texto.includes("matematica")

    ) {

        iniciarCurso(
            "matematica",
            "🧮",
            "MATEMÁTICA"
        );

        return;

    }


    // ==================================================
    // COMUNICACIÓN
    // ==================================================

    if (

        texto === "com" ||

        texto === "comunicacion" ||

        texto.includes("comunicacion")

    ) {

        iniciarCurso(
            "comunicacion",
            "📖",
            "COMUNICACIÓN"
        );

        return;

    }


    // ==================================================
    // CIENCIA Y TECNOLOGÍA
    // ==================================================

    if (

        texto === "cyt" ||

        texto === "ciencia" ||

        texto === "ciencias" ||

        texto.includes("ciencia y tecnologia") ||

        texto.includes("ciencia tecnologia") ||

        texto.includes("ciencia y tecnologia") ||

        texto.includes("tecnologia")

    ) {

        iniciarCurso(
            "cyt",
            "🧪",
            "CIENCIA Y TECNOLOGÍA"
        );

        return;

    }


    // ==================================================
    // CIENCIAS SOCIALES
    // SIN GRADO
    // ==================================================

    if (

        texto === "social" ||

        texto === "sociales" ||

        texto === "social" ||

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


    // ==================================================
    // INGLÉS
    // SIN GRADO
    // ==================================================

    if (

        texto === "ingles" ||

        texto === "inglés" ||

        texto === "english" ||

        texto.includes("idioma ingles") ||

        texto.includes("idioma inglés")

    ) {

        iniciarCurso(
            "ingles",
            "🇬🇧",
            "INGLÉS"
        );

        return;

    }


    // ==================================================
    // CURSO NO RECONOCIDO
    // ==================================================

    responderBot(`

        ❌ <strong>No reconocí ese curso.</strong>

        <br><br>

        Puedes elegir uno de estos:

        <br><br>

        🧮 <strong>Matemática</strong>

        <br>

        📖 <strong>Comunicación</strong>

        <br>

        🧪 <strong>Ciencia y Tecnología</strong>

        <br>

        🌎 <strong>Ciencias Sociales</strong>

        <br>

        🇬🇧 <strong>Inglés</strong>

        <br><br>

        ✏️ Escribe el nombre del curso.

    `);

}


// ======================================================
// INICIAR CURSO
// ======================================================

function iniciarCurso(curso, icono, nombre) {

    cursoSeleccionado = curso;

    gradoSeleccionado = "";

    nivelInglesSeleccionado = "";

    temaSeleccionado = "";

    datosTemaSeleccionado = null;


    // ==================================================
    // INGLÉS
    // NO PIDE GRADO
    // ==================================================

    if (curso === "ingles") {

        estado = "nivel";

        mostrarNivelesIngles();

        return;

    }


    // ==================================================
    // SOCIALES
    // NO PIDE GRADO
    // ==================================================

    if (curso === "sociales") {

        estado = "tema";

        cargarSociales();

        return;

    }


    // ==================================================
    // MATEMÁTICA / COMUNICACIÓN / CYT
    // SÍ PIDEN GRADO
    // ==================================================

    estado = "grado";


    responderBot(`

        <div class="selector-futurista">

            <div class="selector-badge">
                ● EDU BOT IA
            </div>

            <div class="selector-icon">
                ${icono}
            </div>

            <h2>
                ${nombre}
            </h2>

            <div class="selector-linea"></div>

            <h3>
                🎓 Selecciona tu grado
            </h3>

            <p>
                Primero elegiremos tu grado.
                Después te mostraré únicamente
                los temas disponibles.
            </p>

        </div>

    `);


    mostrarGrados();

}


// ======================================================
// MOSTRAR GRADOS
// ======================================================

function mostrarGrados() {

    responderBot(`

        <div class="grados-futuristas">

            <div class="grado-item">
                <span>01</span>
                🟢 6° de Primaria
            </div>

            <div class="grado-item">
                <span>02</span>
                🔵 1° de Secundaria
            </div>

            <div class="grado-item">
                <span>03</span>
                🟣 2° de Secundaria
            </div>

            <div class="grado-item">
                <span>04</span>
                🟠 3° de Secundaria
            </div>

            <div class="grado-item">
                <span>05</span>
                🔴 4° de Secundaria
            </div>

            <div class="grado-item">
                <span>06</span>
                🟤 5° de Secundaria
            </div>

        </div>

        <br>

        ✏️ <strong>Escribe el grado.</strong>

        <br><br>

        Ejemplos:

        <strong>2 secundaria</strong>

        <br>

        <strong>segundo</strong>

        <br>

        <strong>2</strong>

    `);

}


// ======================================================
// DETECTAR GRADO
// ======================================================

function detectarGrado(texto) {

    texto = normalizar(texto);


    // ==================================================
    // 6 PRIMARIA
    // ==================================================

    if (

        texto === "6" ||

        texto.includes("6 primaria") ||

        texto.includes("6to primaria") ||

        texto.includes("6to de primaria") ||

        texto.includes("6 grado") ||

        texto.includes("sexto") ||

        texto.includes("sexto primaria") ||

        texto.includes("sexto de primaria") ||

        texto.includes("sexto grado")

    ) {

        return "6";

    }


    // ==================================================
    // 5 SECUNDARIA
    // ==================================================

    if (

        texto === "5" ||

        texto.includes("5 secundaria") ||

        texto.includes("5to secundaria") ||

        texto.includes("5to de secundaria") ||

        texto.includes("quinto") ||

        texto.includes("quinto secundaria") ||

        texto.includes("quinto de secundaria")

    ) {

        return "5";

    }


    // ==================================================
    // 4 SECUNDARIA
    // ==================================================

    if (

        texto === "4" ||

        texto.includes("4 secundaria") ||

        texto.includes("4to secundaria") ||

        texto.includes("4to de secundaria") ||

        texto.includes("cuarto") ||

        texto.includes("cuarto secundaria") ||

        texto.includes("cuarto de secundaria")

    ) {

        return "4";

    }


    // ==================================================
    // 3 SECUNDARIA
    // ==================================================

    if (

        texto === "3" ||

        texto.includes("3 secundaria") ||

        texto.includes("3ro secundaria") ||

        texto.includes("3ro de secundaria") ||

        texto.includes("tercero") ||

        texto.includes("tercero secundaria") ||

        texto.includes("tercero de secundaria")

    ) {

        return "3";

    }


    // ==================================================
    // 2 SECUNDARIA
    // ==================================================

    if (

        texto === "2" ||

        texto.includes("2 secundaria") ||

        texto.includes("2do secundaria") ||

        texto.includes("2do de secundaria") ||

        texto.includes("segundo") ||

        texto.includes("segundo secundaria") ||

        texto.includes("segundo de secundaria")

    ) {

        return "2";

    }


    // ==================================================
    // 1 SECUNDARIA
    // ==================================================

    if (

        texto === "1" ||

        texto.includes("1 secundaria") ||

        texto.includes("1ro secundaria") ||

        texto.includes("1ro de secundaria") ||

        texto.includes("primero") ||

        texto.includes("primero secundaria") ||

        texto.includes("primero de secundaria")

    ) {

        return "1";

    }


    return null;

}


// ======================================================
// CARGAR CURSO
// ======================================================

function cargarCurso() {


    // ==================================================
    // CIENCIA Y TECNOLOGÍA
    // ==================================================

    if (cursoSeleccionado === "cyt") {

        cargarCienciaTecnologia();

        return;

    }


    // ==================================================
    // CIENCIAS SOCIALES
    // ==================================================

    if (cursoSeleccionado === "sociales") {

        cargarSociales();

        return;

    }


    // ==================================================
    // INGLÉS
    // ==================================================

    if (cursoSeleccionado === "ingles") {

        const datos = obtenerDatosCurso();


        if (!datos) {

            mostrarErrorArchivoIngles();

            return;

        }


        estado = "tema";

        temaSeleccionado = "";

        datosTemaSeleccionado = null;


        mostrarEncabezadoTemas(datos);

        return;

    }


    // ==================================================
    // RESTO
    // ==================================================

    const datos = obtenerDatosCurso();


    if (!datos) {

        responderBot(`

            ❌ <strong>No encontré los contenidos.</strong>

            <br><br>

            Curso:

            <strong>
                ${nombreCurso(cursoSeleccionado)}
            </strong>

            <br><br>

            Grado:

            <strong>
                ${nombreGrado(gradoSeleccionado)}
            </strong>

            <br><br>

            Verifica que los archivos JS
            correspondientes estén cargados
            antes de <strong>app.js</strong>.

        `);

        return;

    }


    estado = "tema";

    temaSeleccionado = "";

    datosTemaSeleccionado = null;


    mostrarEncabezadoTemas(datos);

}


// ======================================================
// MOSTRAR NIVELES DE INGLÉS
// ======================================================

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

            <h2>
                INGLÉS
            </h2>

            <div class="selector-linea"></div>

            <h3>
                🌐 Selecciona tu nivel
            </h3>

            <p>
                Elige el nivel que deseas estudiar.
            </p>

        </div>

        <div class="tema-futurista">

            <span class="tema-numero">
                01
            </span>

            <span class="tema-icono">
                🟢
            </span>

            <strong>
                Básico
            </strong>

        </div>

        <div class="tema-futurista">

            <span class="tema-numero">
                02
            </span>

            <span class="tema-icono">
                🔵
            </span>

            <strong>
                Intermedio
            </strong>

        </div>

        <div class="tema-futurista">

            <span class="tema-numero">
                03
            </span>

            <span class="tema-icono">
                🟣
            </span>

            <strong>
                Avanzado
            </strong>

        </div>

        <br>

        ✏️ <strong>
        Escribe el número o nombre del nivel.
        </strong>

        <br><br>

        Ejemplos:

        <strong>1</strong>,

        <strong>básico</strong>,

        <strong>2</strong>,

        <strong>intermedio</strong>,

        <strong>3</strong>

        o

        <strong>avanzado</strong>.

    `);

}


// ======================================================
// SELECCIONAR NIVEL DE INGLÉS
// ======================================================

function seleccionarNivelIngles(texto) {

    texto = normalizar(texto);


    // ==================================================
    // BÁSICO
    // ==================================================

    if (

        texto === "1" ||

        texto === "basico" ||

        texto.includes("basico") ||

        texto.includes("nivel basico")

    ) {

        nivelInglesSeleccionado = "basico";

    }


    // ==================================================
    // INTERMEDIO
    // ==================================================

    else if (

        texto === "2" ||

        texto === "intermedio" ||

        texto.includes("intermedio") ||

        texto.includes("nivel intermedio")

    ) {

        nivelInglesSeleccionado = "intermedio";

    }


    // ==================================================
    // AVANZADO
    // ==================================================

    else if (

        texto === "3" ||

        texto === "avanzado" ||

        texto.includes("avanzado") ||

        texto.includes("nivel avanzado")

    ) {

        nivelInglesSeleccionado = "avanzado";

    }


    // ==================================================
    // NO RECONOCIDO
    // ==================================================

    else {

        responderBot(`

            ❌ <strong>No reconocí ese nivel.</strong>

            <br><br>

            🟢 <strong>1 - Básico</strong>

            <br>

            🔵 <strong>2 - Intermedio</strong>

            <br>

            🟣 <strong>3 - Avanzado</strong>

            <br><br>

            ✏️ Escribe el número o nombre.

        `);

        return;

    }


    // ==================================================
    // IMPORTANTE:
    // INGLÉS NO UTILIZA GRADO
    // ==================================================

    gradoSeleccionado = "";


    cargarCurso();

}


// ======================================================
// CIENCIA Y TECNOLOGÍA
// ======================================================

function cargarCienciaTecnologia() {

    if (typeof cyt === "undefined") {

        responderBot(`

            ❌ <strong>No se cargó cyt.js.</strong>

            <br><br>

            Verifica que:

            <strong>cyt.js</strong>

            esté antes de:

            <strong>app.js</strong>.

        `);

        return;

    }


    const datos = cyt[gradoSeleccionado];


    if (!datos) {

        responderBot(`

            ❌ No encontré contenidos de

            <strong>
                Ciencia y Tecnología
            </strong>

            para:

            <strong>
                ${nombreGrado(gradoSeleccionado)}
            </strong>.

        `);

        return;

    }


    estado = "tema";

    temaSeleccionado = "";

    datosTemaSeleccionado = null;


    mostrarEncabezadoTemas(datos);

}


// ======================================================
// CIENCIAS SOCIALES
// SIN GRADO
// ======================================================

function cargarSociales() {

    estado = "tema";

    gradoSeleccionado = "";

    temaSeleccionado = "";

    datosTemaSeleccionado = null;


    const temas = [

        {
            numero: "1",

            nombre: "Historia del Perú",

            icono: "🇵🇪",

            datos:
                typeof historiaPeru1 !== "undefined"
                    ? historiaPeru1
                    : null
        },


        {
            numero: "2",

            nombre: "Historia Universal",

            icono: "🌎",

            datos:
                typeof historiaUniversal1 !== "undefined"
                    ? historiaUniversal1
                    : null
        },


        {
            numero: "3",

            nombre: "Economía",

            icono: "💰",

            datos:
                typeof economia1 !== "undefined"
                    ? economia1
                    : null
        }

    ];


    window.socialesTemas = temas;


    responderBot(`

        <div class="selector-futurista">

            <div class="selector-badge">
                ● EDU BOT IA
            </div>

            <div class="selector-icon">
                🌎
            </div>

            <h2>
                CIENCIAS SOCIALES
            </h2>

            <div class="selector-linea"></div>

            <h3>
                🧠 Selecciona un tema
            </h3>

            <p>
                Elige el tema que deseas estudiar.
            </p>

        </div>

    `);


    temas.forEach(function (tema) {

        responderBot(`

            <div class="tema-futurista">

                <span class="tema-numero">
                    ${tema.numero}
                </span>

                <span class="tema-icono">
                    ${tema.icono}
                </span>

                <strong>
                    ${escapeHTML(tema.nombre)}
                </strong>

            </div>

        `);

    });


    responderBot(`

        <br>

        ✏️ <strong>
        Escribe el número o nombre del tema.
        </strong>

        <br><br>

        <strong>1</strong> → Historia del Perú

        <br>

        <strong>2</strong> → Historia Universal

        <br>

        <strong>3</strong> → Economía

    `);

}


// ======================================================
// DATOS DEL CURSO
// ======================================================

function obtenerDatosCurso() {

    let datos = null;


    // ==================================================
    // MATEMÁTICA
    // ==================================================

    if (cursoSeleccionado === "matematica") {

        const temas = {};


        // ------------------------------------------------
        // 1°
        // ------------------------------------------------

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


        // ------------------------------------------------
        // 2°
        // ------------------------------------------------

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


        // ------------------------------------------------
        // 3°
        // ------------------------------------------------

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


        // ------------------------------------------------
        // 4°
        // ------------------------------------------------

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


        // ------------------------------------------------
        // 5°
        // ------------------------------------------------

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


        // ------------------------------------------------
        // 6° PRIMARIA
        // ------------------------------------------------

        else if (gradoSeleccionado === "6") {

            if (typeof aritmetica6 !== "undefined")
                temas.aritmetica = aritmetica6;

            if (typeof algebra6 !== "undefined")
                temas.algebra = algebra6;

            else if (typeof algebra5 !== "undefined")
                temas.algebra = algebra5;

            if (typeof geometria6 !== "undefined")
                temas.geometria = geometria6;

            if (typeof estadistica6 !== "undefined")
                temas.estadistica = estadistica6;

        }


        if (Object.keys(temas).length > 0) {

            datos = temas;

        }

    }


    // ==================================================
    // COMUNICACIÓN
    // ==================================================

    if (cursoSeleccionado === "comunicacion") {

        if (typeof comunicacion !== "undefined") {

            datos =
                comunicacion[gradoSeleccionado]
                ||
                comunicacion;

        }

        else if (typeof comunicacion1 !== "undefined") {

            datos =
                comunicacion1[gradoSeleccionado]
                ||
                comunicacion1;

        }

    }


    // ==================================================
    // INGLÉS
    // SIN GRADO
    // ==================================================

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

    }


    return datos;

}


// ======================================================
// ERROR DE ARCHIVOS DE INGLÉS
// ======================================================

function mostrarErrorArchivoIngles() {

    let faltantes = [];


    if (
        nivelInglesSeleccionado === "basico" &&
        typeof inglesBasico === "undefined"
    ) {

        faltantes.push("inglesBasico.js");

    }


    if (
        nivelInglesSeleccionado === "intermedio" &&
        typeof inglesIntermedio === "undefined"
    ) {

        faltantes.push("inglesIntermedio.js");

    }


    if (
        nivelInglesSeleccionado === "avanzado" &&
        typeof inglesAvanzado === "undefined"
    ) {

        faltantes.push("inglesAvanzado.js");

    }


    responderBot(`

        ❌ <strong>No encontré los contenidos de Inglés.</strong>

        <br><br>

        Nivel seleccionado:

        <strong>
            ${capitalizar(nivelInglesSeleccionado)}
        </strong>

        <br><br>

        ${

            faltantes.length

                ? `
                    Verifica que esté cargado:

                    <br><br>

                    <strong>
                        ${faltantes.join("<br>")}
                    </strong>

                    <br><br>

                    y que aparezca <strong>antes de app.js</strong>.
                `

                : `
                    Verifica que las variables de tus archivos
                    tengan estos nombres:

                    <br><br>

                    <strong>
                        inglesBasico
                        <br>
                        inglesIntermedio
                        <br>
                        inglesAvanzado
                    </strong>
                `

        }

    `);

}


// ======================================================
// ENCABEZADO DE TEMAS
// ======================================================

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

                ${
                    gradoSeleccionado
                        ? nombreGrado(gradoSeleccionado)
                        : ""
                }

                ${
                    cursoSeleccionado === "ingles"
                        ? `
                            Nivel:
                            ${capitalizar(
                                nivelInglesSeleccionado
                            )}
                        `
                        : ""
                }

            </p>

            <div class="selector-linea"></div>

            <h3>
                🧠 Selecciona un tema
            </h3>

            <p>
                Solo se mostrará el contenido
                del tema que selecciones.
            </p>

        </div>

    `);


    mostrarTemas(datos);

}


// ======================================================
// OBTENER LISTA DE TEMAS
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


        if (
            typeof principal[clave] === "function"
        )
            continue;


        lista.push({

            clave: clave,

            titulo:
                convertirNombre(clave),

            contenido:
                principal[clave]

        });

    }


    return lista;

}


// ======================================================
// MOSTRAR TEMAS
// ======================================================

function mostrarTemas(objeto) {

    const lista =
        obtenerListaTemas(objeto);


    if (!lista.length) {

        responderBot(`

            ❌ <strong>
            No encontré temas disponibles
            para este curso.
            </strong>

        `);

        return;

    }


    lista.forEach(function (tema, indice) {

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
            "📚"

        ];


        const icono =
            iconos[indice % iconos.length];


        responderBot(`

            <div class="tema-futurista">

                <span class="tema-numero">
                    ${numero}
                </span>

                <span class="tema-icono">
                    ${icono}
                </span>

                <strong>
                    ${escapeHTML(tema.titulo)}
                </strong>

            </div>

        `);

    });


    responderBot(`

        <br>

        ✏️ <strong>
        Escribe el número o nombre
        del tema que deseas estudiar.
        </strong>

    `);

}


// ======================================================
// SELECCIONAR TEMA
// ======================================================

function seleccionarTema(texto) {

    texto = normalizar(texto);


    // ==================================================
    // SOCIALES
    // ==================================================

    if (cursoSeleccionado === "sociales") {

        const lista =
            window.socialesTemas || [];


        let elegido = null;


        // ------------------------------------------------
        // POR NÚMERO
        // ------------------------------------------------

        if (/^\d+$/.test(texto)) {

            const indice =
                Number(texto) - 1;


            if (lista[indice]) {

                elegido =
                    lista[indice];

            }

        }


        // ------------------------------------------------
        // POR NOMBRE
        // ------------------------------------------------

        if (!elegido) {

            elegido =
                lista.find(function (tema) {

                    const nombre =
                        normalizar(tema.nombre);


                    return (

                        texto === nombre ||

                        texto.includes(nombre) ||

                        nombre.includes(texto)

                    );

                });

        }


        // ------------------------------------------------
        // NO ENCONTRADO
        // ------------------------------------------------

        if (!elegido) {

            responderBot(`

                ❌ <strong>
                No reconocí ese tema.
                </strong>

                <br><br>

                Puedes escribir:

                <br><br>

                <strong>1</strong> →
                Historia del Perú

                <br>

                <strong>2</strong> →
                Historia Universal

                <br>

                <strong>3</strong> →
                Economía

            `);

            return;

        }


        temaSeleccionado =
            elegido.nombre;


        datosTemaSeleccionado =
            elegido.datos;

    }


    // ==================================================
    // RESTO DE CURSOS
    // ==================================================

    else {

        const datos =
            obtenerDatosCurso();


        const lista =
            obtenerListaTemas(datos);


        let elegido = null;


        // ------------------------------------------------
        // POR NÚMERO
        // ------------------------------------------------

        if (/^\d+$/.test(texto)) {

            const indice =
                Number(texto) - 1;


            if (lista[indice]) {

                elegido =
                    lista[indice];

            }

        }


        // ------------------------------------------------
        // POR NOMBRE
        // ------------------------------------------------

        if (!elegido) {

            elegido =
                lista.find(function (tema) {

                    const clave =
                        normalizar(tema.clave);


                    const titulo =
                        normalizar(tema.titulo);


                    return (

                        texto === clave ||

                        texto === titulo ||

                        texto.includes(titulo) ||

                        titulo.includes(texto) ||

                        clave.includes(texto)

                    );

                });

        }


        // ------------------------------------------------
        // NO ENCONTRADO
        // ------------------------------------------------

        if (!elegido) {

            responderBot(`

                ❌ <strong>
                No reconocí ese tema.
                </strong>

                <br><br>

                Escribe el número o nombre
                del tema que aparece en la lista.

            `);

            return;

        }


        temaSeleccionado =
            elegido.titulo;


        datosTemaSeleccionado =
            elegido.contenido;

    }


    // ==================================================
    // VERIFICAR CONTENIDO
    // ==================================================

    if (!datosTemaSeleccionado) {

        responderBot(`

            ❌ <strong>
            El tema fue seleccionado,
            pero no encontré su información.
            </strong>

            <br><br>

            Esto normalmente significa que
            el archivo JS del tema no está
            cargado correctamente.

        `);

        return;

    }


    // ==================================================
    // PASAR A PREGUNTAS
    // ==================================================

    estado = "pregunta";


    responderBot(`

        <div class="tema-seleccionado-futurista">

            <span>
                ✦ TEMA SELECCIONADO
            </span>

            <h2>
                ${escapeHTML(temaSeleccionado)}
            </h2>

            <p>
                Ya puedes hacerme preguntas
                sobre este tema.
            </p>

        </div>

        💬 <strong>
        Escribe tu pregunta abajo.
        </strong>

    `);

}


// ======================================================
// BUSCAR PREGUNTA
// ======================================================

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

            📚 <strong>
            ${escapeHTML(resultado.titulo)}
            </strong>

            <br><br>

            ${resultado.contenido}

        `);

        return;

    }


    responderBot(`

        ❌ <strong>
        No encontré una respuesta exacta
        dentro de
        ${escapeHTML(temaSeleccionado)}.
        </strong>

        <br><br>

        Prueba escribiendo otra pregunta
        relacionada con este tema.

    `);

}


// ======================================================
// BUSCAR RECURSIVO
// ======================================================

function buscarRecursivo(objeto, texto) {

    if (!objeto)
        return null;


    // ==================================================
    // TEXTO
    // ==================================================

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


    // ==================================================
    // ARRAY
    // ==================================================

    if (Array.isArray(objeto)) {

        for (const elemento of objeto) {

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


    // ==================================================
    // OBJETO
    // ==================================================

    if (typeof objeto === "object") {

        for (const clave in objeto) {

            if (clave === "nombre")
                continue;


            const claveNormalizada =
                normalizar(
                    convertirNombre(clave)
                );


            // ------------------------------------------------
            // BUSCAR POR NOMBRE DE CLAVE
            // ------------------------------------------------

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


            // ------------------------------------------------
            // BUSCAR DENTRO
            // ------------------------------------------------

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
// FORMATEAR CONTENIDO
// ======================================================

function formatearContenido(contenido) {

    // ==================================================
    // STRING
    // ==================================================

    if (typeof contenido === "string") {

        return contenido;

    }


    // ==================================================
    // ARRAY
    // ==================================================

    if (Array.isArray(contenido)) {

        return contenido

            .map(function (item) {

                if (typeof item === "string") {

                    return `
                        📌 ${escapeHTML(item)}
                    `;

                }


                return formatearContenido(item);

            })

            .join("<br>");

    }


    // ==================================================
    // OBJETO
    // ==================================================

    if (

        typeof contenido === "object" &&

        contenido !== null

    ) {

        let resultado = "";


        for (const clave in contenido) {

            resultado += `

                <br>

                <strong>
                    📌 ${escapeHTML(
                        convertirNombre(clave)
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
// NORMALIZAR TEXTO
// ======================================================

function normalizar(texto) {

    if (texto === undefined || texto === null)
        return "";


    return String(texto)

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


// ======================================================
// CONVERTIR NOMBRE
// ======================================================

function convertirNombre(texto) {

    if (!texto)
        return "";


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
            /-/g,
            " "
        )

        .replace(
            /\s+/g,
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


// ======================================================
// NOMBRE DEL CURSO
// ======================================================

function nombreCurso(curso) {

    const nombres = {

        matematica:
            "Matemática",

        comunicacion:
            "Comunicación",

        cyt:
            "Ciencia y Tecnología",

        sociales:
            "Ciencias Sociales",

        ingles:
            "Inglés"

    };


    return nombres[curso] || curso;

}


// ======================================================
// ICONO DEL CURSO
// ======================================================

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
            "🇬🇧"

    };


    return iconos[cursoSeleccionado] || "📚";

}


// ======================================================
// NOMBRE DEL GRADO
// ======================================================

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


    return nombres[grado] || "Grado desconocido";

}


// ======================================================
// CAPITALIZAR
// ======================================================

function capitalizar(texto) {

    if (!texto)
        return "";


    return texto

        .charAt(0)
        .toUpperCase()

        +
        texto.slice(1);

}


// ======================================================
// MOSTRAR USUARIO
// ======================================================

function mostrarUsuario(texto) {

    const chatActual =
        document.getElementById("chat");


    if (!chatActual)
        return;


    const mensaje =
        document.createElement("div");


    mensaje.className =
        "usuario";


    mensaje.innerHTML = `

        <strong>
            Tú:
        </strong>

        ${escapeHTML(texto)}

    `;


    chatActual.appendChild(mensaje);


    chatActual.scrollTop =
        chatActual.scrollHeight;

}


// ======================================================
// MOSTRAR BOT
// ======================================================

function responderBot(texto) {

    const chatActual =
        document.getElementById("chat");


    if (!chatActual)
        return;


    const mensaje =
        document.createElement("div");


    mensaje.className =
        "bot";


    mensaje.innerHTML =
        texto;


    chatActual.appendChild(mensaje);


    chatActual.scrollTop =
        chatActual.scrollHeight;

}


// ======================================================
// SEGURIDAD HTML
// ======================================================

function escapeHTML(texto) {

    if (texto === undefined || texto === null)
        return "";


    const div =
        document.createElement("div");


    div.textContent =
        String(texto);


    return div.innerHTML;

}


// ======================================================
// NUEVO CHAT
// ======================================================

function reiniciarEduBot() {

    estado = "curso";

    cursoSeleccionado = "";

    gradoSeleccionado = "";

    nivelInglesSeleccionado = "";

    temaSeleccionado = "";

    datosTemaSeleccionado = null;

    window.socialesTemas = [];


    const chatActual =
        document.getElementById("chat");


    if (chatActual) {

        chatActual.innerHTML = `

            <div class="bot">

                <strong>
                    ¡Nuevo chat! 👋
                </strong>

                <br><br>

                Soy
                <strong>
                    Edu BOT
                </strong>
                🤖.

                <br><br>

                Estoy preparado para ayudarte
                a aprender.

                <br><br>

                Selecciona un curso para comenzar.

            </div>

        `;

    }


    if (pregunta) {

        pregunta.value = "";

        pregunta.focus();

    }

}


// ======================================================
// BOTONES VISUALES DE CURSOS
// ======================================================

window.addEventListener(
    "load",
    function () {


        // ==================================================
        // BOTONES DATA-CURSO
        // ==================================================

        document

            .querySelectorAll("[data-curso]")

            .forEach(function (boton) {


                boton.addEventListener(
                    "click",
                    function () {


                        const curso =
                            normalizar(
                                this.dataset.curso
                            );


                        // Reiniciamos solamente
                        // la selección anterior.

                        gradoSeleccionado = "";

                        nivelInglesSeleccionado = "";

                        temaSeleccionado = "";

                        datosTemaSeleccionado = null;


                        seleccionarCurso(curso);

                    }
                );

            });


        // ==================================================
        // NUEVO CHAT
        // ==================================================

        const nuevoChat =
            document.getElementById("nuevoChat");


        if (nuevoChat) {

            nuevoChat.addEventListener(
                "click",
                function () {

                    reiniciarEduBot();

                }
            );

        }

    }
);


// ======================================================
// EXPONER FUNCIONES IMPORTANTES
// ======================================================
// Esto permite que otros elementos del HTML puedan
// llamar estas funciones si las necesitan.
// ======================================================

window.reiniciarEduBot =
    reiniciarEduBot;

window.seleccionarCurso =
    seleccionarCurso;

window.seleccionarTema =
    seleccionarTema;

window.responder =
    responder;


// ======================================================
// MENSAJES DE CONSOLA
// ======================================================

console.log(
    "🤖 Edu BOT IA cargado correctamente."
);

console.log(
    "📚 Cursos activos:"
);

console.log(
    "🧮 Matemática → Grado → Temas"
);

console.log(
    "📖 Comunicación → Grado → Temas"
);

console.log(
    "🧪 Ciencia y Tecnología → Grado → Temas"
);

console.log(
    "🌎 Ciencias Sociales → Temas"
);

console.log(
    "🇬🇧 Inglés → Nivel → Temas"
);
