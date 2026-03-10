import React from 'react'
import {Rnd} from 'react-rnd'
import "./window.scss"

const Window = ({children,first,setFirst,appName}) => {
  const handleClose = () =>{
    setFirst({...first,[appName]:false})
  }
  return (
    <Rnd
    className='wind'
  default={{
    x: 220,
    y: 80,
    width: 620,
    height: 300,
  }}
>
 <nav>
  <div className="left">
    <div className="red" onClick={handleClose}></div>
    <div className="blue"></div>
    <div className="green"></div>
    <p>abdurrehman zhs</p>
  </div>
 </nav>
 <section>
  {children}
 </section>
</Rnd>
  )
}

export default Window