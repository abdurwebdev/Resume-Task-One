for(let i=1;i<11;i++){
  console.log(`5 * ${i} = ${5*i}`)
}
let count =0;
for(let i =1;i<16;i++){
  if(i>8) count++;
  else continue
}
console.log(count)
let attempts = 0;
while(attempts<3){
  let pass = prompt("Enter the password:- ")
  if(pass==='admin123') console.log("Access Granted")
  else{
     attempts++;
     if(attempts===3 || attempts>3){
      console.log("Account Blocked")
     }
}
}
let stop = false;
let counts = 0;
while(!stop){
  let word = prompt("Enter words");
  if(word === 'stop'){
    stop=true;
  }
  else if(word === 'yes'){
    counts++;
  }
}
console.log(counts)

for(let i =1;i<51;i++){
  if(i%7===0){
    console.log(i)
  }
}

let oddSum = 0;
for(let i =1;i<31;i++){
  if(i%2!==0) oddSum+=i
}
console.log(oddSum)