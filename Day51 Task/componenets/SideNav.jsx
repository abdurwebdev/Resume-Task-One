import React from 'react'
import { useContext } from 'react'
import { ThemeContextP } from '../context/ThemeContext'

const SideNav = () => {
  let value = useContext(ThemeContextP);
  return (
    <div style={{width:'100px',height:'50px',backgroundColor:'red'}}>{value.theme}</div>
  )
}

export default SideNav