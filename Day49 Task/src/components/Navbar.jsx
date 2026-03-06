import React from 'react'
import { RiArrowRightUpLongLine } from '@remixicon/react'
const Navbar = () => {
  return (
    <nav className='w-full h-16   flex items-center justify-between'>
      <div className='flex gap-4 items-center'>
        <img className='w-10 mr-7 h-10 object-cover' src="https://img.pikbest.com/png-images/20241027/black--26-white-eagle-badge-logo_11012410.png!bw700" alt="" />
        <h3>About Me</h3>
        <h3>Services</h3>
        <h3>Portfolio</h3>
        <h3>Blog</h3>
      </div>
      <div>
        <button className='underline flex gap-2'>Book a Call <RiArrowRightUpLongLine className='underline' /></button>
      </div>
    </nav>
  )
}

export default Navbar