import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
export const ThemeContextP = createContext();
const ThemeContext = ({children}) => {
  const [theme, settheme] = useState('light')
  return (
    <div>
      <ThemeContextP.Provider value={{theme,settheme}}>
      {children}
      </ThemeContextP.Provider>
      </div>
  )
}

export default ThemeContext