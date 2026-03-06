import React from 'react'
import SideNav from './SideNav'
import { useContext } from 'react'
import { ThemeContextP } from '../context/ThemeContext'

const Navbar = () => {
  const value = useContext(ThemeContextP);
  return (
    <div style={{width:'100%',height:'100px',backgroundColor:'black'}}>{value.theme}
    <SideNav/>
    </div>
  )
}

export default Navbar