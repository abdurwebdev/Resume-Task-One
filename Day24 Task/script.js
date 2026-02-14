const quotes = ["If you are good you can do it","Everything is fear in love an war","Sheryians is one of its kind","Everything is possible","Abdur-Rehman is love"]

let btn = document.querySelector("button");
btn.addEventListener("click",()=>{
  let rndm = Math.floor(Math.random()*quotes.length);
  let h1 = document.createElement("h1");
  h1.innerText = quotes[rndm];
  let main = document.querySelector("main");
  main.appendChild(h1)
  h1.style.position='absolute';
  let x = Math.floor(Math.random()*80);
  let y = Math.floor(Math.random()*80);
  h1.style.top=y+'%';
  h1.style.left=x+'%';
  let rotateT = Math.floor(Math.random()*361);
  h1.style.rotate= rotateT+'deg';
  let scaless = Math.floor(Math.random()*3);
  h1.style.scale=scaless
})