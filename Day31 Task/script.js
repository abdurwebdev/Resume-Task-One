let allStories = document.querySelectorAll(".story");
let fullScreen = document.querySelector(".fullscreen");

allStories.forEach((elem)=>{
      elem.addEventListener("click",(dets)=>{
        fullScreen.style.backgroundImage = `url(${dets.target.currentSrc})`;
        fullScreen.style.display='block';
        setTimeout(()=>{
          fullScreen.style.display='none'
        },1000)        
      })
})