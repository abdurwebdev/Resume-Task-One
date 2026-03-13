import React, { createContext, useState } from 'react'

// Create a context to store favourite recipes
export const FavContext = createContext();

const FavProvider = ({ children }) => {
  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem('fav')) || []
  );
  const [isfavs, setIsfav] = useState(JSON.parse(localStorage.getItem("isFavie")) || false);

  return (
    <FavContext.Provider value={{ favs, setFavs,isfavs,setIsfav }}>
      {children}
    </FavContext.Provider>
  );
};

export default FavProvider