import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='m-4 flex gap-3'>
      <NavLink to='/' className={({isActive})=>`px-4 py-2 transition-colors rounded-2xl ${isActive?'bg-orange-400':'bg-orange-300'}`}>Home</NavLink>
      {/* <Link to='/'>Home</Link> */}
      <NavLink to='/course' className={({isActive})=>`px-4 py-2 transition-colors rounded-2xl ${isActive?'bg-orange-400':'bg-orange-300'}`}>Course</NavLink>
      {/* <Link to='/course'>Course</Link> */}
      <NavLink to='/about' className={({isActive})=>`px-4 py-2 transition-colors rounded-2xl ${isActive?'bg-orange-400':'bg-orange-300'}`}>About</NavLink>
    </div>
  )
}

export default Navbar