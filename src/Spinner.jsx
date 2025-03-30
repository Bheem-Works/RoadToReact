// How to import a react spinner....... 

import React,{useState,useEffect} from 'react'
import { ClipLoader } from 'react-spinners';
function Spinner() {
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },5000)
    },[])

    // hope you learn it and you should have to try this cool things. see Ysh with the next cool things and code. 
  return (
    <div>
      {
        loading ? 
        <ClipLoader /> 
        : 
        <div>
            <h1>Hello Miso. </h1>
        </div>
      }
    </div>
  )
}

export default Spinner
