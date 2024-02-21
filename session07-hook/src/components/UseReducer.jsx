import React, { useReducer } from 'react'

export default function UseReducer() {
  const reducer = (state,action) =>{
    switch (action) {
        case 'up':
            state += 1;
            return state;
        case 'down':
            state -= 1;
            return state
        default:
            return state;
    }
  }
  const [count , ditPatch] = useReducer(reducer, 0)
 
  const handleIncrease = ()=>{
    console.log(1111111);
    ditPatch('up')
  }
  
  const handleReduce = ()=>{
    console.log(2222222);
    ditPatch('down');
  }
  
    
  return (
    <>
        {/* Quan ly nhung state phuc tap (Su Phu cua useState) */}
        <div>UseReducer</div>
        <p>Count: {count}</p>
        <button onClick={handleIncrease} style={{background:'red'}}>Click Up</button>
        <button onClick={handleReduce} style={{background:'yellow'}}>Click Down</button>
    </>
  )
}
