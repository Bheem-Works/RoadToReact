import React from 'react'
import Miso from './Miso.json'

function Backend() {
  return (
    <div>
      <ul>
        {Miso && Miso.map((stuff, index) => {
          return (
            <React.Fragment key={index}>
              <span>{stuff.name}</span>
              
              {stuff.food && stuff.food.map((food, foodIndex) => {
                return (
                  <div key={foodIndex}>
                    {food.thupa}
                  </div>
                )
              })}
            </React.Fragment>
          )
        })}
      </ul>
    </div>
  )
}

export default Backend