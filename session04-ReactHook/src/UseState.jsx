import React, { useState } from 'react'

export default function UseState() {
  const [count,setCount] = useState(0);
  const [title,setTitle] = useState('Khanh');
  const [work,setWork] = useState();
  const [jobs , setJobs] = useState([]);

/*   Nắm kỹ destructoring
    const [a,b] = useState(x);
    * Hàm useState():
    phần tử a: là giá trị khởi tạo
    phần tử b: là 1 hàm xử lý

    Khi mà setCount ở dòng 4 thì component sẽ tự động re-render 
    cho nên về phía UI tự động cập nhật giá trị.
*/
  const increase = ()=>{
    console.log("=> Hàm increase hoạt động !");
    setCount(count+1);
  };

  const changeTitle = ()=>{
    console.log("=> Hàm changeTitle hoạt động !");
    setTitle('Liêm');
  };

  const displayWork = (event)=>{
        console.log("=> Hàm displayWork hoạt động !");
        let work = event.target.value;
        setWork(work);
  }

  const addJob = ()=>{
    setJobs([...jobs , work]);
    setWork("");
  }
  
  return (
    <>
      <h2>UseState</h2>
      <p>Count: {count}</p>
      <p>Title: {title}</p>
      <button onClick={increase}>Click count</button>
      <button onClick={changeTitle}>Click title</button>
      <br></br> <br></br>
    
      <input type='text' placeholder='Điền công việc vào đây' onChange={displayWork}></input>  
      <button onClick={displayWork}>Save</button>
      <p>Hiển thị công việc: {work}</p>
      <button onClick={addJob}>Add</button>

      <ul>
        {
            jobs.map( (item , index) => {
                return <li key={index}>{item}</li>
            })
        }
      </ul>
    </>
  )
}
