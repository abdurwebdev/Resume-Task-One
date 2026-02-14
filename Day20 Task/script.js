let users = [
  {
    id: 1,
    name: "Rahul Sharma",
    age: 22,
    city: "Delhi",
    profession: "Frontend Developer"
  },
  {
    id: 2,
    name: "Priya Verma",
    age: 25,
    city: "Mumbai",
    profession: "UI/UX Designer"
  },
  {
    id: 3,
    name: "Amit Kumar",
    age: 28,
    city: "Bangalore",
    profession: "Backend Developer"
  },
  {
    id: 4,
    name: "Sneha Singh",
    age: 24,
    city: "Pune",
    profession: "Digital Marketer"
  }
];

let sum = "";
users.forEach((user)=>{
  
  sum+= `<div class="card">
    <h1>${user.name}</h1>
    <h1>${user.age}</h1>
    <h1>${user.city}</h1>
    <h1>${user.profession}</h1>
  </div>`
})
console.log(sum)
document.querySelector("main").innerHTML=sum;