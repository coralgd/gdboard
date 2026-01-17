const canvas = document.createElement('canvas');
canvas.id = 'hudCanvas';
document.body.prepend(canvas);
const ctx = canvas.getContext('2d');


function resizeCanvas(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();


let lines = [];
for(let i=0;i<50;i++){
lines.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, dx:(Math.random()-0.5)*0.5, dy:(Math.random()-0.5)*0.5, length:50+Math.random()*100});
}


function draw(){
ctx.fillStyle='rgba(11,12,16,0.8)';
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.strokeStyle='rgba(0,255,255,0.3)';
ctx.lineWidth=1;
lines.forEach(l=>{
ctx.beginPath();
ctx.moveTo(l.x,l.y);
ctx.lineTo(l.x+l.length,l.y);
ctx.stroke();
l.x += l.dx;
l.y += l.dy;
if(l.x>canvas.width) l.x=0;
if(l.x<0) l.x=canvas.width;
if(l.y>canvas.height) l.y=0;
if(l.y<0) l.y=canvas.height;
});
requestAnimationFrame(draw);
}
draw();
