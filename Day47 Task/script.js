async function getWeather(city){
    let blob = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    let data = await blob.json();
    let cityName = document.getElementById("city");
    cityName.innerText = data.name;
    let cityTemp = document.getElementById("temperature");
    cityTemp.innerText = data.main.temp+""+"°C";
    let cityCondition = document.getElementById("condition");
    cityCondition.innerText = data.weather[0].description;
    let inputCity = document.getElementById("cityInput");
    inputCity.value="";
}

let btn = document.getElementById("getWeather");
btn.addEventListener("click",()=>{
  let city = document.getElementById("cityInput").value;
  getWeather(city);
})

async function generateQuote(){
  let blob = await fetch(`https://dummyjson.com/quotes`);
  let data = await blob.json();
  let rndm = Math.floor(Math.random()*30);
  let quote = data.quotes[rndm].quote;
  showQuote(quote);
}
generateQuote();

function showQuote(quote){
    let newQuote = document.getElementById("newQuote");
    newQuote.addEventListener("click",()=>{
      let quoteText = document.getElementById("quoteText");
      generateQuote();
      quoteText.innerText = quote;
    })
}


function startTimer(){
         let startTimer = document.getElementById("startTimer");
         startTimer.addEventListener("click",()=>{
          let totalTime = 15*60;
          let int = setInterval(()=>{
            totalTime--;
            let seconds = totalTime%60;
            let minutes = Math.floor(totalTime/60);
            let min = document.getElementById("min");
            let sec = document.getElementById("sec");
            min.innerHTML = minutes;
          
              sec.innerHTML = 0+seconds;
          
          
              sec.innerHTML = String(seconds).padStart(2,"0");

            if(totalTime== 0){
              clearInterval(int);
            }
          },1000)
         })
}

startTimer();