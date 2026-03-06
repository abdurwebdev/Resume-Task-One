import React from 'react'
import Navbar from './components/Navbar'
import ProductDesigner from './components/ProductDesigner'
import Projects from './components/Projects'

const App = () => {
  return (
    <main className='w-full px-10 relative py-5 h-screen '>
      <Navbar/>
      <img className=' h-[650px] -top-20 absolute right-10 object-cover' src="https://images.unsplash.com/photo-1743027586028-2648aba113cc?q=80&w=691&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <section className='w-full h-[420px] mt-10 px-10 relative  flex gap-8'>
        <ProductDesigner/>
        <Projects/>
      </section>
    </main>
  )
}

export default App