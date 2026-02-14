let inc = document.querySelector(".inc")
let dec = document.querySelector(".dec")
let reset = document.querySelector(".reset")
let h1 = document.querySelector("h1")

inc.addEventListener("click",()=>{
  let count = h1.textContent;
  count++;
  h1.textContent = count;
})

dec.addEventListener("click",()=>{
  let count = h1.textContent;
  count--;
  h1.textContent=count;
})

reset.addEventListener("click",()=>{
  let count = h1.textContent;
  count=0;
  h1.textContent=count;
})