let image = document.querySelector(".image")
let heart = document.querySelector(".image i");
let t1,t2,t3;
image.addEventListener("dblclick",()=>{
    heart.style.opacity = 1;
    heart.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)';
    setTimeout(()=>{
     heart.style.transform = 'translate(-50%,-300%) rotate(-60deg)'
    },500)
    setTimeout(()=>{
     heart.style.opacity = 0
    },701)
    setTimeout(()=>{
     heart.style.transform='translate(-50%,-50%) scale(0) rotate(-90deg)'
    },702)
})