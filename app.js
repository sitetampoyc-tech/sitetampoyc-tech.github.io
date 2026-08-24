// ======================================================
// 🤖 EDU BOT IA
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

window.socialesTemas = [];


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

    enviar.addEventListener("click", () => {

        responder();

    });

}


// ======================================================
// ENTER PARA ENVIAR
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
    // SELECCIONAR CURSO
    // ==================================================

    if (estado === "curso") {

        seleccionarCurso(texto);

        return;

    }


    // ==================================================
    // SELECCIONAR GRADO
    // SOLO:
    // MATEMÁTICA
    // COMUNICACIÓN
    // CIENCIA Y TECNOLOGÍA
    // ==================================================

    if (estado === "grado") {

        const grado = detectarGrado(texto);

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

                ✏️ También puedes escribir solamente el número.

            `);

            return;

        }


        gradoSeleccionado = grado;


        // ==================================================
        // INGRESAR A LOS CONTENIDOS
        // ==================================================

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
    // SELECCIONAR TEMA
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
    // IMPORTANTE:
    // NO PIDE GRADO
    // ==================================================

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


    // ==================================================
    // INGLÉS
    // IMPORTANTE:
    // NO PIDE GRADO
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
    // 🌎 CIENCIAS SOCIALES
    // NO PIDE GRADO
    // ==================================================

    if (curso === "sociales") {

        cargarSociales();

        return;

    }


    // ==================================================
    // 🇬🇧 INGLÉS
    // NO PIDE GRADO
    // ==================================================

    if (curso === "ingles") {

        estado = "nivel";

        mostrarSelectorIngles();

        return;

    }


    // ==================================================
    // RESTO DE CURSOS
    // SÍ PIDE GRADO
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
// SELECTOR DE INGLÉS
// ======================================================

function mostrarSelectorIngles() {

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

        <br>

        🟢 <strong>Básico</strong>

        <br><br>

        🔵 <strong>Intermedio</strong>

        <br><br>

        🟣 <strong>Avanzado</strong>

        <br><br>

        ✏️ Escribe:
        <strong>básico</strong>,
        <strong>intermedio</strong>
        o
        <strong>avanzado</strong>.

    `);

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

        <strong>2</strong>

        o

        <strong>2 secundaria</strong>

    `);

}


// ======================================================
// DETECTAR GRADO
// ======================================================

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
    // SOCIALES
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

            responderBot(`

                ❌ <strong>No encontré los contenidos de Inglés.</strong>

                <br><br>

                El nivel seleccionado fue:

                <strong>
                    ${capitalizar(nivelInglesSeleccionado)}
                </strong>

                <br><br>

                Verifica que el archivo correspondiente
                esté cargado antes de <strong>app.js</strong>.

            `);

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

            <br>

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
// CIENCIA Y TECNOLOGÍA
// ======================================================

function cargarCienciaTecnologia() {

    if (typeof cyt === "undefined") {

        responderBot(`

            ❌ <strong>No se cargó cyt.js.</strong>

            <br><br>

            Verifica que:

            <br><br>

            <strong>cyt.js</strong>

            esté cargado antes de

            <strong>app.js</strong>.

        `);

        return;

    }


    const datos = cyt[gradoSeleccionado];


    if (!datos) {

        responderBot(`

            ❌ <strong>No encontré contenidos.</strong>

            <br><br>

            No existen contenidos de
            Ciencia y Tecnología para:

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
// NO PIDE GRADO
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
                Elige directamente el tema
                que deseas estudiar.
            </p>

        </div>

    `);


    temas.forEach((tema) => {

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

        ✏️ <strong>Escribe el número
        o nombre del tema.</strong>

        <br><br>

        Ejemplo:

        <strong>1</strong>

        o

        <strong>Historia del Perú</strong>

    `);

}


// ======================================================
// SELECCIONAR NIVEL DE INGLÉS
// ======================================================

