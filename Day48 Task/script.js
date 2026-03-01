let isThemeChange = false;
function changeTheme() {
  if (!isThemeChange) {
    document.documentElement.style.setProperty("--prim", "#EC8F8D");
    document.documentElement.style.setProperty("--sec", "#44A194");
    document.documentElement.style.setProperty("--tex", "#F4F0E4");
    document.documentElement.style.setProperty("--btn", "#537D96");
    let lis = document.querySelectorAll("li");
    let daily = document.querySelector(".planner");
    daily.style.color = "#000";
    lis.forEach((elem) => {
      elem.style.color = "#000";
    });
    isThemeChange = true;
  } else {
    document.documentElement.style.setProperty("--prim", "#2b1205");
    document.documentElement.style.setProperty("--sec", "#4a2512");
    document.documentElement.style.setProperty("--tex", "#6b3a1e");
    document.documentElement.style.setProperty("--btn", "#f4a62a");
    let lis = document.querySelectorAll("li");
    let daily = document.querySelector(".planner");
    daily.style.color = "#000";
    lis.forEach((elem) => {
      elem.style.color = "#000";
    });
    isThemeChange = false;
  }
}

const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", changeTheme);

async function getWeatherData() {
  let date = new Date();
  let day = date.getDate();
  let year = date.getFullYear();
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let month = months[date.getMonth()];
  let heroLeft = document.querySelector(".hero-left>p");
  heroLeft.innerHTML = `${day} ${month}, ${year}`;

  let city = "Rawalpindi";
  let blob = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  let data = await blob.json();
  console.log(data);

  let heroRight = document.querySelector(".hero-right h1");
  heroRight.innerHTML = data.main.temp + "°C";
  let heroCond = document.querySelector(".hero-right p");
  heroCond.innerHTML = data.weather[0].description;
  let humid = document.getElementById("humid");
  humid.innerHTML = data.main.humidity + "%";
  let wind = document.getElementById("wind");
  wind.innerHTML = data.wind.speed + "km/h";

  let cityToShow = document.querySelector(".hero-left #cityMeri");
  cityToShow.innerHTML = data.name;

  let monthsToShow = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let time = document.querySelector("#time>span");
  time.innerHTML = monthsToShow[date.getMonth()];
}
getWeatherData();

function showTime() {
  let now = new Date();
  let hours = now.getHours();
  let period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // 12-hour format
  let minutes = now.getMinutes().toString().padStart(2, "0");

  let timei = document.querySelector("#time .timei");
  timei.innerHTML = `${hours}:${minutes} ${period}`;
}
setInterval(showTime, 1000);

let currentTask = JSON.parse(localStorage.getItem("tasks")) || [];
let idCounter = localStorage.getItem("lastIndexId");
console.log(idCounter)
console.log(idCounter = idCounter ? Number(idCounter) : 0);

function renderTasks() {
  let sum = "";
  currentTask.forEach((elem) => {
    sum += `<li>${elem.taskName} <button data-id="${elem.id}">Remove</button></li>`;
  });
  let list = document.querySelector(".list");
  list.innerHTML = sum;
}

function addTask() {
  let addTaskBtn = document.getElementById("addTask");
  addTaskBtn.addEventListener("click", () => {
    let taskInput = document.querySelector(".card input");
    if (!taskInput.value) return;

    let taskObj = {
      id: idCounter,
      taskName: taskInput.value
    };
    currentTask.push(taskObj);
    idCounter++;

    taskInput.value = "";
    localStorage.setItem("tasks", JSON.stringify(currentTask));
    localStorage.setItem("lastIndexId", idCounter);

    renderTasks();
  });
}
addTask();

function removeTask() {
  let lists = document.querySelector(".list");
  lists.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let taskId = Number(e.target.dataset.id);
      let index = currentTask.findIndex(task => task.id === taskId);
      if (index !== -1) {
        currentTask.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(currentTask));
        renderTasks();
      }
    }
  });
}
removeTask();

