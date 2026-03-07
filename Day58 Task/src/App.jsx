import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
 const [products, setproducts] = useState([]);

 const getData = async () =>{
       let blob = await axios.get('https://api.escuelajs.co/api/v1/products');
       setproducts(blob.data);
 }
 useEffect(()=>{
  getData()
 },[])

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <button onClick={getData} className="px-4 py-4 bg-orange-400">GET DATA</button>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <p className="text-lg font-semibold text-white mb-1">
                  ${product.price}
                </p>
                <h2 className="text-white font-medium text-md mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-300 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;