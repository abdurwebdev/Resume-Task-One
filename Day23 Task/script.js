let btn = document.querySelector("button")
btn.addEventListener("click",()=>{
  let elem = document.createElement('div');
  let elemWidth = Math.floor(Math.random()*201);
  let elemHeight = Math.floor(Math.random()*201);
  let c1 = Math.floor(Math.random()*256);
  let c2 = Math.floor(Math.random()*256);
  let c3 = Math.floor(Math.random()*256);
  let rotateT = Math.floor(Math.random()*361);
  let x = Math.floor(Math.random()*90);
  let y = Math.floor(Math.random()*90);
  elem.style.width=elemWidth+'px';
  elem.style.position='absolute';
  elem.style.height=elemHeight+'px';
  elem.style.rotate=rotateT+'deg';
  elem.style.top=y+'%';
  elem.style.left=x+'%'
  elem.style.backgroundColor=`rgb(${c1},${c2},${c3})`
  let main = document.querySelector("main");
  main.appendChild(elem)
})