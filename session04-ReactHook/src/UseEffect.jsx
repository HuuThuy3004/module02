import React, { useEffect, useState } from 'react'

export default function UseEffect() {
  const [count , setCount] = useState(0);
  const [tittle , setTittle] = useState('Hoa');
  useEffect( ()=>{
        console.log("Gọi useeffect");
    } , [tittle , count]
  )
  /*
    Có 3 cách dùng:
    C1: 
    C2: Thêm []
    C3: Trong [] chứa dependency
        khi dependency
  */ 
  return (
    <>
        <h2>UseEffect</h2>
        {console.log("1111111")}
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Click</button>
        <button onClick={()=>setCount('Lan')}>Click</button>
    </>
  )
}
