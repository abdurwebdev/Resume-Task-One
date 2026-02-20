let paraOne = document.querySelector("main>h1");
let h1 = paraOne.innerText;
let matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let iteration = 0;
document.querySelector("main>h1").addEventListener("mouseenter",(dets)=>{
  console.log(matrix.split(""))
  setInterval(()=>{
    let str = h1.split("").map((elem,index)=>{
      if(iteration>index){
        return elem;
      }
      return matrix[Math.floor(Math.random()*53)]
    })
    paraOne.innerHTML=str.join("");
    iteration+=0.6
  },30)
})