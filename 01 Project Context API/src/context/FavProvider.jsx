import React, { createContext, useState } from 'react'

// Create a context to store favourite recipes
export const FavContext = createContext();

const FavProvider = ({ children }) => {
  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem('fav')) || []
  );

  return (
    <FavContext.Provider value={{ favs, setFavs }}>
      {children}
    </FavContext.Provider>
  );
};

export default FavProvider