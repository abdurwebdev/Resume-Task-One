// // # Day 60 — Exercises

// // ---

// // ## Exercise 1 — Very Easy (Warming up)

// // **Task (Hindi):** Ek function banao `afterDelay`

// // **Requirements:**
// // - Ye function do cheezein lega:
// //   1. `time` (milliseconds)
// //   2. `callback` function
// // - Given `time` ke baad `callback` call kare
// // - Callback ke andar `"Callback executed"` print hona chahiye

// function afterDelay(time,cb){
//      setTimeout(()=>{
//       cb("Callback Executed.")
//      },time)
// }

// afterDelay(2000,function(details){
//   console.log(details);
// })

// // **Use case:**
// // > “2 second baad ek kaam karna hai”

// // **Goal:**
// // - Samajhna ki callback delay ke baad kaise execute hota hai
// // - Ye `setTimeout` + callback connection hai

// // ---

// // ## Exercise 2 — Intermediate (Data flow)

// // **Task (Hindi):** Ek function banao `getUser`

// // **Requirements:**
// // - `getUser` `username` lega
// // - 1 second ke baad `callback` ko ek object de:
// //   - `id`
// //   - `username`

// function getUser(username,cb){
//   setTimeout(()=>{
//      cb({id:1,username});
//   },1000)
// }

// getUser("Abdur-Rehman",function(details){
//   console.log(details)
// })

// // **Then:**
// // - Callback ke andar ek aur function call karo `getUserPosts`

// // function getUserss(cb){
// //   console.log("Fetching user")
// //   cb(function(){
// //     console.log("User Posts.")
// //   })
// // }

// // getUserss(function(getUserPosts){
// //   getUserPosts();
// // })

// // **`getUserPosts` requirements:**
// // - `userId` lega
// // - 1 second ke baad `callback` ko `posts` ka array de

// // **Final output:**
// // - User ka `username` print ho
// // - Fir uske `posts` print ho

// function getUserss(name,cb){
//   console.log(`Your Username is ${name}`);
//   setTimeout(()=>{
//     cb(function(details){
//       console.log(details)
//     })
//   },1000)
// }

// getUserss("Ali",function(getUserPosts){
//   getUserPosts([{id:1,video:"one.mp3",title:"Your truly"},{id:2,video:"two.mp3",title:"Your truly Mate"}])
// })

// // **Goal:**
// // - Samajhna ki ek async ka result next async ko kaise milta hai
// // - Callback chaining practice

// // ---

// // ## Exercise 3 — Intermediate (Callback dependency — thoda painful)

// // **Task (Hindi):** Teen functions banao:

// // 1. `loginUser`
// //    - 1 second baad callback ko `user` object de
// // 2. `fetchPermissions`
// //    - `userId` lega
// //    - 1 second baad callback ko `permissions` array de
// // 3. `loadDashboard`
// //    - `permissions` lega
// //    - 1 second baad callback ko `"Dashboard loaded"` bole

// function loginUser(cb){
//   console.log("User Logged In.")
//   setTimeout(()=>{
//     let user = {
//       username:"Mahad Khan",
//       email:"mahadkhan@gmail.com",
//       password:"mscndshcuudvsducvsdy2t438tr6234823rwetyidfgwbce"
//     }
//     cb(user);
//   },1000)
// }
// function fetchPermissions(user,cb){
//   console.log(user);
//   setTimeout(()=>{
//     let userId = 1;
//     let permissions = [
//       {
//         permission:true,
//         access:"Fullstack Developer"
//       }
//     ]
//     cb(userId,permissions);
//   },1000)
// }

// function loadDashboard(userId,permissions,cb){
//   console.log(userId,permissions);
//   setTimeout(()=>{
//     cb("Dashboard Loaded.")
//   },1000)
// }

// loginUser(function(user){
//   fetchPermissions(user,function(userId,permissions){
//     loadDashboard(userId,permissions,function(data){
//       console.log(data)
//     })
//   })
// })


// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

// **Goal:**
// - Callback nesting ko feel karna
// - Yehi structure baad mein callback hell banta hai

// ---

// ### Notes
// - Practice in plain JavaScript using `setTimeout` and callbacks to understand the flow before converting to Promises/async–await.

function getMe(username,cb){
  setTimeout(()=>{
    cb({id:1,username:"Ahmad"});
  },1000)
}

function getMePosts(id,cb){
  setTimeout(()=>{
    cb([{id:1,username:"Ali Ahmad"}]);
  },1000)
}

getMe("Ahmad",function(data){
  getMePosts(data.id,function(allposts){
    console.log(data.username,allposts)
  })
})