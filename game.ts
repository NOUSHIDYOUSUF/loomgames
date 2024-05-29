document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const context = canvas.getContext('2d');

    let player = {
        x: 50,
        y: 50,
        width: 50,
        height: 50,
        color: 'red',
        velocityX: 0,
        velocityY: 0,
        speed: 5,
        jumpPower: -15,
        gravity: 1,
        grounded: false
    };

    let keys = {};

    document.addEventListener('keydown', (event) => {
        keys[event.key] = true;
    });

    document.addEventListener('keyup', (event) => {
        keys[event.key] = false;
    });

    function update() {
        if (keys['ArrowLeft']) {
            player.velocityX = -player.speed;
        } else if (keys['ArrowRight']) {
            player.velocityX = player.speed;
        } else {
            player.velocityX = 0;
        }

        if (keys['ArrowUp'] && player.grounded) {
            player.velocityY = player.jumpPower;
            player.grounded = false;
        }

        player.velocityY += player.gravity;

        player.x += player.velocityX;
        player.y += player.velocityY;

        if (player.y + player.height > canvas.height) {
            player.y = canvas.height - player.height;
            player.velocityY =
