import React from 'react'
import RecipieDetail from './pages/RecipieDetail.jsx'
import CreateRecipie from './pages/CreateRecipie.jsx'
import Dashborad from './Layout/Dashborad.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home.jsx'
import Fav from './pages/Fav.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Dashborad/>,
    children:[
      {
        path:"home",
        element:<Home/>,
      },
      {
        path:'/recipie/:id',
        element:<RecipieDetail/>
      },
      {
        path:'/create',
        element:<CreateRecipie/>
      },
      {
        path:'/fav',
        element:<Fav/>
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App