const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 1920;
canvas.height = 1080;

// Player
const player = {
  x: 50,
  y: 300,
  width: 30,
  height: 30,
  velocityY: 0,
  jumping: false
};

// Gravity
const gravity = 0.5;

// Ground
const ground = {
  y: 350
};

// Controls
const keys = {};
document.addEventListener("keydown", (e) => keys[e.code] = true);
document.addEventListener("keyup", (e) => keys[e.code] = false);

function update() {
  // Jump
  if (keys["Space"] && !player.jumping) {
    player.velocityY = -10;
    player.jumping = true;
  }

  // Apply gravity
  player.velocityY += gravity;
  player.y += player.velocityY;

  // Ground collision
  if (player.y + player.height >= ground.y) {
    player.y = ground.y - player.height;
    player.velocityY = 0;
    player.jumping = false;
  }
}

function draw() {
  // Clear
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Ground
  ctx.fillStyle = "green";
  ctx.fillRect(0, ground.y, canvas.width, canvas.height - ground.y);

  // Player
  ctx.fillStyle = "red";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
