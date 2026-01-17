const canvas = document.createElement("canvas");
canvas.id = "hud-canvas";
document.body.prepend(canvas);

const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const grid = {
  size: 60,
  speed: 0.3,
  offset: 0
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(0,180,255,0.15)";
  ctx.lineWidth = 1;

  grid.offset += grid.speed;

  for (let x = -grid.size; x < canvas.width + grid.size; x += grid.size) {
    ctx.beginPath();
    ctx.moveTo(x + grid.offset, 0);
    ctx.lineTo(x + grid.offset, canvas.height);
    ctx.stroke();
  }

  for (let y = -grid.size; y < canvas.height + grid.size; y += grid.size) {
    ctx.beginPath();
    ctx.moveTo(0, y + grid.offset);
    ctx.lineTo(canvas.width, y + grid.offset);
    ctx.stroke();
  }

  requestAnimationFrame(draw);
}

draw();
