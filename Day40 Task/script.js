// let user1 = {
//   name:"Ali Ahmad",
//   email:"aliahmad@gmail.com",
//   login:()=>{
//     console.log("User Logged In")
//   }
// }
// let user2 = {
//   name:"Ibrahim",
//   email:"ibrahim@gmail.com",
//   login:()=>{
//     console.log("User Logged In")
//   }
// }
// let user3 = {
//   name:"Farhan Yousaf",
//   email:"farhanahmad@gmail.com",
//   login:()=>{
//     console.log("User Logged In")
//   }
// }
// let user4 = {
//   name:"Mahad Ahmad",
//   email:"mahadahmad@gmail.com",
//   login:()=>{
//     console.log("User Logged In")
//   }
// }
// let user5 = {
//   name:"Sara Ali",
//   email:"saraali@gmail.com",
//   login:()=>{
//     console.log("User Logged In")
//   }
// }

// class User{
//   constructor(name,email){
//     this.name=name;
//     this.email=email;
//   }
// }

// User.prototype.login=()=>{console.log("User Logged In")};

// let u1 = new User("Ali","ali@gmail.com");
// let u2 = new User("Akbar Ali","akbarali@gmail.com");
// let u3 = new User("Ahmad Ali","ahmadali@gmail.com");
// let u4 = new User("Mahad Ahmad","mahadahmad@gmail.com");
// let u5 = new User("Ibrahim","ibrahim@gmail.com");

// let product = {
//   name:"Head And Shoulders",
//   price:200,
//   finalPrice:function(){
//     return this.price - Math.floor(Math.random()*50)
//   }
// }

// class Car{
//   constructor(brand,speed){
//     this.brand=brand;
//     this.speed = speed;
//   }
//   info(){
//     console.log(`The car brand is ${this.brand} and the speed of car is ${this.speed}`)
//   }
// }

// //If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

// // if the classes did not exist we would have to make a large number of objects,and if the code is forexample 1000000 lineds then if a problem occurs manufavturing car we would have to read the whole code base which is time taking and a headache.

// class Student{
//   constructor(name,rollnumber){
//     name=name;
//     rollnumber=rollnumber;
//   }
//   print(){
//     console.log(`Your Name is ${this.name} and your rollnumber is ${this.rollnumber}`)
//   }
// }


// let rem = {
//   fnc1:function(){
//     console.log(this);
//   },
//   fnc2:()=>{
//     console.log(this)
//   }
// }
// rem.fnc1();
// rem.fnc2();

// function Usera(){
//   this.name = "Abdur-Rehman";
//   this.age = 26;
// }

// let u6 = new Usera;
// let u7 = new Usera;
// console.log(u6.login === u7.login)
// Usera.prototype.login = function(){
//   console.log("Logged In")
// };

// //Explain why the result is true or false.
// // the result is true because they share the same memory using prototype diffrent objects share the same function using prototype


// function meraBhai(name){
//   console.log(this.name);
// }

// let obj = {
//   name:"Abdur-Rehman"
// }

// let bindedFnc = meraBhai.bind(obj);


// let obj1 ={
//   name:"Abdur-Rehman",
//   hey:()=>{
//     console.log(this.name," Logged In");
//   }
// }
// let obj2={
//   name:"Ali",
//   age:22
// }

// obj1.hey.call(obj2);

// Question Sheet 2

let laptop={
  brand:"Lenevo",
  price:2900,
  start:function(){console.log("Lap top Started")},
  increase:function(){return this.price+(this.price*10)/100}
}

//Write down (in words or code) what problems you will face if you keep using plain objects.
// if we have a large code base than it would be very difficult to make every object consuming memory and the code is not scalable,maintainable and modular

class Employee{
  constructor(){
    this.name = "Abdul";
    this.salary=90000
  }
  print(){
    console.log(`${this.name} ${this.salary}`)
  }
}

// let e1 = new Employee();
// let e2 = new Employee();
// let e3 = new Employee();

//6.	Explain in your own words:
//Why is class considered a better option than writing similar objects again and again?

//class is like a blueprint for creating objects that make code easy to fix,scalable,modular and maitainable also it requiresto write less lines of code than writing objects again and again alsoo its very easy and contains less lines of code

