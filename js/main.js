const canvas = document.getElementById('tetris');
const nextPiece = document.getElementById('nextPiece');

const tetris = new Tetris(canvas, nextPiece);

const audio = document.querySelector('audio');
const musicBtn = document.getElementById('music-btn');

musicBtn.addEventListener('click', () => {
    playToggle = musicBtn.getAttribute('data-audio');
    if (playToggle === 'true') {
        audio.play();
        musicBtn.removeAttribute('data-audio');
        musicBtn.innerText = 'OFF';
    } else {
        audio.pause();
        musicBtn.setAttribute('data-audio', 'true');
        musicBtn.innerText = 'ON';
    }
});

document.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
        case 32:
            tetris.player.fall(true);
            return;
        case 40:
            tetris.player.fall();
            return;
        case 37:
            tetris.player.slide(-1);
            return;
        case 88:
            tetris.player.spin(-1);
            return;
        case 38:
            tetris.player.spin(1);
            return;
        case 39:
            tetris.player.slide(1);
            return;
    }
});
