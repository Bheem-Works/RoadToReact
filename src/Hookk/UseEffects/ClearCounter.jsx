import React,{useState,useEffect} from 'react'

function ClearCounter() {
    const [count,setCount] = useState(0);

    useEffect (()=>{
        const timer = setTimeout (()=>{
            setCount ((count)=>  count + 1);
        },2000);

        return () => clearTimeout (timer)
    },[])
  return (
    <div>
      <p>Miso can count thi number {count}</p>
    </div>
  )
}

export default ClearCounter
