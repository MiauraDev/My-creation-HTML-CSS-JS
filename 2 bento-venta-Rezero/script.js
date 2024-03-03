document.addEventListener("DOMContentLoaded", function () {
    cambiarTema('rem'); 
});

function cambiarTema(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}