//7.	Create a class named BankAccount.
//Its constructor should accept accountHolderName and balance.

class BankAccount{
  constructor(accountHolderName,balance){
    this.accountHolderName=accountHolderName;
    this.balance=balance;
  }

  deposit(depositAmount){
    return ` Your Total Balance is ${BigInt(this.balance+=depositAmount)}Rs and ${depositAmount}Rs Amount has been deposited to Your Bank Account`;
  }
}

// let b1 = new BankAccount("Abdur-Rehman",1000000000000000);
// let b2 = new BankAccount("Akbar",90000);

//10.	Create two bank accounts and deposit money into only one.
//Observe and explain why the second account is not affected.

// each instance of class has its own memory in the ram when we do changes on one object it just do changes to that specific object and does not affect the other objects thats why when we deposit the money in one bank it do changes in that particular object and the second bavk account remains the same

//ION 4: Understanding this (Very Important)
// 	11.	Create an object named profile with a property username and a method printName that logs this.username.

let profile ={
  username:"abdurwalkitalkie",
  print:function (){
    console.log(this.username)
  }
}
// 	12.	Call the method normally and observe the output.

// profile.print();
// 	13.	Store the method in a separate variable and call it.
// let p1 = profile.print();

// Observe what happens to this and explain why.
// 	14.	Modify the code so that this works correctly again.

// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.

function Vehicle(type,wheels){
  this.type=type;
  this.wheels=wheels;
  // this.describe = function (){
  //     console.log(this.type,this.wheels);
  // }
}

let v1 = new Vehicle("Petrol",2);
let v2 = new Vehicle("Electric",4);

Vehicle.prototype.describe = function (){
  // console.log(this.type,this.wheels);
}

// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.
// 	18.	Explain why the prototype approach is preferred.
// The prototype approach is prefeered because it takes less memory forexample if we have 1000 objects then each one of the object will have there own method that takes a heck lot of memory on the other hand the protoyupe is shared memory 1000 objects will have to share the method

// SECTION 6: call Method Practice
// 	19.	Create a function showBrand that prints this.brand.
function showBrand(brand){
  console.log(this.brand);
}
// showBrand("Levis");

// 	20.	Create two different objects with brand values.
let m1 = {
  brand:"Lenovo"
}
let m2 ={
  brand:"Sheryians"
}
// 	21.	Use call to execute showBrand for both objects.
// showBrand.call(m1)
// showBrand.call(m2)
// 	22.	Explain what problem call is solving here.

// if we write noramally this in the function the this value is undefined because it is pointing for the window object on the other hand if we want the this value to be some object we use call for the this without call we were were having undefined but call make it an object pointed.

// SECTION 7: apply Method Practice
// 	23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
function introduce(city,role){
      console.log(this.name,city,role)
}
// introduce("Islamabad","Fullstack Developer");
// 	24.	Create an object with a name property.
let k1 ={
  name:"Abdur-Rehman",
  // role:"Fullstack Developer"
}

introduce.call(k1,"Islamabad","Fullstack Developer");

// 	25.	Use apply to call introduce using the object and an array of arguments.
introduce.apply(k1,["Rawalpindi","Frontend Developer"]);
// 	26.	Explain in simple words how apply differs from call.
//apply differ from call in a way that it does the same thing as call do but call takes one object and other as arguments without using array for the arguments whereas apply takes an object and array of arguments.


// SECTION 8: bind Method Practice
// 	27.	Create a function greet that prints “Hello” followed by this.name.
function greet(name){
  console.log(`Hello ${this.name}.`,this)
}
greet("Ali");
let obj ={
  name:"Mahad Ali Khan"
}
let bindedFnc = greet.bind(obj,"Talha");
bindedFnc();

// 	28.	Bind this function to an object and store the returned function in a variable.
// 	29.	Call the bound function later and observe the output.
// 	30.	Explain why bind is useful when functions are executed later or inside callbacks.
// when we use call and apply they immediately calls the functions where as there is some time in our life where we do not want to execute the function immediately for exxample we will amke the like button a bineded function so when user clicks it should increase the count not immediately