let taskBar = document.querySelector(".taskbar");
taskBar.addEventListener("click",()=>{
 let window = document.querySelector(".window");
  window.style.display = 'block'
})
let closeWindow = document.querySelector("#closeWindow");
closeWindow.addEventListener("click",()=>{
let hey = document.querySelector(".window");
  hey.style.display='none'
})
window.addEventListener("contextmenu",(e)=>{
  e.preventDefault();
  let contextMenu = document.querySelector("#contextMenu");
  contextMenu.style.display='block'
  let clickX = e.clientX;
  let clickY = e.clientY;
  contextMenu.style.top=clickY+'px';
  contextMenu.style.left=clickX+'px';
  window.addEventListener("click",()=>{
    if(contextMenu.style.display === 'block'){
      contextMenu.style.display = 'none'
    }
  })
})