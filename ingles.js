const ingles = {

    nombre: "Inglés",

    niveles: {

        basico: {
            nombre: "Inglés Básico",
            contenido: inglesBasico1
        },

        intermedio: {
            nombre: "Inglés Intermedio",
            contenido: inglesIntermedio1
        },

        avanzado: {
            nombre: "Inglés Avanzado",
            contenido: inglesAvanzado1
        }

    },

    mostrarNiveles: function() {

        return `
📚 INGLÉS

1. 🟢 Básico
2. 🟡 Intermedio
3. 🔴 Avanzado

Escribe el nivel que deseas estudiar.
        `;

    }

};