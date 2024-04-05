document.querySelector(".menu-icon").addEventListener("click", function(event) {
    var dropdown = document.querySelector(".menu-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});
document.getElementById('toggle').addEventListener('click', function(event) {
    event.stopPropagation(); // Evita la propagación del evento a otros elementos

    var contenedorTexto = document.getElementById('contenedorTexto');
    if (contenedorTexto) {
        if (contenedorTexto.style.display === 'none' || contenedorTexto.style.display === '') {
            contenedorTexto.style.display = 'flex'; // Hacer visible el div contenedor de texto
            
        } else {
            contenedorTexto.style.display = 'none'; // Ocultar el div contenedor de texto
        }
    }
});

document.getElementById('toggle').addEventListener('click', function(event) {
    event.stopPropagation(); // Evita la propagación del evento a otros elementos

    var contenedorTexto = document.getElementById('contenedorTexto');
    var modelo = document.getElementById('Modelo');
    
    if (modelo) {
        if (modelo.style.width === '80%') {
            modelo.style.width = '100%'; // Centrar el modelo
            modelo.style.margin = 'auto'; // Centrar horizontalmente el modelo
        } else {
            modelo.style.width = '80%'; // Descentrar el modelo
            modelo.style.margin = 'initial'; // Reiniciar el margen
        }
    }

    if (contenedorTexto) {
        if (contenedorTexto.classList.contains('hidden')) {
            contenedorTexto.classList.remove('hidden'); // Mostrar el div contenedor de texto
        } else {
            contenedorTexto.classList.add('hidden'); // Ocultar el div contenedor de texto
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var cambioTrigger = document.getElementById('cambio-trigger');
    var modeloViewer = document.getElementById('Modelo');

    cambioTrigger.addEventListener('click', function() {
        // Obtener el modelo-viewer actual
        var currentModel = modeloViewer.querySelector('model-viewer');
        // Verificar qué modelo se está mostrando actualmente
        if (currentModel.getAttribute('src') === 'media/glb/scenaVoxel.glb') {
            // Si se está mostrando sceneVoxel.glb, cambiar a contenedor.glb
            currentModel.setAttribute('src', 'media/glb/contenedor.glb');
        } else {
            // Si se está mostrando contenedor.glb o cualquier otro modelo, cambiar a sceneVoxel.glb
            currentModel.setAttribute('src', 'media/glb/scenaVoxel.glb');
        }
    });
});

