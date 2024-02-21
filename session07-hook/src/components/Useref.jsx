import React, { useRef, useState } from 'react'

export default function Useref() {
  const [count , setCount] = useState(0);
  const refHook = useRef(0)
  const obj = {
    count: 0,
  }

  const handleIncrease = ()=>{
    obj.count = obj.count + 1;  
    console.log('Count sau khi click ' , obj.count);
    refHook.current = refHook.current + 1
    setCount(count+1)
  }  
  
    
  return (
    <>
        <div>Useref</div>
        <p>Count: {refHook.current}</p>
        <button onClick={handleIncrease}>Click</button>
        <label>Username</label>
        <input type='text' ref={refHook}></input>
    </>    
  )
}
