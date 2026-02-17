const reelsData = [
  {
    video: "./reels/video.mp4",
    profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    username: "AbdurRehman",
    isFollowed: false,
    description: "Exploring the world of tech and creativity 🚀",
    likes: 300,
    isLiked: false,
    comments: 100,
    shares: 1000,
    isMuted:true,
  },
  {
    video: "./reels/video2.mp4",
    profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    username: "SarahDev",
    isFollowed: false,
    description: "Frontend developer & UI lover 💻✨",
    likes: 520,
    isLiked: true,
    comments: 210,
    shares: 430,
    isMuted:true,
  },
  {
    video: "./reels/video3.mp4",
    profilePic: "https://images.unsplash.com/photo-1619950463968-f2bfb9341d00?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "CodeMaster",
    isFollowed: true,
    description: "Building cool stuff with JavaScript 🔥",
    likes: 890,
    isLiked: false,
    comments: 340,
    shares: 670,
    isMuted:true,
  },
  {
    video: "./reels/video4.mp4",
    profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    username: "AyeshaCodes",
    isFollowed: false,
    description: "Turning ideas into interactive experiences ✨",
    likes: 640,
    isLiked: true,
    comments: 180,
    shares: 290,
    isMuted:true,
  }
];

function addReels(){
  let clutter = "";

reelsData.forEach((elem,idx)=>{
  clutter+=`
  <div class="container">
  <div class="mute">
  ${elem.isMuted ? `<i id=${idx} class="ri-volume-up-fill mutes"></i>`:`<i id=${idx} class="ri-volume-mute-fill mutes"></i>`}
  </div>
      <video src="${elem.video}" autoplay loop ${elem.isMuted?'':'muted'}></video>
      <div class="bottom">
        <div class="pf">
          <div class="pfp">
            <img src="${elem.profilePic}" alt="">
          </div>
          <h1>${elem.username}</h1>
          <button id=${idx} class="follow">${elem.isFollowed ? 'Unfollow' :'Follow'}</button>
        </div>
        <div class="caption">
          <p>${elem.description}</p>
        </div>
      </div>
      <div class="right-bar">
        <div  class="love">
          ${elem.isLiked ? `<i id="${idx}" class="ri-heart-3-fill loveme loving"></i>`:`<i id="${idx}" class="ri-heart-3-line loving"></i>`}
          <h6>${elem.likes}</h6>
        </div>
        <div class="love">
          <i class="ri-chat-3-line"></i>
          <h6>${elem.comments}</h6>
        </div>
        <div class="love">
          <i class="ri-share-forward-line"></i>
          <h6>${elem.shares}</h6>
        </div>
        <div class="love">
          <i class="ri-more-2-fill"></i>
        </div>
      </div>
    </div>
  `;
})

let allreels = document.querySelector(".allreels");
allreels.innerHTML=clutter;
}

addReels();

let reelWindow = document.querySelector(".allreels");

reelWindow.addEventListener("click",(dets)=>{
  if(dets.target.classList.contains('loving')){
if(!reelsData[dets.target.id].isLiked){
    reelsData[dets.target.id].isLiked = true;
    reelsData[dets.target.id].likes++;
    addReels();
  }
  else{
    reelsData[dets.target.id].isLiked = false;
    reelsData[dets.target.id].likes--;
    addReels();
  }
  }
  if(dets.target.classList.contains('follow')){
    if(!reelsData[dets.target.id].isFollowed){
      reelsData[dets.target.id].isFollowed = true;
      addReels();
    }
    else{
      reelsData[dets.target.id].isFollowed = false;
      addReels();
    }
  }
  
})