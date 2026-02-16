document.body.addEventListener("mousemove",(dets)=>{
  let crsr = document.querySelector(".cursor");
  crsr.style.top=dets.y+'px';
  crsr.style.left=dets.x+'px';
})