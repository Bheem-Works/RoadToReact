import React from 'react'
import { useState } from 'react'
import Axios from 'axios';
function ApiExercise() {
    const [generatedExcuse,setGeneratedExcuse] = useState("");    

    const fetchExuse  = (excuse) =>{
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res)=>{
            setGeneratedExcuse(res.data[0].excuse);
        })
    }
  return (
    <div>
      <button onClick={()=>fetchExuse("party")}>Party</button>
      <button onClick={()=>fetchExuse("family")}>Family</button>
      <button onClick={()=> fetchExuse ("office")}>office</button>
      <p>{generatedExcuse}</p>
    </div>
  )
}

export default ApiExercise
