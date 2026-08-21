// ======================================================
// EDU BOT IA - APP.JS
// ======================================================

let estado = "curso";
let cursoSeleccionado = "";
let gradoSeleccionado = "";

// ======================================================
// ELEMENTOS
// ======================================================

const pregunta = document.getElementById("pregunta");
const enviar = document.getElementById("enviar");
const chat = document.querySelector(".chat");

// ======================================================
// INICIO
// ======================================================

window.addEventListener("load", function () {

    console.log("=================================");
    console.log("🤖 EDU BOT INICIADO");
    console.log("=================================");

    // No mostrar mensaje duplicado
    if (chat && chat.children.length === 0) {
        mostrarInicio();
    }

});

// ======================================================
// MENSAJE INICIAL
// ======================================================

function mostrarInicio() {

    responderBot(`
        🤖 <strong>Hola</strong><br><br>

        Soy <strong>Edu BOT</strong> y estoy preparado para ayudarte a aprender.<br><br>

        📚 <strong>¿Qué curso deseas aprender?</strong><br><br>

        📗 Matemática<br>
        📘 Comunicación<br>
        🧪 Ciencia y Tecnología<br>
        🌎 Ciencias Sociales<br>
        🇬🇧 Inglés<br>
        💻 Computación<br><br>

        ✏️ <strong>Escribe el nombre del curso para comenzar.</strong>
    `);

}

// ======================================================
// BOTÓN ENVIAR
// ======================================================

if (enviar) {

    enviar.addEventListener("click", function () {
        responder();
    });

}

// ======================================================
// ENTER
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
// FUNCIÓN PRINCIPAL
// ======================================================

