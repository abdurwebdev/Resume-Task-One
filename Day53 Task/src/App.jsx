import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Course from './Course'
import Home from './Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
     
      <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course/:courseName' element={<Course/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App