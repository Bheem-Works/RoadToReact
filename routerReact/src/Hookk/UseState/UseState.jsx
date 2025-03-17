import React, {useState} from 'react'

function UseState() {
    // const [count,setCount] = useState(0);
    const [miso,setMiso] = useState();

    // const onHandle = () => {
    //     setCount(count + 1);
    // }
    const misoPage = (e) => {
        setMiso(e.target.value);
    };
  return (
    <div>
        {/* <button onClick={onHandle}>{count}</button> */}
        <input type="text" onChange={misoPage}/>
        {/* <button onClick={misoPage}>show me</button> */}
        <p>{miso}</p>
        <button onClick={()=> {
            setMiso('Miso')
        }
        }>Reset</button>
    </div>
  )
}

export default UseState
