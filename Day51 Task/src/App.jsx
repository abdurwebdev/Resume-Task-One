import React from 'react'
import Navbar from '../componenets/Navbar'
import { useContext } from 'react'
import { ThemeContextP } from '../context/ThemeContext'
import { useState } from 'react'

const App = () => {
  const [isLight, setisLight] = useState(true);
  const value = useContext(ThemeContextP);
  return (
    <>
    <Navbar/>
    <button onClick={()=>{
      if(isLight){
        value.settheme('dark');
        setisLight(false);
      }
      else{
        value.settheme('light')
        setisLight(true);
      }
      
    }}>Change Theme</button>
    </>
  )
}

export default App