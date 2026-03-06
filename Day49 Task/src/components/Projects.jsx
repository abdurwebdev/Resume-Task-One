import { RiArrowDownBoxFill, RiArrowDownLongLine } from '@remixicon/react'
import React from 'react'

const Projects = () => {
  return (
    <section className='flex ml-20 items-start justify-between flex-col'>
      <div className='flex gap-8'>
        <div>
          <p className='text-6xl font-light'>200+</p>
          <p>Projects Completed</p>
        </div>
        <div>
        <h1 className='text-6xl font-light'>50+</h1>
        <p>Startup Raised</p>
        </div>
      </div>
      <div>
        <h1 className='text-[190px]'>Hello</h1>
        <div className='flex items-center gap-2'>
          <div className="line w-12 h-[.5px] bg-black"></div>
          <p>It's D.Nova A Design Wizerd</p>
        </div>
      </div>
      <div>
        <button className='flex gap-2'><RiArrowDownLongLine />Scroll Down</button>
      </div>
    </section>
  )
}

export default Projects