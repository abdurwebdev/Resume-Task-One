import React from 'react'
import Products from './pages/Products'
import { useContext } from 'react'
import { StoreContextProvider } from './context/StoreContext'

const App = () => {
  let {first,setfirst} = useContext(StoreContextProvider);
  console.log(first,"ASDasdasd")
  return (
    <div>
      <Products/>
      {first.map((elem,idx)=><div key={idx}>
        <h1>{elem.title}</h1>
      </div>
       )}
    </div>
  )
}

export default App