// ===== ELEMENTS =====
const player = document.getElementById("player");
const walls = document.querySelectorAll(".wall");

// ===== POSITION =====
let x = 100;
let y = 100;

const speed = 4;

// ===== INPUT (ROBUST SYSTEM) =====
const activeKeys = new Set();

// ===== DASH SYSTEM =====
let isDashing = false;
let dashTime = 0;
const dashDuration = 150;

const dashSpeed = 12;

const dashCooldown = 500;
let lastDashTime = 0;

let dashDirX = 0;
let dashDirY = 0;

// ===== INPUT EVENTS =====
document.addEventListener("keydown", (e) => {
  activeKeys.add(e.key);

  if (e.key === "Shift") {
    const now = Date.now();

    if (now - lastDashTime > dashCooldown) {

      // capture direction at dash start
      dashDirX = 0;
      dashDirY = 0;

      if (activeKeys.has("a")) dashDirX -= 1;
      if (activeKeys.has("d")) dashDirX += 1;
      if (activeKeys.has("w")) dashDirY -= 1;
      if (activeKeys.has("s")) dashDirY += 1;

      // don't dash without direction
      if (dashDirX === 0 && dashDirY === 0) return;

      isDashing = true;
      dashTime = now;
      lastDashTime = now;
    }
  }
});

document.addEventListener("keyup", (e) => {
  activeKeys.delete(e.key);

  if (e.key === "Shift") {
    isDashing = false;
  }
});

// clear keys if window loses focus
window.addEventListener("blur", () => {
  activeKeys.clear();
});

// ===== COLLISION =====
function isColliding(a, b) {
  const r1 = a.getBoundingClientRect();
  const r2 = b.getBoundingClientRect();

  return !(
    r1.top >= r2.bottom ||
    r1.bottom <= r2.top ||
    r1.left >= r2.right ||
    r1.right <= r2.left
  );
}

// ===== MAIN LOOP =====
function update() {

  // end dash after time
  if (isDashing && Date.now() - dashTime > dashDuration) {
    isDashing = false;
  }

  // ===== INPUT AXIS =====
  let inputX = 0;
  let inputY = 0;

  if (activeKeys.has("a")) inputX -= 1;
  if (activeKeys.has("d")) inputX += 1;
  if (activeKeys.has("w")) inputY -= 1;
  if (activeKeys.has("s")) inputY += 1;

  // ===== NORMALIZE DASH =====
  let dashX = dashDirX;
  let dashY = dashDirY;

  if (isDashing) {
    const len = Math.hypot(dashX, dashY);
    if (len !== 0) {
      dashX /= len;
      dashY /= len;
    }
  }

  // ===== MOVE X =====
  let newX = x;

  if (isDashing) {
    newX += dashX * dashSpeed;
  } else {
    newX += inputX * speed;
  }

  player.style.left = newX + "px";

  walls.forEach(wall => {
    if (isColliding(player, wall)) {
      const p = player.getBoundingClientRect();
      const w = wall.getBoundingClientRect();

      if (newX > x) {
        newX = w.left - p.width;
      } else if (newX < x) {
        newX = w.right;
      }
    }
  });

  x = newX;
  player.style.left = x + "px";

  // ===== MOVE Y =====
  let newY = y;

  if (isDashing) {
    newY += dashY * dashSpeed;
  } else {
    newY += inputY * speed;
  }

  player.style.top = newY + "px";

  walls.forEach(wall => {
    if (isColliding(player, wall)) {
      const p = player.getBoundingClientRect();
      const w = wall.getBoundingClientRect();

      if (newY > y) {
        newY = w.top - p.height;
      } else if (newY < y) {
        newY = w.bottom;
      }
    }
  });

  y = newY;
  player.style.top = y + "px";

  // ===== VISUAL =====
  player.style.background = isDashing ? "cyan" : "lime";

  requestAnimationFrame(update);
}

// start loop
update();
