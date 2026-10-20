

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