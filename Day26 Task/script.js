let image = document.querySelector(".image")
let heart = document.querySelector(".image i");
let t1,t2,t3;
image.addEventListener("dblclick",()=>{
     clearTimeout(t1)
     clearTimeout(t2)
     clearTimeout(t3)


     heart.style.opacity = 0;
     heart.style.transition = "none";
     heart.style.transform = "translate(-50%,-50%) scale(0) rotate(-90deg)";
     heart.style.transition='all ease .2s'
     heart.offsetHeight
     
     
     t1 = setTimeout(()=>{
     heart.style.opacity=1;
     heart.style.transform =' translate(-50%,-50%) scale(1) rotate(0deg)'; 
     },100)
     
     
     t2 = setTimeout(()=>{
     heart.style.transition='all ease 0.4s'
     heart.style.transform =' translate(-50%,-350%)';
     heart.style.opacity=0; 
     },550)
     
     
     t3 = setTimeout(()=>{
     heart.style.transform =' translate(-50%,-50%) scale(0) rotate(-90deg) ';
     },550+550)
})