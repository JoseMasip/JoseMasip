document.addEventListener("DOMContentLoaded", function() {

    document.querySelector(".menu-icon").addEventListener("click", function(event) {
        var dropdown = document.querySelector(".menu-dropdown");
        dropdown.style.display = dropdown.style.display == "none" ? "flex": "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("cambio-trigger").addEventListener("click", function(event) {
       
        // Redirecciona a la pÃ¡gina "props.html" al hacer clic en el elemento con id "cambio-trigger"
        window.location.href = "/index.html";
    });
});

/*

<a href="sections/props.html">Props</a>

document.addEventListener("DOMContentLoaded", function() {
    // Rutas de los modelos GLB
    var modelos = [];
   
    // Agrega un event listener al enlace
    document.getElementById("cambio-trigger").addEventListener("click", function(event) {
        // ObtÃ©n el elemento model-viewer
        var modeloViewer = document.querySelector("model-viewer");

        // Cambia la URL del modelo GLB utilizando el contador
        modeloViewer.src = modelos[contadorModelo];

        // Incrementa el contador y vuelve al principio si supera el nÃºmero de modelos
        contadorModelo = (contadorModelo + 1) % modelos.length;

        // Evita que el enlace haga su acciÃ³n predeterminada (navegar a otra pÃ¡gina)
        event.preventDefault();
    });
});*/