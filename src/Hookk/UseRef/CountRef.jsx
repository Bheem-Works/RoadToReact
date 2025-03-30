import React,{useState,useEffect,useRef} from 'react'

function CountRef() {
    const [count,setCount] = useState(0);
    const value = useRef(0);

    useEffect(()=>{
        value.current = value.current + 1;
    }) 
  return (
    <div>
    <button onClick = {() => { setCount (count => count + 1 )}}>minush</button>  
    <button onClick = {() => { setCount (count => count - 1)}}>pluse</button>  
    <h1>{count}</h1>
    <p>vlaue : {value.current}</p>
    </div>
  )
}

export default CountRef