function seleccionarNivelIngles(texto) {

    texto = normalizar(texto);


    if (

        texto === "basico" ||
        texto === "basica" ||
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

            <br><br>

            ✏️ Escribe uno de esos niveles.

        `);

        return;

    }


    cargarCurso();

}


// ======================================================
// OBTENER DATOS DEL CURSO
// ======================================================

function obtenerDatosCurso() {

    let datos = null;


    // ==================================================
    // MATEMÁTICA
    // ==================================================

    if (cursoSeleccionado === "matematica") {

        const temas = {};


        const numero = gradoSeleccionado;


        const archivos = {

            aritmetica:
                `aritmetica${numero}`,

            algebra:
                `algebra${numero}`,

            geometria:
                `geometria${numero}`,

            estadistica:
                `estadistica${numero}`

        };


        // ----------------------------------------------
        // ARITMÉTICA
        // ----------------------------------------------

        const aritmetica = obtenerVariable(archivos.aritmetica);

        if (aritmetica !== null) {

            temas.aritmetica = aritmetica;

        }


        // ----------------------------------------------
        // ÁLGEBRA
        // ----------------------------------------------

        let algebra = obtenerVariable(archivos.algebra);


        // Respaldo para 6 si todavía no existe algebra6

        if (

            algebra === null &&
            numero === "6"

        ) {

            algebra = obtenerVariable("algebra5");

        }


        if (algebra !== null) {

            temas.algebra = algebra;

        }


        // ----------------------------------------------
        // GEOMETRÍA
        // ----------------------------------------------

        const geometria = obtenerVariable(archivos.geometria);

        if (geometria !== null) {

            temas.geometria = geometria;

        }


        // ----------------------------------------------
        // ESTADÍSTICA
        // ----------------------------------------------

        const estadistica = obtenerVariable(archivos.estadistica);

        if (estadistica !== null) {

            temas.estadistica = estadistica;

        }


        if (Object.keys(temas).length > 0) {

            datos = temas;

        }

    }


    // ==================================================
    // COMUNICACIÓN
    // ==================================================

    else if (cursoSeleccionado === "comunicacion") {

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
    // NO USA GRADO
    // ==================================================

    else if (cursoSeleccionado === "ingles") {

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
// OBTENER VARIABLE GLOBAL DE FORMA SEGURA
// ======================================================

function obtenerVariable(nombre) {

    try {

        if (typeof window[nombre] !== "undefined") {

            return window[nombre];

        }

    }

    catch (error) {

        console.warn(
            "No se pudo cargar:",
            nombre
        );

    }


    return null;

}


// ======================================================
// ENCABEZADO DE TEMAS
// ======================================================

function mostrarEncabezadoTemas(datos) {

    let informacionExtra = "";


    if (cursoSeleccionado === "ingles") {

        informacionExtra = `
            <p>
                🇬🇧 Nivel:
                <strong>
                    ${capitalizar(nivelInglesSeleccionado)}
                </strong>
            </p>
        `;

    }

    else {

        informacionExtra = `
            <p>
                🎓 ${nombreGrado(gradoSeleccionado)}
            </p>
        `;

    }


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

            ${informacionExtra}

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

        if (clave === "nombre") continue;


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


    lista.forEach((tema, indice) => {

        const numero =
            String(indice + 1)
                .padStart(2, "0");


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
            iconos[
                indice % iconos.length
            ];


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
    // CIENCIAS SOCIALES
    // ==================================================

    if (cursoSeleccionado === "sociales") {

        const lista =
            window.socialesTemas || [];


        const elegido =
            lista.find((tema) => {

                const nombre =
                    normalizar(tema.nombre);


                return (

                    texto === tema.numero ||

                    texto === nombre ||

                    texto.includes(nombre) ||

                    nombre.includes(texto)

                );

            });


        if (!elegido) {

            responderBot(`

                ❌ <strong>
                No reconocí ese tema.
                </strong>

                <br><br>

                Puedes elegir:

                <br><br>

                <strong>1</strong> 🇵🇪
                Historia del Perú

                <br><br>

                <strong>2</strong> 🌎
                Historia Universal

                <br><br>

                <strong>3</strong> 💰
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


        let indice = null;


        // Número

        if (/^\d+$/.test(texto)) {

            indice =
                Number(texto) - 1;

        }


        let elegido =

            indice !== null &&
            lista[indice]

                ? lista[indice]

                : null;


        // Nombre

        if (!elegido) {

            elegido =
                lista.find((tema) => {

                    const clave =
                        normalizar(
                            tema.clave
                        );


                    const titulo =
                        normalizar(
                            tema.titulo
                        );


                    return (

                        texto === clave ||

                        texto === titulo ||

                        texto.includes(titulo) ||

                        titulo.includes(texto) ||

                        clave.includes(texto)

                    );

                });

        }


        if (!elegido) {

            responderBot(`

                ❌ <strong>
                No reconocí ese tema.
                </strong>

                <br><br>

                Escribe el número o nombre
                del tema exactamente como
                aparece en la lista.

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

            El nombre fue reconocido,
            pero el archivo de contenido
            no está disponible.

            <br><br>

            Verifica que el archivo JS
            correspondiente esté cargado
            antes de <strong>app.js</strong>.

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
                Ya puedes hacerme
                preguntas sobre este tema.
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

    if (!objeto) return null;


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


            if (resultado) {

                return resultado;

            }

        }


        return null;

    }


    // ==================================================
    // OBJETO
    // ==================================================

    if (typeof objeto === "object") {

        for (const clave in objeto) {

            if (clave === "nombre") continue;


            const claveNormalizada =
                normalizar(
                    convertirNombre(clave)
                );


            // BUSCAR POR NOMBRE

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


            // BUSCAR DENTRO

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


// ======================================================
// FORMATEAR CONTENIDO
// ======================================================

function formatearContenido(contenido) {

    if (typeof contenido === "string") {

        return contenido;

    }


    if (Array.isArray(contenido)) {

        return contenido

            .map((item) => {

                if (typeof item === "string") {

                    return `
                        📌 ${escapeHTML(item)}
                    `;

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

    return String(texto)

        .toLowerCase()

        .normalize("NFD")

        .replace(
            /[\u0300-\u036f]/g,
            ""
        )

        .replace(/\s+/g, " ")

        .trim();

}


// ======================================================
// CONVERTIR NOMBRE
// ======================================================

function convertirNombre(texto) {

    if (!texto) return "";


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


    return iconos[
        cursoSeleccionado
    ] || "📚";

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


    return nombres[grado]
        || "Grado desconocido";

}


// ======================================================
// CAPITALIZAR
// ======================================================

function capitalizar(texto) {

    if (!texto) return "";


    return texto.charAt(0).toUpperCase()
        +
        texto.slice(1);

}


// ======================================================
// MOSTRAR USUARIO
// ======================================================

function mostrarUsuario(texto) {

    const chat =
        document.getElementById("chat");


    if (!chat) return;


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


    chat.appendChild(mensaje);


    chat.scrollTop =
        chat.scrollHeight;

}


// ======================================================
// MOSTRAR BOT
// ======================================================

function responderBot(texto) {

    const chat =
        document.getElementById("chat");


    if (!chat) return;


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
// SEGURIDAD HTML
// ======================================================

function escapeHTML(texto) {

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


    const chat =
        document.getElementById("chat");


    if (chat) {

        chat.innerHTML = `

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


// ======================================================
// BOTONES VISUALES DE CURSOS
// ======================================================

window.addEventListener("load", function () {


    // ==================================================
    // BOTONES DATA-CURSO
    // ==================================================

    document
        .querySelectorAll("[data-curso]")
        .forEach((boton) => {

            boton.addEventListener(
                "click",
                function () {

                    const curso =
                        normalizar(
                            this.dataset.curso
                        );


                    seleccionarCurso(curso);

                }
            );

        });


    // ==================================================
    // BOTÓN NUEVO CHAT
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

});


// ======================================================
// MENSAJES DE CONSOLA
// ======================================================

console.log(
    "🤖 Edu BOT IA cargado correctamente."
);

console.log(
    "📚 Sistema: Curso → Grado/Nivel → Temas → Preguntas"
);

console.log(
    "🌎 Sociales: acceso directo a temas."
);

console.log(
    "🇬🇧 Inglés: acceso directo a niveles."
);

console.log(
    "🧮 Matemática: grados y temas activados."
);

console.log(
    "🧪 Ciencia y Tecnología: grados y temas activados."
);
