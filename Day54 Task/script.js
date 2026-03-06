let x,y;

addEventListener("mousemove",(dets)=>{
  x = dets.clientX;
  y = dets.clientY;
})

function move(){
  document.querySelector(".crsr").style.transform=`translate(${x}px,${y}px)`;

  requestAnimationFrame(move);
}
move();