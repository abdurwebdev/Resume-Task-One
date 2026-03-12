import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Dashborad = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full min-h-screen bg-amber-500 text-black'>
      <Outlet/>
    </div>
    </>
  )
}

export default Dashborad