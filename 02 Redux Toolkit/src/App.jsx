import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, incrementByFive } from './features/counterSlice';
import { changeTheme } from './features/themeSlice';
const App = () => {
  const count = useSelector((state)=>state.counter.value);
  const theme = useSelector((state)=>state.theme.value);
  const dispatch = useDispatch();
  return (
    <div>
      {count}
      {theme}
      <button onClick={()=>{dispatch(increment())}}>Incrmeent</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
      <button onClick={()=>{dispatch(incrementByFive())}}>Decrement By Five</button>
      <button onClick={()=>{dispatch(changeTheme())}}>Change Theme</button>
    </div>
  )
}

export default App