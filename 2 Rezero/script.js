document.addEventListener("DOMContentLoaded", function () {
    changeTheme('rem');
});


function changeTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateFigurePrice(theme);
}

function redirectToFigure() {
    let  currentTheme = document.documentElement.getAttribute('data-theme');

// Operador ternario
let  newPageURL = currentTheme === 'rem' ? 'https://www.ebay.com/itm/303945265077?mkcid=16&mkevt=1&mkrid=711-127632-2357-0&ssspo=9zE8O7aOR4W&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY' : 'https://www.ebay.com/itm/304542948046?mkcid=16&mkevt=1&mkrid=711-127632-2357-0&ssspo=9zE8O7aOR4W&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY';

    window.open(newPageURL, '_blank');
}

function redirectToImage() {
    let  currentTheme = document.documentElement.getAttribute('data-theme');

    let  newPageURL = currentTheme === 'rem' ? 'https://drive.google.com/file/d/1Qn1JTj4vnQYvM5I7KEidiOmc4xBGt9az/view?usp=sharing' : 'https://drive.google.com/file/d/1OlA29AWfOOwXf-Axpm3f2onZrjcZlXc8/view?usp=sharing';

    window.open(newPageURL, '_blank');
}


function updateFigurePrice(theme) {
    let figurePrice = theme === 'rem' ? '$178.83' : '$159.31';
    document.getElementById('figurePrice').innerText = figurePrice;
}



function playAudio(audioId) {
    let  audio = document.getElementById(audioId);

    audio.play();
}

function stopAudio(audioId) {
    let  audio = document.getElementById(audioId);

    audio.pause();
    // Reiniciar el audio 
    audio.currentTime = 0;
}