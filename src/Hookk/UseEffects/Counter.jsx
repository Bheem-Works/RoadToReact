import React, {useState,useEffect} from 'react';

function Counter () {
  const [count,setCount] = useState(0);
  const [calculation,setCalculation] = useState(0);
  const [color,setColor] = useState("green");

  useEffect(()=>{
    setCalculation(()=>
      // count * 2
    document.title = `Count : ${count} Color : ${color}`
    );
  },[count]);
  
  function colorOne () {
    setColor (c => c==="green" ? "purple" : "green")
  }
  
  return(
  <div>
    <p style = {{color: color } }> Count : {count}</p>
    <button onClick = {() => setCount((c)=> c + 1)}>+</button>
    <p>Calculation : {calculation}</p>
    <button onClick={colorOne}>Change Color</button>
  </div>
);
}
export default Counter;