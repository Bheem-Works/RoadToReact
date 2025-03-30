import React,{useRef} from 'react'

function TwoCount() {
    const pen = useRef();

    function ball () {
        pen.current.style.backgroundColor = "purple";
    }
  return (
    <div>
      <input type="text" ref={pen} />
      <button onClick = {ball}>Click </button>
    </div>
  )
}

export default TwoCount
