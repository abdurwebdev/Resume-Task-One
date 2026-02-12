// let isEven = true;
// while(isEven){
//   let num = Number(prompt("Enter a number:- "))
//   if(num%2===0) isEven = false;
//   else continue;
// }

// let num1 = Number(prompt("Enter First Number:- "));
// let num2 = Number(prompt("Enter Second Number:- "));

// for(let i = num1+1;i<num2;i++){
//   console.log(i)
// }


// let oddCount = 0;
// for(let i =1 ;i<21;i++){
//   if(i%2!==0){
//     oddCount++;
//     console.log(i)
//     if(oddCount === 3){
//       break;
//     }
//   }
// }


// let counter = 0;
// let positiveCount = 0;
// while(counter<5){
//   let nums = Number(prompt("Enter Numbers:- "));
//   if(nums>0){
//     positiveCount++;
//   }
//   counter++;
// }

// console.log(positiveCount)


let withDrawals = 0;
let balance = 1000;
while(withDrawals<3){
  let deductAmount = Number(prompt("Enter Amount To Detect:- "))
  if(deductAmount<=balance){
    balance-=deductAmount;
    withDrawals++;
    console.log("Withdrawal Successful")
    console.log("Remaining Amount:- ",balance);
  }
  else{
    console.log("Insufficient Balance!")
  }
}