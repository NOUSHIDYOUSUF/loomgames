// dino-game.js

const dinoGameCanvas = document.getElementById('dinoGameCanvas');
const dinoGameCtx = dinoGameCanvas.getContext('2d');

const dino = {
    x: 50,
    y: 120,
    width: 50,
    height: 50,
    draw() {
        dinoGameCtx.fillStyle = '#f00';
        dinoGameCtx.fillRect(this.x, this.y, this.width, this.height);
    }
};

function draw() {
    dinoGameCtx.clearRect(0, 0, dinoGameCanvas.width, dinoGameCanvas.height);
    dino.draw();
    requestAnimationFrame(draw);
}

draw();
