import React,{useState,useRef} from 'react'

function StopWatch() {
    const [count,setCount ] = useState(null);
    const [now,setNow ] = useState(null);
    const intervalRef = useRef(null);

    function start () {
        setCount(Date.now());
        setNow(Date.now());
        
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(()=>{
            setNow(Date.now());
        },10)
    }
    function handleStop () {
        clearInterval(intervalRef.current)
        console.log('vim is alive')
    }
    
    let secondPassed = 0;
    if(count != null && now != null) {
        secondPassed = (now - count) / 1000;
    }

  return (
    <div>
      <h1>Time passed : {secondPassed.toFixed(3)}</h1>
      <button onClick = {start}>Start</button>
      <button onClick = {handleStop}>Stop </button>
    </div>
  );
}

export default StopWatch
