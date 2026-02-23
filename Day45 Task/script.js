// Array of song objects
const songs = [
  {
    name: "Jale 2",
    duration: "3:56",
    image: "./four.jfif",
    audio: "./eight.mp3"
  },
  {
    name: "Pehle Bhi main",
    duration: "3:56",
    image: "three.jpeg",
    audio: "./five.mp3"
  },
  {
    name: "Ram Siya Ram",
    duration: "3:56",
    image: "three.avif",
    audio: "./Four.mp3"
  },
  {
    name: "Arjan Valley",
    duration: "3:56",
    image: "./one.jpg",
    audio: "./eight.mp3"
  }
];

let cover = document.querySelector("#cover");
cover.src='./four.jfif';
let audio = new Audio("");
let isPlaying = false;
// Select container
let songList = document.querySelector("#song-list");

let clutter = "";

// Render songs
songs.forEach((elem, idx) => {
  clutter += `
    <div class="song" data-index="${idx}">
      <div class="song-left">
        <img src="${elem.image}" alt="${elem.name}">
        <span>${elem.name}</span>
      </div>
    </div>
  `;
});

// Add to HTML once (important)
songList.innerHTML = clutter;

let currentSongIndex = 0;

const songToPlay = document.querySelector(".song-list");
songToPlay.addEventListener("click",(dets)=>{
  let song = dets.target.closest(".song");
  currentSongIndex = Number(song.dataset.index);
  audio.pause();
  audio.currentTime = 0;
  cover.src = songs[currentSongIndex].image;
  audio.src = songs[currentSongIndex].audio;
  isPlaying = false;
})

let play = document.querySelector("#play");
play.addEventListener("click",(dets)=>{
  if(!isPlaying){
    audio.play();
    isPlaying = true;
  }
  else{
    audio.pause();
    isPlaying = false;
  }
})