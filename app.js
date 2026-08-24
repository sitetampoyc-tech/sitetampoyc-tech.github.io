// ================================================================
// 🤖 EDU BOT IA
// SISTEMA:
// CURSO → GRADO → NIVEL/TEMAS → CONTENIDO → PREGUNTAS
// ================================================================


// ================================================================
// 1. ESTADO GLOBAL
// ================================================================

let estado = "curso";

let cursoSeleccionado = "";
let gradoSeleccionado = "";

let nivelInglesSeleccionado = "";

let temaSeleccionado = "";
let datosTemaSeleccionado = null;

let datosCursoActual = null;

window.socialesTemas = [];


// ================================================================
// 2. ELEMENTOS DEL HTML
// ================================================================

const pregunta = document.getElementById("pregunta");
const enviar = document.getElementById("enviar");
const chat = document.getElementById("chat");


// ================================================================
// 3. EVENTO BOTÓN ENVIAR
// ================================================================

if (enviar) {

    enviar.addEventListener("click", () => {

        responder();

    });

}


// ================================================================
// 4. EVENTO ENTER
// ================================================================

if (pregunta) {

    pregunta.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {

            e.preventDefault();

            responder();

        }

    });

}


// ================================================================
// 5. RESPONDER
// ================================================================

function responder() {

    if (!pregunta) return;

    const textoOriginal = pregunta.value.trim();

    if (!textoOriginal) return;

    const texto = normalizar(textoOriginal);

    mostrarUsuario(textoOriginal);

    pregunta.value = "";


    // ------------------------------------------------------------
    // COMANDOS GLOBALES
    // ------------------------------------------------------------

    if (manejarComandos(texto)) {

        return;

    }


    // ------------------------------------------------------------
    // CURSO
    // ------------------------------------------------------------

    if (estado === "curso") {

        seleccionarCurso(texto);

        return;

    }


    // ------------------------------------------------------------
    // GRADO
    // ------------------------------------------------------------

    if (estado === "grado") {

        const grado = detectarGrado(texto);

        if (!grado) {

            responderBot(`

                ❌ <strong>No reconocí ese grado.</strong>

                <br><br>

                Puedes escribir:

                <br><br>

                🟢 <strong>6 primaria</strong><br>
                🔵 <strong>1 secundaria</strong><br>
                🟣 <strong>2 secundaria</strong><br>
                🟠 <strong>3 secundaria</strong><br>
                🔴 <strong>4 secundaria</strong><br>
                🟤 <strong>5 secundaria</strong>

                <br><br>

                También puedes escribir solamente:

                <strong>1, 2, 3, 4, 5 o 6</strong>.

            `);

            return;

        }


        gradoSeleccionado = grado;


        // --------------------------------------------------------
        // INGLÉS
        // --------------------------------------------------------

        if (cursoSeleccionado === "ingles") {

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
                        ${nombreGrado(grado)}
                    </p>

                    <div class="selector-linea"></div>

                    <h3>
                        🌐 Selecciona tu nivel
                    </h3>

                    <p>
                        Elige el nivel que deseas estudiar.
                    </p>

                    <br>

                    🟢 <strong>Básico</strong><br><br>

                    🔵 <strong>Intermedio</strong><br><br>

                    🟣 <strong>Avanzado</strong>

                </div>

                <br>

                ✏️ Escribe:
                <strong>básico</strong>,
                <strong>intermedio</strong>
                o
                <strong>avanzado</strong>.

            `);

            return;

        }


        // --------------------------------------------------------
        // RESTO DE CURSOS
        // --------------------------------------------------------

        cargarCurso();

        return;

    }


    // ------------------------------------------------------------
    // NIVEL INGLÉS
    // ------------------------------------------------------------

    if (estado === "nivel") {

        seleccionarNivelIngles(texto);

        return;

    }


    // ------------------------------------------------------------
    // TEMA
    // ------------------------------------------------------------

    if (estado === "tema") {

        seleccionarTema(texto);

        return;

    }


    // ------------------------------------------------------------
    // PREGUNTA
    // ------------------------------------------------------------

    if (estado === "pregunta") {

        buscarPreguntaEnTema(texto);

        return;

    }

}


// ================================================================
// 6. COMANDOS GENERALES
// ================================================================

function manejarComandos(texto) {

    // NUEVO CHAT

    if (
        texto === "nuevo chat" ||
        texto === "reiniciar" ||
        texto === "reinicia"
    ) {

        reiniciarEduBot();

        return true;

    }


    // VOLVER A CURSOS

    if (
        texto === "menu" ||
        texto === "inicio" ||
        texto === "cursos" ||
        texto === "volver al menu"
    ) {

        estado = "curso";

        cursoSeleccionado = "";
        gradoSeleccionado = "";
        nivelInglesSeleccionado = "";
        temaSeleccionado = "";
        datosTemaSeleccionado = null;
        datosCursoActual = null;

        responderBot(`

            🏠 <strong>Menú principal</strong>

            <br><br>

            ¿Qué curso deseas estudiar?

            <br><br>

            🧮 Matemática<br>
            📖 Comunicación<br>
            🧪 Ciencia y Tecnología<br>
            🌎 Ciencias Sociales<br>
            🇬🇧 Inglés

        `);

        return true;

    }


    // VER TEMAS OTRA VEZ

    if (
        texto === "temas" ||
        texto === "ver temas" ||
        texto === "lista de temas"
    ) {

        if (datosCursoActual) {

            estado = "tema";

            mostrarEncabezadoTemas(datosCursoActual);

        } else {

            responderBot(`

                ℹ️ Primero selecciona un curso y un grado.

            `);

        }

        return true;

    }


    return false;

}


// ================================================================
// 7. SELECCIONAR CURSO
// ================================================================

function seleccionarCurso(texto) {

    texto = normalizar(texto);


    // ------------------------------------------------------------
    // MATEMÁTICA
    // ------------------------------------------------------------

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


    // ------------------------------------------------------------
    // COMUNICACIÓN
    // ------------------------------------------------------------

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


    // ------------------------------------------------------------
    // CIENCIA Y TECNOLOGÍA
    // ------------------------------------------------------------

    if (

        texto === "cyt" ||
        texto === "ciencia" ||
        texto.includes("ciencia y tecnologia") ||
        texto.includes("ciencia tecnologia") ||
        texto.includes("tecnologia")

    ) {

        iniciarCurso(
            "cyt",
            "🧪",
            "CIENCIA Y TECNOLOGÍA"
        );

        return;

    }


    // ------------------------------------------------------------
    // CIENCIAS SOCIALES
    // ------------------------------------------------------------

    if (

        texto === "social" ||
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


    // ------------------------------------------------------------
    // INGLÉS
    // ------------------------------------------------------------

    if (

        texto === "ingles" ||
        texto === "idioma ingles" ||
        texto.includes("ingles")

    ) {

        iniciarCurso(
            "ingles",
            "🇬🇧",
            "INGLÉS"
        );

        return;

    }


    // ------------------------------------------------------------
    // NO RECONOCIDO
    // ------------------------------------------------------------

    responderBot(`

        ❌ <strong>No reconocí ese curso.</strong>

        <br><br>

        Puedes elegir:

        <br><br>

        🧮 <strong>Matemática</strong><br>
        📖 <strong>Comunicación</strong><br>
        🧪 <strong>Ciencia y Tecnología</strong><br>
        🌎 <strong>Ciencias Sociales</strong><br>
        🇬🇧 <strong>Inglés</strong>

        <br><br>

        ✏️ Escribe el nombre del curso.

    `);

}


// ================================================================
// 8. INICIAR CURSO
// ================================================================

function iniciarCurso(curso, icono, nombre) {

    cursoSeleccionado = curso;

    gradoSeleccionado = "";

    nivelInglesSeleccionado = "";

    temaSeleccionado = "";

    datosTemaSeleccionado = null;

    datosCursoActual = null;

    window.socialesTemas = [];

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
                Primero seleccionaremos tu grado.
                Después aparecerán los temas
                disponibles.
            </p>

        </div>

    `);


    mostrarGrados();

}


// ================================================================
// 9. MOSTRAR GRADOS
// ================================================================

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

        ✏️ Escribe el grado.

        <br><br>

        Ejemplo:

        <strong>2 secundaria</strong>

    `);

}


// ================================================================
// 10. DETECTAR GRADO
// ================================================================

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


// ================================================================
// 11. CARGAR CURSO
// ================================================================

function cargarCurso() {


    // CIENCIA Y TECNOLOGÍA

    if (cursoSeleccionado === "cyt") {

        cargarCienciaTecnologia();

        return;

    }


    // CIENCIAS SOCIALES

    if (cursoSeleccionado === "sociales") {

        cargarSociales();

        return;

    }


    // RESTO

    const datos = obtenerDatosCurso();


    if (!datos) {

        responderBot(`

            ❌ <strong>No encontré los contenidos.</strong>

            <br><br>

            Curso:
            <strong>
                ${nombreCurso(cursoSeleccionado)}
            </strong>

            <br>

            Grado:
            <strong>
                ${nombreGrado(gradoSeleccionado)}
            </strong>

            <br><br>

            Verifica que el archivo JS correspondiente
            esté cargado en <strong>ia.html</strong>
            antes de <strong>app.js</strong>.

        `);

        return;

    }


    datosCursoActual = datos;

    estado = "tema";

    temaSeleccionado = "";

    datosTemaSeleccionado = null;


    mostrarEncabezadoTemas(datos);

}


// ================================================================
// 12. CIENCIA Y TECNOLOGÍA
// ================================================================

function cargarCienciaTecnologia() {

    if (typeof cyt === "undefined") {

        responderBot(`

            ❌ <strong>No se cargó cyt.js.</strong>

            <br><br>

            Coloca <strong>cyt.js</strong>
            antes de <strong>app.js</strong>
            en tu HTML.

        `);

        return;

    }


    const datos = obtenerPorGrado(cyt, gradoSeleccionado);


    if (!datos) {

        responderBot(`

            ❌ No encontré contenidos de
            <strong>Ciencia y Tecnología</strong>
            para:

            <br><br>

            <strong>
                ${nombreGrado(gradoSeleccionado)}
            </strong>

        `);

        return;

    }


    datosCursoActual = datos;

    estado = "tema";

    temaSeleccionado = "";

    datosTemaSeleccionado = null;


    mostrarEncabezadoTemas(datos);

}


// ================================================================
// 13. CIENCIAS SOCIALES
// ================================================================

function cargarSociales() {

    estado = "tema";

    temaSeleccionado = "";

    datosTemaSeleccionado = null;


    const grado = gradoSeleccionado;


    const temas = [

        {
            numero: "1",
            nombre: "Historia del Perú",
            icono: "🇵🇪",
            datos: obtenerVariableSocial(
                [
                    `historiaPeru${grado}`,
                    `historiaPeru`
                ]
            )
        },

        {
            numero: "2",
            nombre: "Historia Universal",
            icono: "🌎",
            datos: obtenerVariableSocial(
                [
                    `historiaUniversal${grado}`,
                    `historiaUniversal`
                ]
            )
        },

        {
            numero: "3",
            nombre: "Economía",
            icono: "💰",
            datos: obtenerVariableSocial(
                [
                    `economia${grado}`,
                    `economia`
                ]
            )
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

            <p>
                ${nombreGrado(grado)}
            </p>

            <div class="selector-linea"></div>

            <h3>
                🧠 Selecciona un tema
            </h3>

            <p>
                Escribe el número o el nombre.
            </p>

        </div>

    `);


    temas.forEach(tema => {

        responderBot(`

            <div class="tema-futurista">

                <span class="tema-numero">
                    ${tema.numero.padStart(2, "0")}
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

        ✏️ Puedes escribir:

        <br><br>

        <strong>1</strong>
        Historia del Perú

        <br>

        <strong>2</strong>
        Historia Universal

        <br>

        <strong>3</strong>
        Economía

    `);

}


// ================================================================
// 14. BUSCAR VARIABLE SOCIAL
// ================================================================

function obtenerVariableSocial(nombres) {

    for (const nombre of nombres) {

        if (
            typeof window[nombre] !== "undefined"
        ) {

            return window[nombre];

        }

    }

    return null;

}


// ================================================================
// 15. OBTENER DATOS POR GRADO
// ================================================================

function obtenerPorGrado(objeto, grado) {

    if (!objeto) return null;


    // Ejemplo:
    // cyt["2"]

    if (
        typeof objeto === "object" &&
        objeto[grado]
    ) {

        return objeto[grado];

    }


    // Si el propio objeto ya es el contenido

    return objeto;

}


// ================================================================
// 16. INGLÉS
// ================================================================

function seleccionarNivelIngles(texto) {

    texto = normalizar(texto);


    if (

        texto === "basico" ||
        texto.includes("nivel basico")

    ) {

        nivelInglesSeleccionado = "basico";

    }


    else if (

        texto === "intermedio" ||
        texto.includes("nivel intermedio")

    ) {

        nivelInglesSeleccionado = "intermedio";

    }


    else if (

        texto === "avanzado" ||
        texto.includes("nivel avanzado")

    ) {

        nivelInglesSeleccionado = "avanzado";

    }


    else {

        responderBot(`

            ❌ <strong>No reconocí ese nivel.</strong>

            <br><br>

            🟢 Básico

            <br>

            🔵 Intermedio

            <br>

            🟣 Avanzado

        `);

        return;

    }


    cargarCurso();

}


// ================================================================
// 17. OBTENER DATOS DEL CURSO
// ================================================================

function obtenerDatosCurso() {

    let datos = null;


    // ============================================================
    // MATEMÁTICA
    // ============================================================

    if (cursoSeleccionado === "matematica") {

        const temas = {};


        const numero = gradoSeleccionado;


        agregarSiExiste(
            temas,
            "aritmetica",
            `aritmetica${numero}`
        );


        agregarSiExiste(
            temas,
            "algebra",
            `algebra${numero}`
        );


        agregarSiExiste(
            temas,
            "geometria",
            `geometria${numero}`
        );


        agregarSiExiste(
            temas,
            "estadistica",
            `estadistica${numero}`
        );


        // También buscamos algunas variantes

        if (
            !temas.geometria
        ) {

            agregarSiExiste(
                temas,
                "geometria",
                `geometría${numero}`
            );

        }


        if (
            Object.keys(temas).length > 0
        ) {

            datos = temas;

        }

    }


    // ============================================================
    // COMUNICACIÓN
    // ============================================================

    if (cursoSeleccionado === "comunicacion") {

        if (
            typeof comunicacion !== "undefined"
        ) {

            datos =
                comunicacion[gradoSeleccionado]
                ||
                comunicacion;

        }


        else if (
            typeof window[`comunicacion${gradoSeleccionado}`]
            !== "undefined"
        ) {

            datos =
                window[`comunicacion${gradoSeleccionado}`];

        }

    }


    // ============================================================
    // INGLÉS
    // ============================================================

    if (cursoSeleccionado === "ingles") {

        if (
            nivelInglesSeleccionado === "basico"
        ) {

            datos =
                obtenerVariableGlobal([
                    "inglesBasico",
                    "inglesbasico",
                    "ingles_basico"
                ]);

        }


        else if (
            nivelInglesSeleccionado === "intermedio"
        ) {

            datos =
                obtenerVariableGlobal([
                    "inglesIntermedio",
                    "inglesintermedio",
                    "ingles_intermedio"
                ]);

        }


        else if (
            nivelInglesSeleccionado === "avanzado"
        ) {

            datos =
                obtenerVariableGlobal([
                    "inglesAvanzado",
                    "inglesavanzado",
                    "ingles_avanzado"
                ]);

        }

    }


    return datos;

}


// ================================================================
// 18. AGREGAR VARIABLE SI EXISTE
// ================================================================

function agregarSiExiste(objeto, clave, nombreVariable) {

    if (
        typeof window[nombreVariable] !== "undefined"
    ) {

        objeto[clave] =
            window[nombreVariable];

    }

}


// ================================================================
// 19. OBTENER VARIABLE GLOBAL
// ================================================================

function obtenerVariableGlobal(nombres) {

    for (const nombre of nombres) {

        if (
            typeof window[nombre] !== "undefined"
        ) {

            return window[nombre];

        }

    }

    return null;

}


// ================================================================
// 20. ENCABEZADO DE TEMAS
// ================================================================

function mostrarEncabezadoTemas(datos) {

    datosCursoActual = datos;

    estado = "tema";


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

                ${
                    cursoSeleccionado === "ingles"
                    ?
                    " • Nivel " +
                    capitalizar(nivelInglesSeleccionado)
                    :
                    ""
                }

            </p>

            <div class="selector-linea"></div>

            <h3>
                🧠 Selecciona un tema
            </h3>

            <p>
                Elige un tema para comenzar.
            </p>

        </div>

    `);


    mostrarTemas(datos);

}


// ================================================================
// 21. OBTENER LISTA DE TEMAS
// ================================================================

function obtenerListaTemas(objeto) {

    if (!objeto) return [];


    let principal = objeto;


    // Si existe .temas

    if (
        objeto.temas &&
        typeof objeto.temas === "object"
    ) {

        principal = objeto.temas;

    }


    const lista = [];


    // ------------------------------------------------------------
    // SI ES ARRAY
    // ------------------------------------------------------------

    if (Array.isArray(principal)) {

        principal.forEach(
            (elemento, indice) => {

                if (!elemento) return;


                if (
                    typeof elemento === "string"
                ) {

                    lista.push({

                        clave: String(indice),

                        titulo: elemento,

                        contenido: elemento

                    });

                    return;

                }


                if (
                    typeof elemento === "object"
                ) {

                    const nombre =
                        elemento.nombre ||
                        elemento.titulo ||
                        elemento.tema ||
                        `Tema ${indice + 1}`;


                    lista.push({

                        clave: String(indice),

                        titulo: nombre,

                        contenido: elemento

                    });

                }

            }
        );


        return lista;

    }


    // ------------------------------------------------------------
    // SI ES OBJETO
    // ------------------------------------------------------------

    if (
        typeof principal !== "object"
    ) {

        return [];

    }


    for (
        const clave in principal
    ) {

        if (
            ["nombre", "grado", "curso", "descripcion", "icono"]
                .includes(
                    normalizar(clave)
                )
        ) {

            continue;

        }


        lista.push({

            clave: clave,

            titulo: convertirNombre(clave),

            contenido: principal[clave]

        });

    }


    return lista;

}


// ================================================================
// 22. MOSTRAR TEMAS
// ================================================================

function mostrarTemas(objeto) {

    const lista =
        obtenerListaTemas(objeto);


    if (!lista.length) {

        responderBot(`

            ❌ <strong>
            No encontré temas disponibles
            para este curso.
            </strong>

            <br><br>

            Verifica la estructura del archivo
            de contenidos.

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
        "📚",
        "🧠",
        "✏️"

    ];


    lista.forEach(
        (tema, indice) => {

            const numero =
                String(indice + 1)
                    .padStart(2, "0");


            const icono =
                iconos[
                    indice % iconos.length
                ];


            responderBot(`

                <div
                    class="tema-futurista"
                    data-tema-index="${indice}"
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

                </div>

            `);

        }
    );


    responderBot(`

        <br>

        ✏️ <strong>
        Escribe el número o nombre
        del tema que deseas estudiar.
        </strong>

        <br><br>

        Ejemplo:

        <strong>
        3
        </strong>

        o

        <strong>
        Geometría
        </strong>

    `);

}


