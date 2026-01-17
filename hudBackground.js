const canvas = document.getElementById("hud-bg");
const ctx = canvas.getContext("2d");
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

window.addEventListener("resize",()=>{
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

const gridSize = 40;
const lines = [];

for(let x=0;x<w;x+=gridSize){
  lines.push({x, offset: Math.random()*gridSize});
}

function draw(){
  ctx.fillStyle="#0b0b0b";
  ctx.fillRect(0,0,w,h);

  ctx.strokeStyle = "rgba(0, 200, 255, 0.2)";
  ctx.lineWidth=1;

  // Вертикальные линии
  for(let line of lines){
    ctx.beginPath();
    ctx.moveTo(line.x,0);
    ctx.lineTo(line.x,h);
    ctx.stroke();
    line.offset += 0.5;
    if(line.offset>gridSize) line.offset=0;
  }

  // Горизонтальные линии
  for(let y=0;y<h;y+=gridSize){
    ctx.beginPath();
    ctx.moveTo(0,y);
    ctx.lineTo(w,y);
    ctx.stroke();
  }

  requestAnimationFrame(draw);
}

draw();
