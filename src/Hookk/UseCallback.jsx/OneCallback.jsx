import React,{useCallback,useState} from 'react'
import TwoCallback from './TwoCallback'
function OneCallback() {
    const [count,setCount] = useState (0);

    const newFn = useCallback(()=>{
        console.log('call back function is working');
        
    },[])

  return (
    <div>
        <TwoCallback newFn = {newFn}/>
        <h1>{count}</h1>
        <button onClick = { () => setCount(prev=> prev + 1)}>Click here</button>
    </div>
  )
}

export default OneCallback
