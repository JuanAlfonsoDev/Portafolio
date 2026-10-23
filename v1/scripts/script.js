

if (!sessionStorage.getItem("alertMostrado")) {
    Swal.fire({
    title: "Bienvenido a mi portafolio ",
    text: "Gracias por visitar mi portafolio.",
    icon: "info",
    confirmButtonText: "Continuar",
    confirmButtonColor: "#00E676",
    background: "#0D1117",
    color: "#E6EDF3"
    });
    sessionStorage.setItem("alertMostrado", "true");
}

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
