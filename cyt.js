const cyt = {

    "6": {
        nombre: "6° de Primaria",

        temas: {
            biologia: typeof seresVivosAmbiente !== "undefined"
                ? seresVivosAmbiente
                : [],

            cuerpoHumano: typeof cuerpoHumanoSalud !== "undefined"
                ? cuerpoHumanoSalud
                : [],

            materiaEnergia: typeof materiaEnergia !== "undefined"
                ? materiaEnergia
                : [],

            tierraUniverso: typeof tierraUniverso !== "undefined"
                ? tierraUniverso
                : []
        }
    },

    "1": {
        nombre: "1° de Secundaria",

        temas: {
            biologia: typeof biologia !== "undefined"
                ? biologia
                : [],

            quimica: typeof quimica !== "undefined"
                ? quimica
                : [],

            fisica: typeof fisica !== "undefined"
                ? fisica
                : []
        }
    },

    "2": {
        nombre: "2° de Secundaria",

        temas: {
            biologia: typeof biologia2 !== "undefined"
                ? biologia2
                : [],

            quimica: typeof quimica2 !== "undefined"
                ? quimica2
                : [],

            fisica: typeof fisica2 !== "undefined"
                ? fisica2
                : []
        }
    },

    "3": {
        nombre: "3° de Secundaria",

        temas: {
            biologia: typeof biologia3 !== "undefined"
                ? biologia3
                : [],

            quimica: typeof quimica3 !== "undefined"
                ? quimica3
                : [],

            fisica: typeof fisica3 !== "undefined"
                ? fisica3
                : []
        }
    },

    "4": {
        nombre: "4° de Secundaria",

        temas: {
            biologia: typeof biologia4 !== "undefined"
                ? biologia4
                : [],

            quimica: typeof quimica4 !== "undefined"
                ? quimica4
                : [],

            fisica: typeof fisica4 !== "undefined"
                ? fisica4
                : [],

            ambiente: typeof ambiente4 !== "undefined"
                ? ambiente4
                : []
        }
    },

    "5": {
        nombre: "5° de Secundaria",

        temas: {
            biologia: typeof biologia5 !== "undefined"
                ? biologia5
                : [],

            quimica: typeof quimica5 !== "undefined"
                ? quimica5
                : [],

            fisica: typeof fisica5 !== "undefined"
                ? fisica5
                : [],

            cts: typeof cts5 !== "undefined"
                ? cts5
                : []
        }
    }

};

console.log("✅ cyt.js cargado correctamente");
console.log("📚 Cursos de Ciencia y Tecnología:", cyt);