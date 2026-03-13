import React, { useState, useEffect, useContext } from 'react'
import { FavContext } from '../context/FavProvider'

const Fav = () => {
  const [fav, setFav] = useState([])
  const {isfavs} = useContext(FavContext);
  console.log(isfavs,"ASDasdasdasdasdasd")
  // Load favorites from localStorage once on mount
  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem("fav")) || []
    setFav(storedFav)
  }, [])

  if (fav.length === 0 || !isfavs) {
    return <p className="p-5 text-gray-600">No favorites yet!</p>
  }

  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {fav.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden p-4 flex flex-col"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-xl font-semibold mt-3">{item.name}</h2>
          <p className="text-gray-600 mt-1">{item.desc}</p>
          <span
            className={`inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full ${
              item.category === "good"
                ? "bg-green-100 text-green-700"
                : item.category === "bad"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {item.category}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Fav