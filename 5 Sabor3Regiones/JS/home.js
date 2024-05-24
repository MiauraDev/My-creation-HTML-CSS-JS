function enviarReserva() {
    alert('Reserva enviada con éxito');
    return true; 
}

document.addEventListener("DOMContentLoaded", function () {
    var musica = document.getElementById("musica");
    var botonMusica = document.getElementById("botonMusica");
    var iconoMusica = document.getElementById("iconoMusica");

    botonMusica.addEventListener("click", function () {
        if (musica.paused) {
            musica.play();
            iconoMusica.classList.remove("uil-airplay");
            iconoMusica.classList.add("uil-pause");
        } else {
            musica.pause();
            iconoMusica.classList.remove("uil-pause");
            iconoMusica.classList.add("uil uil-play");
        }
    });
});

function cambiarImagen(src) {
    document.getElementById('imagenMesa').src = src;
}