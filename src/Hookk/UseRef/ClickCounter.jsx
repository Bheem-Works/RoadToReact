import React,{useRef} from 'react'

function ClickCounter() {
    let ref = useRef(0)
    function handleClick () {
        ref.current = ref.current + 1;
        alert ("You Have clicked "+ ref.current +'Times!') 
    }
  return (
    <div>
      <button onClick={handleClick}>Click </button>
    </div>
  )
}

export default ClickCounter
