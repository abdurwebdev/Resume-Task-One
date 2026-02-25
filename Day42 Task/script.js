// Video 3 projects
//os simulation
// debouncing and throttling

// # Day 63 — Project Scenarios

// API example (OpenWeatherMap):

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

// ---

// function debounce(fn,delay){
//          let timer;
//          return function(){
//           clearTimeout(timer);
//           timer= setTimeout(fn,delay);
//          }
// }

// document.querySelector("#inputSearch").addEventListener("input",debounce(function(){console.log("chala")},400));

// function throttle (fn,delay){
//       let last = 0;
//       return function(){
//             let now = Date.now();
//             if(now-last>=delay){
//                   last = now;
//                   fn();
//             }
//       }
// }

// window.addEventListener("mousemove",throttle(()=>{console.log("hello")},2000))

// ## Scenario 1 — Weather Dashboard with Error Handling

// Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).

// ### Requirements

// - Make the API request asynchronously using `fetch` with `async/await`.

class ExtremeTemperatureError extends Error{
      constructor(message){
            super(message);
            this.name = "ExtremeTemperatureError";
      }
}

let apiKey = `520c5c31b9049339f26eb0c5ee320fdb`;

document.querySelector("#searchBtn").addEventListener("click",()=>{
      let city = document.getElementById("cityInput").value;
      getWeatherData(city)
})

async function getWeatherData(city){
      try{
      let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      if(res.ok === false){
            throw new Error("City not found")
      }
      let data = await res.json();
      if(data.main.temp>45){
            throw new ExtremeTemperatureError("Too Hot!")
      }
      else if(data.main.temp<-10){
            throw new ExtremeTemperatureError("Too Cold!")
      }
      console.log(data);
      document.querySelector("#cityName").innerText = data.name;
      document.querySelector("#temperature").innerText = `${data.main.temp}°C`;
      document.querySelector("#condition").innerText=data.weather[0].description;
      console.log(`The temperature of ${city} is ${data.main.temp}`);
      console.log(`Weather Condition:- ${data.weather[0].description}`);
      console.log(`City:- ${data.name}`)
      document.querySelector("#error").innerText ="";
      }
      catch(err){
            if(err.name === "ExtremeTemperatureError"){
                  console.error(err.message);
                  document.querySelector("#error").innerText =err.message;
                  document.querySelector("#cityName").innerText = "";
      document.querySelector("#temperature").innerText = "";
      document.querySelector("#condition").innerText= ""; 
            }
            else{
                  console.error(err.message);
                  document.querySelector("#error").innerText =err.message;
                  document.querySelector("#cityName").innerText = "";
      document.querySelector("#temperature").innerText = "";
      document.querySelector("#condition").innerText= "";
            }
      }
}

// - Handle API request failures (for example, invalid city name) using `try/catch`.
// - Create and throw custom errors based on weather conditions (e.g., extremely high or low temperature) and handle them appropriately.

// ### Suggested tasks

// - Build a simple UI to input a city name and display the result.
// - Show user-friendly error messages for network errors, invalid input, or API errors.
// - Demonstrate at least one custom thrown error (e.g., `ExtremeTemperatureError`) and handle it in the UI.

// ---

// ## Scenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling

// Simulate sending bulk emails to 5 users. Treat each email-sending operation as a `Promise` (simulate delays with `setTimeout`).

// ### Requirements

// - Send all emails in parallel using `Promise.all`.
// - If any email fails (e.g., due to a simulated random failure), catch the error and clearly indicate which specific email failed.
// - Use a `finally` block to display a message indicating that the "Email process is complete." (regardless of success/failure).

// ### Suggested tasks

// - Create an array of 5 mock email tasks that resolve or reject based on a random condition.

const emails =[
      "user1@gmail.com",
      "user2@gmail.com",
      "user3@gmail.com",
      "user4@gmail.com",
      "user5@gmail.com",
]

function sendEmail(email){
         return new Promise((res,rej)=>{
            let num = Math.floor(Math.random()*10);
            if(num>5){
                  setTimeout(()=>{
                        res(`Email sent to ${email}`)
                  },2000)
            }
            else{
                  setTimeout(()=>{
                        rej(`Email not sent to ${email}`)
                  },2000)
            }
         })
}

document.querySelector("#emailsss").addEventListener("click",async ()=>{
      try {
            let allPrmoises = emails.map((email)=>{return sendEmail(email)})
let results = await Promise.allSettled(allPrmoises);
console.log(results)
      } catch (error) {
            console.error(error.message)
      }
      finally{
            console.log("Email process completed")
      }
})
// - Call `Promise.all` and handle success and failure cases. Show a breakdown of which emails succeeded and which failed.
// - Ensure the `finally` block runs to update the UI or console indicating completion.

// ---

// Optional: combine both scenarios into a small dashboard that fetches weather and then attempts to send a report-email, demonstrating error handling across both network and simulated async operations.

