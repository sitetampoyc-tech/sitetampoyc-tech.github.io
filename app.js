// ======================================================
// EDU BOT IA
// SISTEMA DE CURSOS → GRADO → TEMAS → PREGUNTAS
// ======================================================

// ======================================================
// VARIABLES
// ======================================================

let estado = "curso";

let cursoSeleccionado = "";

let gradoSeleccionado = "";

let nivelInglesSeleccionado = "";

let temaSeleccionado = "";

let datosTemaSeleccionado = null;


// ======================================================
// ELEMENTOS
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
// ENTER
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

    const textoOriginal =
        pregunta.value.trim();

    if (!textoOriginal) return;

    const texto =
        normalizar(textoOriginal);

    mostrarUsuario(textoOriginal);

    pregunta.value = "";


    // --------------------------------------------------
    // CURSO
    // --------------------------------------------------

    if (estado === "curso") {

        seleccionarCurso(texto);

        return;

    }


    // --------------------------------------------------
    // GRADO
    // --------------------------------------------------

    if (estado === "grado") {

        const grado =
            detectarGrado(texto);

        if (!grado) {

            responderBot(`
                ❌ <strong>No reconocí ese grado.</strong><br><br>

                Puedes escribir:<br><br>

                🟢 6 primaria<br>
                🔵 1 secundaria<br>
                🟣 2 secundaria<br>
                🟠 3 secundaria<br>
                🔴 4 secundaria<br>
                🟤 5 secundaria
            `);

            return;

        }


        gradoSeleccionado = grado;


        // ------------------------------------------------
        // INGLÉS
        // ------------------------------------------------

        if (cursoSeleccionado === "ingles") {

            estado = "nivel";

            responderBot(`

                🇬🇧 <strong>INGLÉS</strong><br><br>

                🎓 Grado seleccionado:
                <strong>${nombreGrado(grado)}</strong><br><br>

                Ahora selecciona tu nivel:<br><br>

                🟢 <strong>Básico</strong><br>
                🔵 <strong>Intermedio</strong><br>
                🟣 <strong>Avanzado</strong><br><br>

                ✏️ Escribe:
                <strong>básico</strong>,
                <strong>intermedio</strong>
                o
                <strong>avanzado</strong>.

            `);

            return;

        }


        // ------------------------------------------------
        // RESTO DE CURSOS
        // ------------------------------------------------

        cargarCurso();

        return;

    }


    // --------------------------------------------------
    // NIVEL DE INGLÉS
    // --------------------------------------------------

    if (estado === "nivel") {

        seleccionarNivelIngles(texto);

        return;

    }


    // --------------------------------------------------
    // TEMA
    // --------------------------------------------------

    if (estado === "tema") {

        seleccionarTema(texto);

        return;

    }


    // --------------------------------------------------
    // PREGUNTA
    // --------------------------------------------------

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
    // ==================================================

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


    // ==================================================
    // NO RECONOCIDO
    // ==================================================

    responderBot(`

        ❌ <strong>No reconocí ese curso.</strong><br><br>

        Puedes elegir uno de estos:

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

        ✏️ Escribe el grado.
        <br><br>

        Ejemplo:
        <strong>3 secundaria</strong>

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
    // RESTO
    // ==================================================

    const datos =
        obtenerDatosCurso();


    if (!datos) {

        responderBot(`

            ❌ <strong>No encontré los contenidos.</strong>

            <br><br>

            El grado
            <strong>
                ${nombreGrado(gradoSeleccionado)}
            </strong>
            fue reconocido correctamente.

            <br><br>

            Pero no encontré los datos de
            <strong>
                ${nombreCurso(cursoSeleccionado)}
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
// CIENCIA Y TECNOLOGÍA
// ======================================================

function cargarCienciaTecnologia() {

    if (
        typeof cyt === "undefined"
    ) {

        responderBot(`

            ❌ <strong>No se cargó cyt.js.</strong>

            <br><br>

            Verifica que:

            <br>

            <strong>cyt.js</strong>

            esté antes de

            <strong>app.js</strong>.

        `);

        return;

    }


    const datos =
        cyt[gradoSeleccionado];


    if (!datos) {

        responderBot(`

            ❌ No encontré contenidos
            de Ciencia y Tecnología
            para este grado.

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
// ======================================================

function cargarSociales() {

    estado = "tema";

    temaSeleccionado = "";

    datosTemaSeleccionado = null;


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
                ${nombreGrado(gradoSeleccionado)}
            </p>

            <div class="selector-linea"></div>

            <h3>
                🧠 Selecciona un tema
            </h3>

        </div>

    `);


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


    temas.forEach(tema => {

        responderBot(`

            <div class="tema-futurista">

                <span class="tema-numero">
                    ${tema.numero}
                </span>

                <span class="tema-icono">
                    ${tema.icono}
                </span>

                <strong>
                    ${tema.nombre}
                </strong>

            </div>

        `);

    });


    responderBot(`

        <br>

        ✏️ Escribe el
        <strong>número</strong>
        o el
        <strong>nombre</strong>
        del tema.

    `);


    window.socialesTemas = temas;

}


// ======================================================
// NIVEL DE INGLÉS
// ======================================================

function seleccionarNivelIngles(texto) {

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

            🟢 Básico<br>

            🔵 Intermedio<br>

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

    if (
        cursoSeleccionado === "matematica"
    ) {

        const temas = {};


        if (
            gradoSeleccionado === "1"
        ) {

            if (
                typeof aritmetica1 !== "undefined"
            )
                temas.aritmetica =
                    aritmetica1;

            if (
                typeof algebra1 !== "undefined"
            )
                temas.algebra =
                    algebra1;

            if (
                typeof geometria1 !== "undefined"
            )
                temas.geometria =
                    geometria1;

            if (
                typeof estadistica1 !== "undefined"
            )
                temas.estadistica =
                    estadistica1;

        }


        else if (
            gradoSeleccionado === "2"
        ) {

            if (
                typeof aritmetica2 !== "undefined"
            )
                temas.aritmetica =
                    aritmetica2;

            if (
                typeof algebra2 !== "undefined"
            )
                temas.algebra =
                    algebra2;

            if (
                typeof geometria2 !== "undefined"
            )
                temas.geometria =
                    geometria2;

            if (
                typeof estadistica2 !== "undefined"
            )
                temas.estadistica =
                    estadistica2;

        }


        else if (
            gradoSeleccionado === "3"
        ) {

            if (
                typeof aritmetica3 !== "undefined"
            )
                temas.aritmetica =
                    aritmetica3;

            if (
                typeof algebra3 !== "undefined"
            )
                temas.algebra =
                    algebra3;

            if (
                typeof geometria3 !== "undefined"
            )
                temas.geometria =
                    geometria3;

            if (
                typeof estadistica3 !== "undefined"
            )
                temas.estadistica =
                    estadistica3;

        }


        else if (
            gradoSeleccionado === "4"
        ) {

            if (
                typeof aritmetica4 !== "undefined"
            )
                temas.aritmetica =
                    aritmetica4;

            if (
                typeof algebra4 !== "undefined"
            )
                temas.algebra =
                    algebra4;

            if (
                typeof geometria4 !== "undefined"
            )
                temas.geometria =
                    geometria4;

            if (
                typeof estadistica4 !== "undefined"
            )
                temas.estadistica =
                    estadistica4;

        }


        else if (
            gradoSeleccionado === "5"
        ) {

            if (
                typeof aritmetica5 !== "undefined"
            )
                temas.aritmetica =
                    aritmetica5;

            if (
                typeof algebra5 !== "undefined"
            )
                temas.algebra =
                    algebra5;

            if (
                typeof geometria5 !== "undefined"
            )
                temas.geometria =
                    geometria5;

            if (
                typeof estadistica5 !== "undefined"
            )
                temas.estadistica =
                    estadistica5;

        }


        else if (
            gradoSeleccionado === "6"
        ) {

            if (
                typeof aritmetica6 !== "undefined"
            )
                temas.aritmetica =
                    aritmetica6;

            // CORREGIDO: algebra6 si existe
            if (
                typeof algebra6 !== "undefined"
            )
                temas.algebra =
                    algebra6;

            // respaldo si todavía no tienes algebra6
            else if (
                typeof algebra5 !== "undefined"
            )
                temas.algebra =
                    algebra5;

            if (
                typeof geometria6 !== "undefined"
            )
                temas.geometria =
                    geometria6;

            if (
                typeof estadistica6 !== "undefined"
            )
                temas.estadistica =
                    estadistica6;

        }


        if (
            Object.keys(temas).length
        ) {

            datos = temas;

        }

    }


    // ==================================================
    // COMUNICACIÓN
    // ==================================================

    if (
        cursoSeleccionado === "comunicacion"
    ) {

        if (
            typeof comunicacion !== "undefined"
        ) {

            datos =
                comunicacion[gradoSeleccionado]
                ||
                comunicacion;

        }

        else if (
            typeof comunicacion1 !== "undefined"
        ) {

            datos =
                comunicacion1[gradoSeleccionado]
                ||
                comunicacion1;

        }

    }


    // ==================================================
    // INGLÉS
    // ==================================================

    if (
        cursoSeleccionado === "ingles"
    ) {

        if (
            nivelInglesSeleccionado === "basico" &&
            typeof inglesBasico !== "undefined"
        ) {

            datos =
                inglesBasico;

        }


        else if (
            nivelInglesSeleccionado === "intermedio" &&
            typeof inglesIntermedio !== "undefined"
        ) {

            datos =
                inglesIntermedio;

        }


        else if (
            nivelInglesSeleccionado === "avanzado" &&
            typeof inglesAvanzado !== "undefined"
        ) {

            datos =
                inglesAvanzado;

        }

    }


    return datos;

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
                ${nombreGrado(gradoSeleccionado)}

                ${
                    cursoSeleccionado === "ingles"
                    ? " • Nivel " +
                      capitalizar(
                          nivelInglesSeleccionado
                      )
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

    if (!objeto)
        return [];


    const principal =

        objeto.temas &&
        typeof objeto.temas === "object"

            ? objeto.temas

            : objeto;


    const lista = [];


    for (
        const clave in principal
    ) {

        if (
            clave === "nombre"
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


    if (
        !lista.length
    ) {

        responderBot(`

            ❌ <strong>
            No encontré temas disponibles
            para este curso.
            </strong>

        `);

        return;

    }


    lista.forEach(
        (tema, indice) => {

            const numero =
                String(
                    indice + 1
                ).padStart(2, "0");


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
                    indice %
                    iconos.length
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
                        ${escapeHTML(
                            tema.titulo
                        )}
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

    `);

}


// ======================================================
// SELECCIONAR TEMA
// ======================================================

function seleccionarTema(texto) {

    texto =
        normalizar(texto);


    // ==================================================
    // SOCIALES
    // ==================================================

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
                        tema.numero

                        ||

                        texto ===
                        nombre

                        ||

                        texto.includes(
                            nombre
                        )

                    );

                }
            );


        if (!elegido) {

            responderBot(`

                ❌ <strong>
                No reconocí ese tema.
                </strong>

                <br><br>

                Escribe:

                <br>

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


    // ==================================================
    // RESTO DE CURSOS
    // ==================================================

    else {

        const datos =
            obtenerDatosCurso();


        const lista =
            obtenerListaTemas(
                datos
            );


        let indice = null;


        if (
            /^\d+$/.test(texto)
        ) {

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


                        return (

                            texto === clave ||

                            texto === titulo ||

                            texto.includes(
                                titulo
                            ) ||

                            titulo.includes(
                                texto
                            ) ||

                            clave.includes(
                                texto
                            )

                        );

                    }
                );

        }


        if (!elegido) {

            responderBot(`

                ❌ <strong>
                No reconocí ese tema.
                </strong>

                <br><br>

                Escribe el número o
                nombre exactamente como
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

    if (
        !datosTemaSeleccionado
    ) {

        responderBot(`

            ❌ <strong>
            El tema fue seleccionado,
            pero no encontré su
            información.
            </strong>

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
                ${escapeHTML(
                    temaSeleccionado
                )}
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

    if (
        !datosTemaSeleccionado
    ) {

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
            ${escapeHTML(
                resultado.titulo
            )}
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
        ${escapeHTML(
            temaSeleccionado
        )}.
        </strong>

        <br><br>

        Prueba escribiendo otra pregunta
        relacionada con este tema.

    `);

}


// ======================================================
// BUSCAR RECURSIVO
// ======================================================

function buscarRecursivo(
    objeto,
    texto
) {

    if (!objeto)
        return null;


    // TEXTO

    if (
        typeof objeto === "string"
    ) {

        const contenido =
            normalizar(
                objeto
            );


        if (

            contenido.includes(
                texto
            )

            ||

            texto.includes(
                contenido
            )

        ) {

            return {

                titulo:
                    objeto,

                contenido:
                    objeto

            };

        }


        return null;

    }


    // ARRAY

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


    // OBJETO

    if (
        typeof objeto === "object"
    ) {

        for (
            const clave in objeto
        ) {

            if (
                clave === "nombre"
            )
                continue;


            const claveNormalizada =
                normalizar(
                    convertirNombre(
                        clave
                    )
                );


            // BUSCAR POR NOMBRE

            if (

                claveNormalizada.includes(
                    texto
                )

                ||

                texto.includes(
                    claveNormalizada
                )

            ) {

                return {

                    titulo:
                        convertirNombre(
                            clave
                        ),

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


            if (resultado)
                return resultado;

        }

    }


    return null;

}


// ======================================================
// FORMATEAR CONTENIDO
// ======================================================

function formatearContenido(
    contenido
) {

    if (
        typeof contenido === "string"
    ) {

        return contenido;

    }


    if (
        Array.isArray(contenido)
    ) {

        return contenido

            .map(
                item => {

                    if (
                        typeof item === "string"
                    ) {

                        return `
                            📌 ${escapeHTML(item)}
                        `;

                    }


                    return formatearContenido(
                        item
                    );

                }
            )

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
                    📌 ${escapeHTML(
                        convertirNombre(
                            clave
                        )
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
// NORMALIZAR
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
// CONVERTIR NOMBRE
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
// NOMBRE CURSO
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


    return nombres[curso]
        || curso;

}


// ======================================================
// ICONO CURSO
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
    ]
        || "📚";

}


// ======================================================
// NOMBRE GRADO
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

    const chat =
        document.getElementById(
            "chat"
        );


    if (!chat)
        return;


    const mensaje =
        document.createElement(
            "div"
        );


    mensaje.className =
        "usuario";


    mensaje.innerHTML = `

        <strong>
            Tú:
        </strong>

        ${escapeHTML(
            texto
        )}

    `;


    chat.appendChild(
        mensaje
    );


    chat.scrollTop =
        chat.scrollHeight;

}


// ======================================================
// MOSTRAR BOT
// ======================================================

function responderBot(texto) {

    const chat =
        document.getElementById(
            "chat"
        );


    if (!chat)
        return;


    const mensaje =
        document.createElement(
            "div"
        );


    mensaje.className =
        "bot";


    mensaje.innerHTML =
        texto;


    chat.appendChild(
        mensaje
    );


    chat.scrollTop =
        chat.scrollHeight;

}


// ======================================================
// SEGURIDAD
// ======================================================

function escapeHTML(texto) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        texto;


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
        document.getElementById(
            "chat"
        );


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

            </div>

        `;

    }


    if (pregunta) {

        pregunta.value = "";

    }

}


// ======================================================
// BOTONES VISUALES DE CURSOS
// ======================================================

window.addEventListener(
    "load",
    function () {

        document
            .querySelectorAll(
                "[data-curso]"
            )
            .forEach(
                boton => {

                    boton.addEventListener(
                        "click",
                        function () {

                            const curso =
                                normalizar(
                                    this.dataset
                                        .curso
                                );


                            seleccionarCurso(
                                curso
                            );

                        }
                    );

                }
            );


        const nuevoChat =
            document.getElementById(
                "nuevoChat"
            );


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
// FIN
// ======================================================

console.log(
    "🤖 Edu BOT IA cargado correctamente."
);

console.log(
    "📚 Cursos activos: Matemática, Comunicación, Ciencia y Tecnología, Ciencias Sociales e Inglés."
);
