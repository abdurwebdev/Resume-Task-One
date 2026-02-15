let grow = 0;
let h1 = document.querySelector(".bottom h1");
let btn = document.querySelector("button");
let directH1 = document.querySelector(".card>h1");
let inner = document.querySelector(".inner");
let outer = document.querySelector(".outer");


btn.addEventListener("click",()=>{
  let rndm = 50 + Math.floor(Math.random()*100);
  
  let int = setInterval(()=>{
    grow++;
    if(grow===101){ 
      clearInterval(int);
      directH1.innerHTML = "Your file has been dowloaded successfully";
      btn.innerHTML = "Downloaded"
      btn.style.opacity =1;
      btn.style.backgroundColor = "green"
      outer.syle.display = "none";
      inner.style.display= "none";
    }
    h1.innerHTML=grow+'%';
    directH1.innerHTML = `Your file will be downloaded in <span>${rndm/10}s</span>.Wait for it.`
    inner.style.width=`${grow}%`;
    btn.innerHTML = "Dowloading"
    btn.style.opacity=0.5
    btn.style.pointerEvents = 'none';
  },rndm)
})