function responder() {

    if (!pregunta) {
        console.error("❌ No existe #pregunta");
        return;
    }

    const textoOriginal = pregunta.value.trim();

    if (textoOriginal === "") {
        return;
    }

    const texto = normalizar(textoOriginal);

    mostrarUsuario(textoOriginal);

    pregunta.value = "";

    // ==================================================
    // CURSO
    // ==================================================

    if (estado === "curso") {

        seleccionarCurso(texto);

        return;
    }

    // ==================================================
    // GRADO
    // ==================================================

    if (estado === "grado") {

        const grado = detectarGrado(texto);

        if (!grado) {

            responderBot(`
                ❌ <strong>No reconocí ese grado.</strong><br><br>

                Puedes escribir:<br><br>

                🟢 6 primaria<br>
                🔵 1 secundaria<br>
                🟣 2 secundaria<br>
                🟠 3 secundaria<br>
                🔴 4 secundaria<br>
                🟤 5 secundaria<br><br>

                También puedes escribir solamente:
                <strong>1, 2, 3, 4, 5 o 6</strong>.
            `);

            return;
        }

        gradoSeleccionado = grado;

        console.log("🎓 Grado:", gradoSeleccionado);
        console.log("📚 Curso:", cursoSeleccionado);

        cargarCurso();

        return;
    }

    // ==================================================
    // NIVEL DE INGLÉS
    // ==================================================

    if (estado === "nivel") {

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
                ❌ <strong>No reconocí ese nivel.</strong><br><br>

                Elige uno de estos niveles:<br><br>

                🟢 <strong>Básico</strong><br>
                🔵 <strong>Intermedio</strong><br>
                🟣 <strong>Avanzado</strong><br><br>

                ✏️ Escribe <strong>básico</strong>,
                <strong>intermedio</strong> o
                <strong>avanzado</strong>.
            `);

            return;
        }

        console.log(
            "🇬🇧 Nivel de Inglés:",
            nivelInglesSeleccionado
        );

        cargarCurso();

        return;
    }

    // ==================================================
    // TEMA DE CIENCIAS SOCIALES
    // ==================================================

    if (
        estado === "tema" &&
        cursoSeleccionado === "sociales"
    ) {

        if (
            texto === "historia del peru" ||
            texto.includes("historia del peru")
        ) {

            temaSeleccionado = "historiaPeru";

        }

        else if (
            texto === "historia universal" ||
            texto.includes("historia universal")
        ) {

            temaSeleccionado = "historiaUniversal";

        }

        else if (
            texto === "economia" ||
            texto.includes("economia")
        ) {

            temaSeleccionado = "economia";

        }

        else {

            responderBot(`
                ❌ <strong>No reconocí ese tema.</strong><br><br>

                Elige uno de estos temas:<br><br>

                🇵🇪 <strong>Historia del Perú</strong><br>
                🌎 <strong>Historia Universal</strong><br>
                💰 <strong>Economía</strong><br><br>

                ✏️ Escribe el nombre del tema.
            `);

            return;
        }

        console.log(
            "🌎 Tema de Sociales:",
            temaSeleccionado
        );

        // Buscar el contenido del tema seleccionado
        buscarTema(texto);

        return;
    }

    // ==================================================
    // TEMA DE LOS DEMÁS CURSOS
    // ==================================================

    if (estado === "tema") {

        buscarTema(texto);

        return;
    }

}
    // ==================================================
    // TEMA
    // ==================================================

    if (estado === "tema") {

        buscarTema(texto);

        return;
    }

}

// ======================================================
// SELECCIONAR CURSO
// ======================================================

function seleccionarCurso(texto) {

    // --------------------------------------------------
    // CIENCIA Y TECNOLOGÍA
    // --------------------------------------------------

    if (
        texto === "cyt" ||
        texto.includes("ciencia y tecnologia") ||
        texto.includes("ciencia tecnologia") ||
        texto === "ciencia" ||
        texto.includes("tecnologia")
    ) {

        cursoSeleccionado = "cyt";
        estado = "grado";

        responderBot(`
            🧪 <strong>CIENCIA Y TECNOLOGÍA</strong><br><br>

            ✅ Curso seleccionado correctamente.<br><br>

            ¿Qué grado deseas estudiar?
        `);

        mostrarGrados();

        return;
    }

    // --------------------------------------------------
    // MATEMÁTICA
    // --------------------------------------------------

    if (
        texto === "mat" ||
        texto === "mate" ||
        texto === "matematica" ||
        texto === "matematicas"
    ) {

        cursoSeleccionado = "matematica";
        estado = "grado";

        responderBot(`
            📗 <strong>MATEMÁTICA</strong><br><br>

            ✅ Curso seleccionado correctamente.<br><br>

            ¿Qué grado deseas estudiar?
        `);

        mostrarGrados();

        return;
    }

    // --------------------------------------------------
    // COMUNICACIÓN
    // --------------------------------------------------

    if (
        texto === "com" ||
        texto === "comunicacion" ||
        texto.includes("comunicacion")
    ) {

        cursoSeleccionado = "comunicacion";
        estado = "grado";

        responderBot(`
            📘 <strong>COMUNICACIÓN</strong><br><br>

            ✅ Curso seleccionado correctamente.<br><br>

            ¿Qué grado deseas estudiar?
        `);

        mostrarGrados();

        return;
    }

   // --------------------------------------------------
// CIENCIAS SOCIALES
// --------------------------------------------------

if (
    texto === "sociales" ||
    texto === "ciencias sociales" ||
    texto.includes("ciencias sociales")
) {

    cursoSeleccionado = "sociales";
    estado = "tema";
    temaSeleccionado = "";

    responderBot(`
        🌎 <strong>CIENCIAS SOCIALES</strong><br><br>

        ✅ Curso seleccionado correctamente.<br><br>

        📚 <strong>¿Qué tema deseas estudiar?</strong><br><br>

        🇵🇪 <strong>Historia del Perú</strong><br>
        🌎 <strong>Historia Universal</strong><br>
        💰 <strong>Economía</strong><br><br>

        ✏️ Escribe el nombre del tema.
    `);

    return;
}

// --------------------------------------------------
// INGLÉS
// --------------------------------------------------

if (
    texto === "ingles" ||
    texto === "inglés" ||
    texto.includes("idioma ingles")
) {

    cursoSeleccionado = "ingles";
    estado = "nivel";
    nivelInglesSeleccionado = "";

    responderBot(`
        🇬🇧 <strong>INGLÉS</strong><br><br>

        ✅ Curso seleccionado correctamente.<br><br>

        📚 <strong>¿Qué nivel deseas estudiar?</strong><br><br>

        🟢 <strong>Básico</strong><br>
        🔵 <strong>Intermedio</strong><br>
        🟣 <strong>Avanzado</strong><br><br>

        ✏️ Escribe <strong>básico</strong>, 
        <strong>intermedio</strong> o 
        <strong>avanzado</strong>.
    `);

    return;
}

    // --------------------------------------------------
    // COMPUTACIÓN
    // --------------------------------------------------

    if (
        texto === "computacion" ||
        texto === "computación" ||
        texto === "computadora" ||
        texto === "informatica" ||
        texto === "informática"
    ) {

        cursoSeleccionado = "computacion";
        estado = "grado";

        responderBot(`
            💻 <strong>COMPUTACIÓN</strong><br><br>

            ✅ Curso seleccionado correctamente.<br><br>

            ¿Qué grado deseas estudiar?
        `);

        mostrarGrados();

        return;
    }

    // --------------------------------------------------
    // NO RECONOCIDO
    // --------------------------------------------------

    responderBot(`
        ❌ <strong>No reconocí ese curso.</strong><br><br>

        Puedes escribir:<br><br>

        📗 Matemática<br>
        📘 Comunicación<br>
        🧪 Ciencia y Tecnología<br>
        🌎 Ciencias Sociales<br>
        🇬🇧 Inglés<br>
        💻 Computación
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
        texto.includes("6 grado")
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
// MOSTRAR GRADOS
// ======================================================

function mostrarGrados() {

    responderBot(`
        🎓 <strong>Selecciona tu grado:</strong><br><br>

        🟢 <strong>6 primaria</strong><br>
        🔵 <strong>1 secundaria</strong><br>
        🟣 <strong>2 secundaria</strong><br>
        🟠 <strong>3 secundaria</strong><br>
        🔴 <strong>4 secundaria</strong><br>
        🟤 <strong>5 secundaria</strong><br><br>

        👉 Ejemplo:
        <strong>3 secundaria</strong><br><br>

        También puedes escribir solamente:
        <strong>1, 2, 3, 4, 5 o 6</strong>.
    `);

}

// ======================================================
// CARGAR CUALQUIER CURSO
// ======================================================

function cargarCurso() {

    // ==================================================
    // CIENCIA Y TECNOLOGÍA
    // ==================================================

    if (cursoSeleccionado === "cyt") {

        cargarCienciaTecnologia(gradoSeleccionado);

        return;
    }

    // ==================================================
    // BUSCAR ARCHIVO DEL CURSO
    // ==================================================

    let datos = obtenerDatosCurso();

    if (!datos) {

        responderBot(`
            ❌ <strong>No encontré los contenidos.</strong><br><br>

            El grado
            <strong>${nombreGrado(gradoSeleccionado)}</strong>
            fue reconocido correctamente.<br><br>

            Pero todavía falta cargar el archivo de conocimientos
            de <strong>${nombreCurso(cursoSeleccionado)}</strong>.
        `);

        return;
    }

    estado = "tema";

    responderBot(`
        ✅ <strong>${nombreGrado(gradoSeleccionado)}</strong><br><br>

        📚 Curso:
        <strong>${nombreCurso(cursoSeleccionado)}</strong><br><br>

        📖 Estos son los temas disponibles:
    `);

    mostrarTemas(datos);

}

// ======================================================
// OBTENER DATOS DEL CURSO
// ======================================================

function obtenerDatosCurso() {

    let datos = null;

    // --------------------------------------------------
// MATEMÁTICA
// --------------------------------------------------

if (cursoSeleccionado === "matematica") {

    // ==============================================
    // 1. ARITMÉTICA
    // ==============================================

    if (gradoSeleccionado === "1" && typeof aritmetica1 !== "undefined") {
        datos = aritmetica1;
    }

    else if (gradoSeleccionado === "2" && typeof aritmetica2 !== "undefined") {
        datos = aritmetica2;
    }

    else if (gradoSeleccionado === "3" && typeof aritmetica3 !== "undefined") {
        datos = aritmetica3;
    }

    else if (gradoSeleccionado === "4" && typeof aritmetica4 !== "undefined") {
        datos = aritmetica4;
    }

    else if (gradoSeleccionado === "5" && typeof aritmetica5 !== "undefined") {
        datos = aritmetica5;
    }

    else if (gradoSeleccionado === "6" && typeof aritmetica6 !== "undefined") {
        datos = aritmetica6;
    }

}

    // --------------------------------------------------
    // COMUNICACIÓN
    // --------------------------------------------------

    if (cursoSeleccionado === "comunicacion") {

        if (typeof comunicacion !== "undefined") {

            datos = comunicacion[gradoSeleccionado] || comunicacion;

        }

        else if (typeof comunicacion1 !== "undefined") {

            datos = comunicacion1[gradoSeleccionado] || comunicacion1;

        }

    }

    // --------------------------------------------------
    // SOCIALES
    // --------------------------------------------------

    if (cursoSeleccionado === "sociales") {

        if (typeof sociales !== "undefined") {

            datos = sociales[gradoSeleccionado] || sociales;

        }

        else if (typeof social !== "undefined") {

            datos = social[gradoSeleccionado] || social;

        }

    }

   // --------------------------------------------------
// INGLÉS
// --------------------------------------------------

if (cursoSeleccionado === "ingles") {

    // ==============================
    // BÁSICO
    // ==============================

    if (nivelInglesSeleccionado === "basico") {

        if (typeof inglesBasico !== "undefined") {

            datos = inglesBasico;

        }

    }

    // ==============================
    // INTERMEDIO
    // ==============================

    else if (nivelInglesSeleccionado === "intermedio") {

        if (typeof inglesIntermedio !== "undefined") {

            datos = inglesIntermedio;

        }

    }

    // ==============================
    // AVANZADO
    // ==============================

    else if (nivelInglesSeleccionado === "avanzado") {

        if (typeof inglesAvanzado !== "undefined") {

            datos = inglesAvanzado;

        }

    }

}

    // --------------------------------------------------
    // COMPUTACIÓN
    // --------------------------------------------------

    if (cursoSeleccionado === "computacion") {

        if (typeof computacion !== "undefined") {

            datos = computacion[gradoSeleccionado] || computacion;

        }

    }

    return datos;
}

// ======================================================
// CIENCIA Y TECNOLOGÍA
// ======================================================

function cargarCienciaTecnologia(grado) {

    if (typeof cyt === "undefined") {

        responderBot(`
            ❌ <strong>No se cargó cyt.js.</strong><br><br>

            Verifica que <strong>cyt.js</strong> esté antes
            de <strong>app.js</strong>.
        `);

        return;
    }

    if (!cyt[grado]) {

        responderBot(`
            ❌ <strong>No encontré el grado ${grado}.</strong>
        `);

        return;
    }

    const datos = cyt[grado];

    estado = "tema";

    responderBot(`
        ✅ <strong>${datos.nombre}</strong><br><br>

        🧪 <strong>CIENCIA Y TECNOLOGÍA</strong><br><br>

        📚 Estos son los temas disponibles:
    `);

    mostrarTemas(datos);

}

// ======================================================
// MOSTRAR TEMAS
// ======================================================

function mostrarTemas(objeto) {

    if (!objeto) {
        return;
    }

    let numero = 1;

    const contenidoPrincipal =
        objeto.temas &&
        typeof objeto.temas === "object"
            ? objeto.temas
            : objeto;

    for (const clave in contenidoPrincipal) {

        if (clave === "nombre") {
            continue;
        }

        const contenido = contenidoPrincipal[clave];

        const titulo = convertirNombre(clave);

        responderBot(`
            <strong>${numero}. 📚 ${titulo}</strong>
        `);

        if (Array.isArray(contenido)) {

            contenido.forEach(function (tema) {

                if (typeof tema === "string") {

                    responderBot(`
                        📌 ${tema}
                    `);

                }

                else if (
                    typeof tema === "object" &&
                    tema !== null
                ) {

                    mostrarSubtemas(tema);

                }

            });

        }

        else if (
            typeof contenido === "object" &&
            contenido !== null
        ) {

            mostrarSubtemas(contenido);

        }

        else if (typeof contenido === "string") {

            responderBot(`
                📌 ${contenido}
            `);

        }

        numero++;
    }

    responderBot(`
        <br>

        ✏️ <strong>Escribe el nombre del tema que deseas aprender.</strong>
    `);

}

// ======================================================
// SUBTEMAS
// ======================================================

function mostrarSubtemas(objeto) {

    if (!objeto) {
        return;
    }

    for (const clave in objeto) {

        const valor = objeto[clave];

        if (Array.isArray(valor)) {

            responderBot(`
                📌 <strong>${convertirNombre(clave)}</strong>
            `);

            valor.forEach(function (tema) {

                if (typeof tema === "string") {

                    responderBot(`
                        📚 ${tema}
                    `);

                }

            });

        }

        else if (
            typeof valor === "object" &&
            valor !== null
        ) {

            responderBot(`
                📌 <strong>${convertirNombre(clave)}</strong>
            `);

            mostrarSubtemas(valor);

        }

        else if (typeof valor === "string") {

            responderBot(`
                📚 ${valor}
            `);

        }

    }

}

// ======================================================
// BUSCAR TEMA
// ======================================================

function buscarTema(texto) {

    texto = normalizar(texto);

    let datos = null;

    // ==================================================
    // CIENCIA Y TECNOLOGÍA
    // ==================================================

    if (cursoSeleccionado === "cyt") {

        if (typeof cyt !== "undefined") {

            datos = cyt[gradoSeleccionado];

        }

    }

    // ==================================================
    // OTROS CURSOS
    // ==================================================

    else {

        datos = obtenerDatosCurso();

    }

    if (!datos) {

        responderBot(`
            ❌ <strong>No encontré los contenidos del curso.</strong>
        `);

        return;
    }

    console.log("🔎 Buscando:", texto);

    const resultado = buscarRecursivo(datos, texto);

    if (resultado) {

        responderBot(`
            📚 <strong>${resultado.titulo}</strong><br><br>

            ${resultado.contenido}
        `);

    }

    else {

        responderBot(`
            ❌ <strong>No encontré ese tema todavía.</strong><br><br>

            ✏️ Intenta escribir el nombre del tema
            tal como aparece en la lista.
        `);

    }

}

// ======================================================
// BUSCADOR RECURSIVO
// ======================================================

function buscarRecursivo(objeto, texto) {

    if (!objeto) {
        return null;
    }

    // TEXTO

    if (typeof objeto === "string") {

        const contenido = normalizar(objeto);

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

    // ARRAY

    if (Array.isArray(objeto)) {

        for (const elemento of objeto) {

            const resultado =
                buscarRecursivo(elemento, texto);

            if (resultado) {
                return resultado;
            }

        }

        return null;
    }

    // OBJETO

    if (typeof objeto === "object") {

        for (const clave in objeto) {

            if (clave === "nombre") {
                continue;
            }

            const claveNormalizada =
                normalizar(convertirNombre(clave));

            // Buscar por nombre de categoría

            if (
                claveNormalizada.includes(texto) ||
                texto.includes(claveNormalizada)
            ) {

                return {

                    titulo: convertirNombre(clave),

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

// ======================================================
// FORMATEAR CONTENIDO
// ======================================================

function formatearContenido(contenido) {

    if (typeof contenido === "string") {

        return contenido;

    }

    if (Array.isArray(contenido)) {

        return contenido
            .map(item => {

                if (typeof item === "string") {

                    return `📌 ${item}`;

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
                <strong>📌 ${convertirNombre(clave)}</strong><br>

                ${formatearContenido(contenido[clave])}

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
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}

// ======================================================
// CONVERTIR NOMBRES
// ======================================================

function convertirNombre(texto) {

    if (!texto) {
        return "";
    }

    return texto
        .replace(/([A-Z])/g, " $1")
        .replace(/_/g, " ")
        .replace(/\b\w/g, letra =>
            letra.toUpperCase()
        )
        .trim();

}

// ======================================================
// NOMBRE CURSO
// ======================================================

function nombreCurso(curso) {

    const nombres = {

        cyt: "Ciencia y Tecnología",
        matematica: "Matemática",
        comunicacion: "Comunicación",
        sociales: "Ciencias Sociales",
        ingles: "Inglés",
        computacion: "Computación"

    };

    return nombres[curso] || curso;

}

// ======================================================
// NOMBRE GRADO
// ======================================================

function nombreGrado(grado) {

    const nombres = {

        "6": "6° de Primaria",
        "1": "1° de Secundaria",
        "2": "2° de Secundaria",
        "3": "3° de Secundaria",
        "4": "4° de Secundaria",
        "5": "5° de Secundaria"

    };

    return nombres[grado] || "grado desconocido";

}

// ======================================================
// MENSAJE USUARIO
// ======================================================

function mostrarUsuario(texto) {

    const chat = document.querySelector(".chat");

    if (!chat) {
        return;
    }

    const mensaje =
        document.createElement("p");

    mensaje.innerHTML =
        `<strong>Tú:</strong> ${escapeHTML(texto)}`;

    chat.appendChild(mensaje);

    chat.scrollTop =
        chat.scrollHeight;

}

// ======================================================
// MENSAJE BOT
// ======================================================

function responderBot(texto) {

    const chat =
        document.querySelector(".chat");

    if (!chat) {

        console.log("🤖 BOT:", texto);
        return;

    }

    const mensaje =
        document.createElement("p");

    mensaje.innerHTML = texto;

    chat.appendChild(mensaje);

    chat.scrollTop =
        chat.scrollHeight;

}

// ======================================================
// SEGURIDAD
// ======================================================

function escapeHTML(texto) {

    const div =
        document.createElement("div");

    div.textContent = texto;

    return div.innerHTML;

}
