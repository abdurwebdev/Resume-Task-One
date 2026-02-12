let marks = Number(prompt("Enter your marks?"))
if(marks>=90) console.log("A Grade")
else if(marks>=75) console.log("B Grade")
else if(marks>=50) console.log("C Grade")
else console.log("Fail")
let city = "Rawalpindi"
if(city==='Rawalpindi') console.log("MP")
else if(city === 'Islamabad') console.log("Capital")
else console.log("Unknown City")
let score = 40
console.log(score>35 ? 'Pass':'Fail')
let temp = 40;
console.log(temp>39?'Hot':'Pleasant')

let day = Number(prompt("Enter the day number?"))
switch (day) {
  case 1:
    console.log("Monday")
    break;
  case 2:
    console.log("Tuesday")
    break;
  case 3:
    console.log("Wedesday")
    break;
  case 4:
    console.log("Thursday")
    break;
  case 5:
      console.log("Friday")
      break;
  case 6:
    console.log("Saturday")
    break;
  case 7:
    console.log("Sunday")
    break;
  default:
    console.log("Invalid Day")
    break;
}

let ages = 18
let town = 'Pakistan'
console.log(ages>=18 && town == 'Pakistan' ? 'Eligible for vote':'Not Eligible for vote')