// ================================================================
// 23. SELECCIONAR TEMA
// ================================================================

function seleccionarTema(texto) {

    texto = normalizar(texto);


    // ============================================================
    // CIENCIAS SOCIALES
    // ============================================================

    if (
        cursoSeleccionado === "sociales"
    ) {

        const lista =
            window.socialesTemas || [];


        const elegido =
            lista.find(
                tema => {

                    const nombre =
                        normalizar(
                            tema.nombre
                        );


                    return (

                        texto ===
                        normalizar(tema.numero)

                        ||

                        texto === nombre

                        ||

                        texto.includes(nombre)

                        ||

                        nombre.includes(texto)

                    );

                }
            );


        if (!elegido) {

            responderBot(`

                ❌ <strong>
                No reconocí ese tema.
                </strong>

                <br><br>

                Puedes escribir:

                <br><br>

                <strong>1</strong>
                Historia del Perú

                <br>

                <strong>2</strong>
                Historia Universal

                <br>

                <strong>3</strong>
                Economía

            `);

            return;

        }


        temaSeleccionado =
            elegido.nombre;

        datosTemaSeleccionado =
            elegido.datos;

    }


    // ============================================================
    // RESTO DE CURSOS
    // ============================================================

    else {

        const datos =
            datosCursoActual ||
            obtenerDatosCurso();


        const lista =
            obtenerListaTemas(datos);


        if (!lista.length) {

            responderBot(`

                ❌ No hay temas disponibles
                para este curso.

            `);

            return;

        }


        let elegido = null;


        // --------------------------------------------------------
        // POR NÚMERO
        // --------------------------------------------------------

        if (
            /^\d+$/.test(texto)
        ) {

            let numero =
                parseInt(texto, 10);


            // Permite 01, 02, 03...

            if (
                numero >= 1 &&
                numero <= lista.length
            ) {

                elegido =
                    lista[numero - 1];

            }

        }


        // --------------------------------------------------------
        // POR NOMBRE
        // --------------------------------------------------------

        if (!elegido) {

            elegido =
                lista.find(
                    tema => {

                        const clave =
                            normalizar(
                                tema.clave
                            );

                        const titulo =
                            normalizar(
                                tema.titulo
                            );


                        const palabras =
                            titulo
                                .split(" ")
                                .filter(
                                    palabra =>
                                        palabra.length > 2
                                );


                        return (

                            texto === clave

                            ||

                            texto === titulo

                            ||

                            texto.includes(titulo)

                            ||

                            titulo.includes(texto)

                            ||

                            clave.includes(texto)

                            ||

                            palabras.some(
                                palabra =>
                                    texto === palabra
                            )

                        );

                    }
                );

        }


        // --------------------------------------------------------
        // NO ENCONTRADO
        // --------------------------------------------------------

        if (!elegido) {

            responderBot(`

                ❌ <strong>
                No reconocí ese tema.
                </strong>

                <br><br>

                Puedes escribir el
                <strong>número</strong>
                o el
                <strong>nombre</strong>
                del tema.

                <br><br>

                Por ejemplo:

                <strong>1</strong>

                o

                <strong>Geometría</strong>.

            `);

            return;

        }


        temaSeleccionado =
            elegido.titulo;

        datosTemaSeleccionado =
            elegido.contenido;

    }


    // ============================================================
    // COMPROBAR DATOS
    // ============================================================

    if (!datosTemaSeleccionado) {

        responderBot(`

            ❌ <strong>
            Encontré el tema
            "${escapeHTML(temaSeleccionado)}",
            pero el archivo de información
            no está cargado.
            </strong>

            <br><br>

            Revisa que el archivo
            correspondiente esté incluido
            en <strong>ia.html</strong>
            antes de <strong>app.js</strong>.

        `);

        return;

    }


    // ============================================================
    // CAMBIAR A MODO PREGUNTAS
    // ============================================================

    estado = "pregunta";


    // ============================================================
    // AHORA MOSTRAMOS EL CONTENIDO DIRECTAMENTE
    // ============================================================

    mostrarContenidoTema();

}


