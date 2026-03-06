import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

export const StoreContextProvider = createContext();

const StoreContext = ({children}) => {
  const [first, setfirst] = useState([]);
  const getData = async () =>{
        let blob = await axios.get('https://api.escuelajs.co/api/v1/products');
        let data = blob.data;
        setfirst(data);
        console.log(data)
  }
  useEffect(() => {
    getData();
  
    
  }, [])
  
  return (
    <div>
      <StoreContextProvider.Provider value={{first,setfirst}}>
      {children}
      </StoreContextProvider.Provider>
      </div>
  )
}

export default StoreContext