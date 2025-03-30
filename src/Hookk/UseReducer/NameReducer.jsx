import React ,{useReducer}from 'react'

const reducer = (state,action) => {
    if(action.type === 'increment_age') {
        return {age : state.age+1};
    } throw new Error ('This is not done yet');
}

function NameReducer() {
    const [state,dispatch] = useReducer (reducer, {age:10});
  return (
    <div>
      <button onClick = {()=> dispatch({type : 'increment_age'})}>Increment</button>
      <p>{state.age}</p>
    </div>
  )
}

export default NameReducer
