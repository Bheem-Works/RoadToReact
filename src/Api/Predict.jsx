import React from 'react'
import Axios from 'axios';
import {useState,useEffect} from 'react';
function Predict() {
    const [name,setName] = useState("");
    const [predictedData,setPredictedAge] = useState(null);
    const Miso = () => {
        Axios.get(`https://api.agify.io/?name=miso ${name}`).then((res)=>{
            setPredictedAge(res.data);
        })
    }
  return (
    <div>
        <input type="text" placeholder = "Ex.Miso" onChange={(event)=>{setName(event.target.value)}} />
      <button onClick={Miso}>Predict</button>
      <h1>Predict Name :{predictedData?.name} </h1>
      <h1>Predict Age :{predictedData?.age} </h1>
      <h1>Predict Count :{predictedData?.count} </h1>
    </div>
  )
}

export default Predict
