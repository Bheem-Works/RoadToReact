import React from 'react'

function TwoCallback() {
    console.log('miso is sleeping');

  return (
    <div>
        <h2>Miso is sleeping</h2>
    </div>
  )
}

export default React.memo(TwoCallback)
