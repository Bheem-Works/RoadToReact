// Making a calculation By using the memo Hooks 

import React,{useState,useMemo} from 'react'

function CounterMemo() {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);

    function power (num) {
        return Math.pow(num,3);
    };

    const memo = useMemo(()=>power (number),[number]);

  return (
    <div>
      <input type="number" value = {number} onChange = {(e) => {setNumber (e.target.value)}} />
      <h1>{memo}</h1>
        <p>{count}</p>
      <button onClick = {() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default CounterMemo
