import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Course from './pages/Course';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Layout from './layout/Layout';
const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {path:'/',element:<Home/>},
        {path:'course',element:<Course/>},
        {path:'contact',element:<Contact/>},
        {path:'about',element:<About/>}
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App