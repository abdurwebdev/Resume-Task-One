let paraOne = document.querySelector("main>h1");
let matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
document.querySelector("main>h1").addEventListener("mouseenter",(dets)=>{
  console.log(matrix.split(""))
  setInterval(()=>{
    let str = matrix.split("").map((elem)=>{
      return matrix[Math.floor(Math.random()*53)]
    })
    paraOne.innerHTML=str.join("");
  },30)
})