const cartiess = document.querySelector(".cart");
console.log(cartiess)
let cartData = JSON.parse(localStorage.getItem("cartss")) || [];
let clut = ""
cartData.forEach((elem,idx)=>{
  clut+=`
  <div id="${idx}" class="card">
      <img src="${elem.image}">
      <div id="cat">
      <p>${elem.category}</p>
      </div>
      <div id="price_name">
      <h1>${elem.name}</h1>
      <h1>${elem.price}</h1>
      </div>
      <div id="cart_fav">
        <button id="cartie" class="${idx}">Remove From Cart</button>
      </div>
      </div>
  `
})
cartiess.innerHTML=clut