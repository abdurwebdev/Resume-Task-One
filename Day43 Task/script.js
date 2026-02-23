const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 59.99,
    image: "https://plus.unsplash.com/premium_photo-1671013032130-5cd044f0be99?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Fashion",
    price: 75.50,
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Backpack",
    category: "Accessories",
    price: 40.00,
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 35.99,
    image: "https://plus.unsplash.com/premium_photo-1674382739482-5d36b98d653a?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    name: "Sunglasses",
    category: "Fashion",
    price: 25.00,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    name: "Laptop Stand",
    category: "Office",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 8,
    name: "Gaming Mouse",
    category: "Electronics",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

function addProducts(products){
        let clutter = "";
        products.forEach((elem)=>{
          clutter+=`
          <img src="${elem.image}">
          `
        })
        document.querySelector(".gridie").innerHTML=clutter
}

addProducts(products);

let input = document.querySelector("input");
input.addEventListener("input",(e)=>{
  let userText = e.target.value.toLowerCase();
  let newArr = products.filter((val)=>{
    if(val.name.toLowerCase().includes(userText)){
      return true;
    }
    else{
      return false;
    }
  })
  addProducts(newArr)
})