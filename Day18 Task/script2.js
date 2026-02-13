function runTwice(fnc){
  for(let i = 1;i<3;i++){
    if(i===3) break;
    fnc();
  }
}
runTwice(function(){
  console.log("Function chala");
});

function pure(a){
  console.log(a+2);
}
pure(12);
pure(12);
pure(12);
pure(12);

let i = 10;
function impure(a){
  let rndm = Math.floor(Math.random()*10);
  console.log(a*rndm);
}
impure(i);
impure(i);
impure(i);
impure(i);

function destruct({name,age}){
      console.log(name,age)
}

let obj ={
  name:"Abdur-Rehman",
  age:21
}

destruct(obj);

const persons = {
  name:"Abdur-Rehman",
  age:21,
  greet:function(){
    console.log(`Hello welcome ${this.name}`)
  }
}
persons.greet();

const person2 ={
  name:"Ali Ahmad",
  age:23,
  greet:()=>{
    console.log(`Hello Welcome ${this.name}`)
  }
}
person2.greet();

let arr2 = [2,4,16,32,64];
let newarr2 = arr2.map((val)=>{
  return val*val;
})
console.log(newarr2)

let arr3 = [1,2,3,4,5,6,7,8,9,10];
let newarr3 = arr3.filter((val)=>{
  if(val%2!==0){
    return true;
  }
})

let arr4 = [1000, 2000, 3000];
let newarr4 = arr4.reduce((acc,curent)=>{
  return acc+curent;
},0)

let names=["Ahm","Mah","Abdullah"];
let newnames = names.some((val)=>{
  return val.length>3;
})
let newnewnames = names.every((val)=>{
  return val.length>3;
})

let objss={
  name:"Ali Ahmad",
  age:23
}

Object.seal(objss);
delete objss;
objss.job="Developer"
objss.name = "Ali Ahmad Akbar Ahmad Khan"

Object.freeze(objss);
delete objss;
objss.name = "Ali Akbar Ahmad"
obj.job="Developer"