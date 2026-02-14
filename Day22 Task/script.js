const teams = [
  {
    team:"Karachi Kings",
    primary:"royalblue",
    secondary:"blue"
  },
  {
    team:"Multan Sultan",
    primary:"purple",
    secondary:"black"
  },
  {
    team:"Islamabad United",
    primary:"orangered",
    secondary:"red"
  }
]

let btn = document.querySelector("button");
btn.addEventListener("click",()=>{
  let rndm = Math.floor(Math.random()*teams.length);
  let box = document.querySelector(".box");
  let obj = teams[rndm];
  box.style.backgroundColor = obj.secondary;
  let main = document.querySelector("main");
  main.style.backgroundColor = obj.primary;
  let h1 = document.querySelector("h1");
  h1.innerText = obj.team;
})