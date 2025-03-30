import React,{useState,useEffect} from 'react'

export default function SetTimeOut() {

    const [count,setCount] = useState(0);

    useEffect (()=>{
        setTimeout(()=>{
            setCount((count) => count + 1);
        },1000);
    },[]);
  return (
    <div>
      <h1>You have Reached This much Count {count} Times!</h1>
    </div>
  )
}
