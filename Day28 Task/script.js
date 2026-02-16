let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let isFreind = false;
btn.addEventListener("click",()=>{
   if(!isFreind){
    h1.innerHTML="Friends";
    h1.style.color='green';
    btn.innerHTML="Remove Friends";
    btn.style.backgroundColor='red';
    isFreind=true;
   }
   else{
    h1.innerHTML="Remove Freinds";
    h1.style.color='royalblue';
    btn.innerHTML="Add Friends";
    btn.style.backgroundColor='royalblue';
    isFreind=false;
   }
})