import React,{
    useState,useEffect
} from 'react'
import { fetchBio } from './api.js';

function A() {

    const [person,setPerson] = useState ('purple');
    const [biio,setBio] = useState (null);
    
    useEffect (()=>{
        async function startFetching () {
            setBio(null);
            const result = await fetch
        }
    })
    

  return (
    <div>
      
    </div>
  )
}

export default A
