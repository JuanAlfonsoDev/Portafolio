document.addEventListener("DOMContentLoaded", function () {
    const tareasCompletadas = 4;
    const tareasTotales = 12;

    const barra = document.getElementById("barraAvance");
    const texto = document.getElementById("porcentaje");

    const avance = Math.round(
        (tareasCompletadas / tareasTotales) * 100
    );

    if (barra && texto) {
        barra.style.width = avance + "%";
        texto.textContent = avance + "%";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const tareasCompletadas = 20;
    const tareasTotales = 100;

    const barra = document.getElementById("barraAvance1");
    const texto = document.getElementById("porcentaje1");

    const avance = Math.round(
        (tareasCompletadas / tareasTotales) * 100
    );

    if (barra && texto) {
        barra.style.width = avance + "%";
        texto.textContent = avance + "%";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const tareasCompletadas = 40;
    const tareasTotales = 100;

    const barra = document.getElementById("barraAvance2");
    const texto = document.getElementById("porcentaje2");

    const avance = Math.round(
        (tareasCompletadas / tareasTotales) * 100
    );

    if (barra && texto) {
        barra.style.width = avance + "%";
        texto.textContent = avance + "%";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const tareasCompletadas = 4;
    const tareasTotales = 12;

    const barra = document.getElementById("barraAvance3");
    const texto = document.getElementById("porcentaje3");

    const avance = Math.round(
        (tareasCompletadas / tareasTotales) * 100
    );

    if (barra && texto) {
        barra.style.width = avance + "%";
        texto.textContent = avance + "%";
    }
});