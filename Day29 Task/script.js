let allElems = document.querySelectorAll('.elem');

allElems.forEach((elem)=>{
   let img = elem.querySelector('img');
   elem.addEventListener("mouseenter",()=>{
      img.style.opacity=1;
   })
   elem.addEventListener("mouseleave",()=>{
      img.style.opacity=0;
   })
   elem.addEventListener("mousemove",(dets)=>{
      img.style.top=dets.offsetY+'px';
      img.style.left=dets.offsetX+'px';
   })
})