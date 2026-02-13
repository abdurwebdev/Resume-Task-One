function sayHello(){
    console.log("Hello Javascript!")
}
sayHello()

function add(a,b){
      return a+b;
}
console.log(add(2,2))

function hey(name="Guest"){
  console.log(`Hello ${name}`)
}
hey();
let sum = 0;
function restie(...a){
   a.forEach(function(val){
     sum+=val;
   })
}
restie(2,2,2)
console.log(sum)

(function(){
  console.log("I Run Instantly!")
})()

function nestie(){
  let a =10;
  function addie(){
     console.log(a);
  }
  addie();
}

nestie();

let arr = ["Banana","Apple","Pomegranate","Grapes"];
arr.push("Pineapple");
arr.unshift("Blueberry");
for(let i = 0;i<arr.length;i++){
  console.log(arr[i])
}

let person={
  name:"Abdur-Rehman",
  age:19,
  city:"Rawalpindi"
}
console.log(person['name'],person.age,person['city'])

setTimeout(()=>{
  console.log("Times up!")
},2000)