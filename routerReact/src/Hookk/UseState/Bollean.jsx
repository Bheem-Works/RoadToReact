import React,{useState} from 'react'

function Bollean() {
    const [boolean,setBoolean] = useState(true);

    const handleChecked = (e) =>{
        setBoolean(e.target.checked)
    }

  return (
    <div>
      <label>
        <input type="checkbox" checked = {boolean} onChange = {handleChecked}  />
        Miso have liked this. 
      </label>
      <p>Miso -- {boolean ? "liked this" : "Have n't like"} this</p>
    </div>
  )
}

export default Bollean