renderTasks();

let allPlans = JSON.parse(localStorage.getItem("plan")) || [] 

function dailyPlanner(){
     let planner = document.querySelector(".planner");
     planner.addEventListener("input",(e)=>{
      let id = Number(e.target.dataset.id);
      if(e.target.tagName === 'INPUT'){
        let planObj = {
          id:id,
          planName:e.target.value
        }
        allPlans.push(planObj);
        localStorage.setItem("plan",JSON.stringify(allPlans))
      }
     })
}

dailyPlanner();

function showPlans(){
  let allInputs = document.querySelectorAll(".planner input");
   allPlans.forEach((elem)=>{
    allInputs[elem.id].value = elem.planName;
   })
}

showPlans();

async function showMotivationalQuote(){
      let blob = await fetch(`https://dummyjson.com/quotes`);
      let data = await blob.json();
      let rndm = Math.floor(Math.random()*30);
      let quote = document.querySelector(".quote");
      // console.log(data.quotes[rndm].quote)
      quote.innerText=data.quotes[rndm].quote;
      // console.log(data);
}
showMotivationalQuote();
let totalTime = 25*60;
let int;
let startTimerss;
let isWork = true;
function startTimer(){
   startTimerss = document.getElementById("startTimer");
   startTimerss.disabled=true;
   startTimerss.style.opacity=0.5;
         int = setInterval(()=>{
         
              
         let seconds = totalTime%60;
         let minutes = Math.floor(totalTime/60);
         let secondTwo = String(seconds).padStart(2,"0");
         let minuteTwo = String(minutes).padStart(2,"0");
         let timer = document.querySelector(".timer");
         timer.innerHTML = `${minuteTwo}:${secondTwo}`;
         let h3 = document.querySelector("#timiee");
         h3.innerHTML = isWork ? 'Work Session':'Break Time'
         if(totalTime===0){
          clearInterval(int);
            if(isWork){
              h3.innerHTML = isWork ? 'Break Time':'Work Session'
              totalTime = 5*60;
              let seconds = totalTime%60;
         let minutes = Math.floor(totalTime/60);
         let secondTwo = String(seconds).padStart(2,"0");
         let minuteTwo = String(minutes).padStart(2,"0");
         let timer = document.querySelector(".timer");
         timer.innerHTML = `${minuteTwo}:${secondTwo}`;
              isWork = false;
            }
            else{
              h3.innerHTML = isWork ? 'Break Time':'Work Session'
              totalTime=25*60;
              let seconds = totalTime%60;
         let minutes = Math.floor(totalTime/60);
         let secondTwo = String(seconds).padStart(2,"0");
         let minuteTwo = String(minutes).padStart(2,"0");
         let timer = document.querySelector(".timer");
         timer.innerHTML = `${minuteTwo}:${secondTwo}`;
              isWork=true;
            }
            startTimerss.disabled=false;
   startTimerss.style.opacity=1;
         }
         totalTime--;
         },2)
}


let startTimers = document.getElementById("startTimer");
startTimers.addEventListener("click",startTimer)
let pauseTimer = document.getElementById("pauseTimer");
pauseTimer.addEventListener("click",()=>{
     clearInterval(int)
     startTimerss.disabled=false;
     startTimerss.style.opacity=1
})
let resetTimer = document.getElementById("resetTimer");
resetTimer.addEventListener("click",()=>{
  clearInterval(int);
  startTimerss.disabled = false;
  startTimerss.style.opacity=1;
  totalTime= 25*60;
  let timer = document.querySelector(".timer");
  let seconds = totalTime%60;
  let minutes = Math.floor(totalTime/60);
  let secondsStr = String(seconds).padStart(2,"0");
  let minutesStr = String(minutes).padStart(2,"0");
  timer.innerHTML=`${minutesStr}:${secondsStr}`
})