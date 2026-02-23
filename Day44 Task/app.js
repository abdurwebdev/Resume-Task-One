// Products Array
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1612858249937-1cc0852093dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Fashion",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Backpack",
    category: "Accessories",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    name: "Sunglasses",
    category: "Fashion",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1693305584727-2a3b052da930?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    name: "Gaming Mouse",
    category: "Electronics",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1613141412501-9012977f1969?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

function addProducts(products){
     let clutter = "";
     products.forEach((elem,idx)=>{
      clutter+=`<div id="${idx}" class="card">
      <img src="${elem.image}">
      <div id="cat">
      <p>${elem.category}</p>
      </div>
      <div id="price_name">
      <h1>${elem.name}</h1>
      <h1>${elem.price}</h1>
      </div>
      <div id="cart_fav">
        <button id="cartie" class="${idx}">Add To Cart</button>
        <button id="fav" class="${idx}">Add To Favourite</button>
      </div>
      </div>`
     })
     document.querySelector("#productsContainer").innerHTML=clutter;
}

addProducts(products);

let input = document.querySelector("#searchInput");
input.addEventListener("input",(dets)=>{
  console.log(dets.target.value.toLowerCase());
  let newArr = products.filter((elem)=>{
    if(elem.name.toLowerCase().includes(dets.target.value.toLowerCase())){
      return true;
    }
    else{
      return false;
    }
  })
  addProducts(newArr)
})


let container = document.querySelector("#productsContainer");
let cartCount = document.querySelector("#cartCount");
let cart = JSON.parse(localStorage.getItem("cartss")) || []
cartCount.innerText = cart.length;
container.addEventListener("click",(dets)=>{
  if(dets.target.id === 'cartie'){
    let product = products[Number(dets.target.classList.value)];
    let cart = JSON.parse(localStorage.getItem("cartss")) || []
    cart.push(product)
    localStorage.setItem("cartss",JSON.stringify(cart))
  }
})

let favss = [];

function addToFavourite(){
   let fav = document.querySelector("#productsContainer");
   fav.addEventListener("click",(dets)=>{
    if(dets.target.id === 'fav'){
         let index = Number(dets.target.classList.value);
         let product = products[index];
         let favProducts = JSON.parse(localStorage.getItem("favo")) || [];
         favProducts.push(product);
         localStorage.setItem("favo",JSON.stringify(favProducts))
    }
   })
}

addToFavourite();

let fav = JSON.parse(localStorage.getItem("favo")) ;
document.querySelector("#favCount").innerText=fav.length;
