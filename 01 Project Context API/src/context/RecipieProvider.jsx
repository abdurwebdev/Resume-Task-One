import React, { createContext, useEffect, useState } from 'react'

export const RecipieContext = createContext();

const RecipieProvider = ({children}) => {
  const [recipie, setRecipie] = useState(JSON.parse(localStorage.getItem("recipie"))|| []);



  return (
    <RecipieContext.Provider value={[recipie,setRecipie]}>
      {children}
    </RecipieContext.Provider>
  )
}

export default RecipieProvider