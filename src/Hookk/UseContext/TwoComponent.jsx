import React, { useContext } from 'react'
import { UserContext } from './Brocode'
function TwoComponent() {
    const user = useContext(UserContext);
  return (
    <div>
        <h3>Component Two</h3>
      <h2>{`Bye${user}`}</h2>
    </div>
  )
}

export default TwoComponent
