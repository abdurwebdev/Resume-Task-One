let image = document.querySelector(".image")
let heart = document.querySelector(".image i");

image.addEventListener("dblclick",()=>{
     async function popUp (){
           await setTimeout(()=>{
               heart.style.opacity=1;
               heart.style.transform =' translate(-50%,-50%) scale(1) rotate(0deg)'; 
               },100)
     }
     popUp();
     async function moveUp (){
          await setTimeout(()=>{
               heart.style.transition='all ease 0.4s'
               heart.style.transform =' translate(-50%,-350%)';
               heart.style.opacity=0; 
               },550)
     } 
     moveUp();
     async function moveBack(){
          await setTimeout(()=>{
               heart.style.transform =' translate(-50%,-50%) scale(0) rotate(-90deg) ';
               },550+550)
     }
     moveBack()
})