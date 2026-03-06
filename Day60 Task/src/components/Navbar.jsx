import React from 'react'

const Navbar = (props) => {
 
  return (
    <div>
      {props.first[0]}
    <button onClick={()=>{
      props.first[1]("Abdur-Rehman")
    }} >Change</button>
    </div>
  )
}

export default Navbar