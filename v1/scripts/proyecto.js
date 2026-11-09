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



function obtenerPersonajes(done){
    const resultados = fetch("https://dragonball-api.com/api/characters")
    resultados
    .then(response => response.json())
    .then(data => {
        done(data)
    });
}

obtenerPersonajes(data => {
    data.items.forEach(personaje => {
        const imagen = document.createRange().createContextualFragment(/*html*/`
            
            
            
            <div class="tarjeta">
            <div class="image_container ">
                <img src="${personaje.image}" alt="">
            </div>
            <h2>${personaje.name}</h2>
            <p>${personaje.maxKi}</p>
            </div>
            
            `);
            const contenedor = document.querySelector(".div_maqueta")

            contenedor.append(imagen)
        
    })
});

function obtenerPersonajesRick(done){
    const resultados = fetch("https://rickandmortyapi.com/api/character")
    resultados
    .then(response => response.json())
    .then(data => {
        done(data)
    });
}

obtenerPersonajesRick(data => {
    data.results.forEach(personaje => {
        const imagen = document.createRange().createContextualFragment(/*html*/`
            
            <div class="tarjeta">
            <div class="image_container ">
                <img src="${personaje.image}" alt="">
            </div>
            <h2>${personaje.name}</h2>
            <p>${personaje.species}</p>
            </div>
            
            `);
            const contenedor = document.querySelector(".div_maqueta_rick")

            contenedor.append(imagen)
        
    })
});



