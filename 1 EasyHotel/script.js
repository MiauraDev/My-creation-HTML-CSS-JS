    function togglePlayPause(playerNumber) {
        var audioPlayer = document.getElementById(`audioPlayer${playerNumber}`);
        var playPauseIcon = document.getElementById(`playPauseIcon${playerNumber}`);

        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseIcon.className = "uil uil-pause"; 
        } else {
            audioPlayer.pause();
            playPauseIcon.className = "uil uil-play"; 
        }
    }
    function playAudio() {
        var audio = document.getElementById('audio');
        var imagenCelular = document.getElementById('imagen-celular');
    
        // Quitar la clase de animación (si ya está presente)
        imagenCelular.classList.remove('animacion-imagen');
    
        // Agregar la clase de animación al hacer clic
        void imagenCelular.offsetWidth; // Truco para reiniciar la animación
        imagenCelular.classList.add('animacion-imagen');
    
        // Reproducir el audio
        audio.play();
    }
    

    