// ================================================================
// 24. MOSTRAR CONTENIDO DEL TEMA
// ================================================================

function mostrarContenidoTema() {

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

                •

                ${nombreGrado(gradoSeleccionado)}

            </p>

        </div>

    `);


    responderBot(`

        <div class="contenido-tema-futurista">

            <h3>
                📚 Contenido del curso
            </h3>

            <div class="contenido-educativo">

                ${formatearContenido(
                    datosTemaSeleccionado
                )}

            </div>

        </div>

    `);


    responderBot(`

        <br>

        💬 <strong>
        Ahora puedes preguntarme cualquier
        cosa relacionada con ${escapeHTML(
            temaSeleccionado
        )}.
        </strong>

        <br><br>

        Ejemplo:

        <em>
        Explícame este tema paso a paso.
        </em>

    `);

}


// ================================================================
// 25. BUSCAR PREGUNTA
// ================================================================

function buscarPreguntaEnTema(texto) {

    if (!datosTemaSeleccionado) {

        responderBot(`

            ❌ No hay un tema seleccionado.

            <br><br>

            Escribe <strong>temas</strong>
            para volver a la lista.

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

            <div class="respuesta-ia">

                📚 <strong>
                ${escapeHTML(resultado.titulo)}
                </strong>

                <br><br>

                ${resultado.contenido}

            </div>

        `);

        return;

    }


    responderBot(`

        ❌ <strong>
        No encontré una respuesta exacta
        dentro de ${escapeHTML(
            temaSeleccionado
        )}.
        </strong>

        <br><br>

        Intenta formular la pregunta
        con palabras que aparezcan
        en el contenido del tema.

        <br><br>

        También puedes escribir:

        <strong>temas</strong>

        para volver a la lista.

    `);

}


// ================================================================
// 26. BÚSQUEDA RECURSIVA MEJORADA
// ================================================================

function buscarRecursivo(objeto, texto) {

    if (!objeto) return null;


    texto =
        normalizar(texto);


    // ------------------------------------------------------------
    // STRING
    // ------------------------------------------------------------

    if (
        typeof objeto === "string"
    ) {

        const contenido =
            normalizar(objeto);


        const palabrasPregunta =
            texto
                .split(/\s+/)
                .filter(
                    palabra =>
                        palabra.length >= 4
                );


        const coincidencias =
            palabrasPregunta.filter(
                palabra =>
                    contenido.includes(palabra)
            );


        if (
            contenido.includes(texto)
            ||

            (
                palabrasPregunta.length > 0 &&
                coincidencias.length >=
                    Math.max(
                        1,
                        Math.ceil(
                            palabrasPregunta.length * 0.5
                        )
                    )
            )
        ) {

            return {

                titulo:
                    "Información encontrada",

                contenido:
                    escapeHTML(objeto)

            };

        }


        return null;

    }


    // ------------------------------------------------------------
    // ARRAY
    // ------------------------------------------------------------

    if (
        Array.isArray(objeto)
    ) {

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


    // ------------------------------------------------------------
    // OBJETO
    // ------------------------------------------------------------

    if (
        typeof objeto === "object"
    ) {

        for (
            const clave in objeto
        ) {

            if (
                ["nombre", "grado", "curso"]
                    .includes(
                        normalizar(clave)
                    )
            ) {

                continue;

            }


            const claveBonita =
                convertirNombre(clave);


            const claveNormalizada =
                normalizar(claveBonita);


            // ----------------------------------------------------
            // COINCIDENCIA POR TÍTULO
            // ----------------------------------------------------

            if (

                claveNormalizada.includes(texto)

                ||

                texto.includes(
                    claveNormalizada
                )

            ) {

                return {

                    titulo:
                        claveBonita,

                    contenido:
                        formatearContenido(
                            objeto[clave]
                        )

                };

            }


            // ----------------------------------------------------
            // BUSCAR DENTRO
            // ----------------------------------------------------

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


// ================================================================
// 27. FORMATEAR CONTENIDO
// ================================================================

function formatearContenido(contenido) {

    if (
        contenido === null ||
        contenido === undefined
    ) {

        return `
            <em>
                No hay contenido disponible.
            </em>
        `;

    }


    // ------------------------------------------------------------
    // TEXTO
    // ------------------------------------------------------------

    if (
        typeof contenido === "string"
    ) {

        return convertirTextoSeguro(
            contenido
        );

    }


    // ------------------------------------------------------------
    // NÚMERO / BOOLEAN
    // ------------------------------------------------------------

    if (
        typeof contenido === "number" ||
        typeof contenido === "boolean"
    ) {

        return escapeHTML(
            String(contenido)
        );

    }


    // ------------------------------------------------------------
    // ARRAY
    // ------------------------------------------------------------

    if (
        Array.isArray(contenido)
    ) {

        return `

            <div class="lista-contenido">

                ${contenido
                    .map(
                        item => `

                            <div class="contenido-item">

                                ${formatearContenido(
                                    item
                                )}

                            </div>

                        `
                    )
                    .join("")
                }

            </div>

        `;

    }


    // ------------------------------------------------------------
    // OBJETO
    // ------------------------------------------------------------

    if (
        typeof contenido === "object"
    ) {

        let resultado = "";


        for (
            const clave in contenido
        ) {

            const titulo =
                convertirNombre(clave);


            resultado += `

                <section
                    class="bloque-contenido"
                >

                    <h4>
                        📌
                        ${escapeHTML(titulo)}
                    </h4>

                    <div>
                        ${formatearContenido(
                            contenido[clave]
                        )}
                    </div>

                </section>

            `;

        }


        return resultado;

    }


    return "No hay contenido disponible.";

}


// ================================================================
// 28. CONVERTIR TEXTO SEGURO
// ================================================================

function convertirTextoSeguro(texto) {

    // Conservamos saltos de línea

    return escapeHTML(texto)
        .replace(/\n/g, "<br>");

}


// ================================================================
// 29. NORMALIZAR
// ================================================================

function normalizar(texto) {

    if (
        texto === null ||
        texto === undefined
    ) {

        return "";

    }


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


// ================================================================
// 30. CONVERTIR NOMBRE
// ================================================================

function convertirNombre(texto) {

    if (!texto)
        return "";


    return String(texto)

        .replace(
            /([a-z])([A-Z])/g,
            "$1 $2"
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
            letra =>
                letra.toUpperCase()
        )

        .trim();

}


// ================================================================
// 31. NOMBRE CURSO
// ================================================================

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


    return nombres[curso]
        || curso
        || "Curso";

}


// ================================================================
// 32. ICONO CURSO
// ================================================================

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


    return iconos[
        cursoSeleccionado
    ]
        || "📚";

}


// ================================================================
// 33. NOMBRE GRADO
// ================================================================

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


    return nombres[grado]
        || "Grado desconocido";

}


// ================================================================
// 34. CAPITALIZAR
// ================================================================

function capitalizar(texto) {

    if (!texto)
        return "";


    return texto
        .charAt(0)
        .toUpperCase()
        +
        texto.slice(1);

}


// ================================================================
// 35. MOSTRAR USUARIO
// ================================================================

function mostrarUsuario(texto) {

    const contenedor =
        document.getElementById("chat");


    if (!contenedor)
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


    contenedor.appendChild(
        mensaje
    );


    contenedor.scrollTop =
        contenedor.scrollHeight;

}


// ================================================================
// 36. MOSTRAR BOT
// ================================================================

function responderBot(texto) {

    const contenedor =
        document.getElementById("chat");


    if (!contenedor)
        return;


    const mensaje =
        document.createElement("div");


    mensaje.className =
        "bot";


    mensaje.innerHTML =
        texto;


    contenedor.appendChild(
        mensaje
    );


    contenedor.scrollTop =
        contenedor.scrollHeight;

}


// ================================================================
// 37. SEGURIDAD HTML
// ================================================================

function escapeHTML(texto) {

    if (
        texto === null ||
        texto === undefined
    ) {

        return "";

    }


    const div =
        document.createElement("div");


    div.textContent =
        String(texto);


    return div.innerHTML;

}


// ================================================================
// 38. NUEVO CHAT
// ================================================================

function reiniciarEduBot() {

    estado = "curso";

    cursoSeleccionado = "";

    gradoSeleccionado = "";

    nivelInglesSeleccionado = "";

    temaSeleccionado = "";

    datosTemaSeleccionado = null;

    datosCursoActual = null;

    window.socialesTemas = [];


    const contenedor =
        document.getElementById("chat");


    if (contenedor) {

        contenedor.innerHTML = `

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

                ¿Qué quieres aprender hoy?

                <br><br>

                🧮 Matemática<br>
                📖 Comunicación<br>
                🧪 Ciencia y Tecnología<br>
                🌎 Ciencias Sociales<br>
                🇬🇧 Inglés

            </div>

        `;

    }


    if (pregunta) {

        pregunta.value = "";

        pregunta.focus();

    }

}


// ================================================================
// 39. BOTONES VISUALES DE CURSOS
// ================================================================

function activarBotonesCursos() {

    document
        .querySelectorAll("[data-curso]")
        .forEach(
            boton => {

                // Evitar duplicar eventos

                if (
                    boton.dataset.eduBotActivo === "1"
                ) {

                    return;

                }


                boton.dataset.eduBotActivo = "1";


                boton.addEventListener(
                    "click",
                    function () {

                        const curso =
                            normalizar(
                                this.dataset.curso
                            );


                        seleccionarCurso(
                            curso
                        );


                        // Llevar al chat

                        const zonaChat =
                            document.getElementById(
                                "chat"
                            );


                        if (zonaChat) {

                            zonaChat.scrollIntoView({
                                behavior: "smooth",
                                block: "center"
                            });

                        }

                    }
                );

            }
        );

}


// ================================================================
// 40. BOTÓN NUEVO CHAT
// ================================================================

function activarBotonNuevoChat() {

    const nuevoChat =
        document.getElementById(
            "nuevoChat"
        );


    if (
        !nuevoChat ||
        nuevoChat.dataset.eduBotActivo === "1"
    ) {

        return;

    }


    nuevoChat.dataset.eduBotActivo = "1";


    nuevoChat.addEventListener(
        "click",
        () => {

            reiniciarEduBot();

        }
    );

}


// ================================================================
// 41. INICIALIZACIÓN
// ================================================================

function iniciarEduBot() {

    activarBotonesCursos();

    activarBotonNuevoChat();


    console.log(
        "🤖 Edu BOT IA iniciado correctamente."
    );


    console.log(
        "📚 Curso actual:",
        cursoSeleccionado || "ninguno"
    );

}


// ================================================================
// 42. INICIAR CUANDO CARGUE LA PÁGINA
// ================================================================

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        iniciarEduBot
    );

}

else {

    iniciarEduBot();

}


// ================================================================
// 43. FUNCIONES DISPONIBLES GLOBALMENTE
// ================================================================

window.EduBot = {

    seleccionarCurso,

    reiniciar:
        reiniciarEduBot,

    mostrarTemas,

    seleccionarTema,

    detectarGrado,

    obtenerDatosCurso

};


// ================================================================
// FIN
// ================================================================

console.log(
    "🚀 EDU BOT IA - SISTEMA CARGADO"
);

console.log(
    "✅ Matemática"
);

console.log(
    "✅ Comunicación"
);

console.log(
    "✅ Ciencia y Tecnología"
);

console.log(
    "✅ Ciencias Sociales"
);

console.log(
    "✅ Inglés"
);
