
let boton = document.getElementById('boton');

let ocultarTexto = document.getElementById ('ocultarTexto');

boton.addEventListener('click', toggleText);

function toggleText() {
    ocultarTexto.classList.toggle('show');

    if(ocultarTexto.classList.contains('show')) {
        boton.innerHTML = 'Menos info';
    } else {
        boton.innerHTML = 'Más info';
    }
}