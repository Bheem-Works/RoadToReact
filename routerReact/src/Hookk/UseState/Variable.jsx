import React, {useState} from 'react'

function Variable() {
    const [name,setName] = useState('Miso');
    const [age,setAge] = useState(3);
  return (
    <div>
      <label>
        <input type="text" onChange = {e => setName(e.target.value)} />
      </label>
      <button onClick={()=> setAge(age + 1)}>Increament Age</button>

      <p>Your name is {name} and you are  {age} years old.</p>
    </div>
  )
}

export default Variable
