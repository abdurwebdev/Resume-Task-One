import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react';

const App = () => {
  const [first, setfirst] = useState("Ali")
  return (
    <div>
      <Navbar first={[first,setfirst]}/>
    </div>
  )
}

export default App