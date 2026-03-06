import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardLayout from './layout/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Settings from './pages/Settings'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<DashboardLayout/>} path='/'>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/users' element={<Users/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App