document.addEventListener("DOMContentLoaded", function() {

    document.querySelector(".menu-icon").addEventListener("click", function(event) {
        var dropdown = document.querySelector(".menu-dropdown");
        dropdown.style.display = dropdown.style.display == "none" ? "flex": "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("cambio-trigger").addEventListener("click", function(event) {
        window.location.href = 0;
        // Redirecciona a la página "props.html" al hacer clic en el elemento con id "cambio-trigger"
        window.location.href = "https://josemasip.github.io/JoseMasip/";
    });
});

/*

<a href="sections/props.html">Props</a>

document.addEventListener("DOMContentLoaded", function() {
    // Rutas de los modelos GLB
    var modelos = [];
   
    // Agrega un event listener al enlace
    document.getElementById("cambio-trigger").addEventListener("click", function(event) {
        // Obtén el elemento model-viewer
        var modeloViewer = document.querySelector("model-viewer");

        // Cambia la URL del modelo GLB utilizando el contador
        modeloViewer.src = modelos[contadorModelo];

        // Incrementa el contador y vuelve al principio si supera el número de modelos
        contadorModelo = (contadorModelo + 1) % modelos.length;

        // Evita que el enlace haga su acción predeterminada (navegar a otra página)
        event.preventDefault();
    });
});*/