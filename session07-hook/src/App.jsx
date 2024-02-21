import React, { useState } from 'react'
import Useref from './components/Useref'
import UseReducer from './components/UseReducer'
import Usecallback from './components/Usecallback'

export default function App() {
  const [count , setCount] = useState(0)
  const handleClick = ()=>{
    setCount(count+1)
  }
  return (
    <>
      <div>App</div>
      <Useref/>
      <p>------------------------</p>
      <UseReducer/>
      <Usecallback/>
      <button onClick={handleClick}>Click</button>
    </>
  )
}
