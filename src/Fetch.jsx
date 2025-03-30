import React, { useEffect, useState } from 'react'
import Axios from 'axios';
function Fetch() {
    const [cat,setCat] = useState("");
    useEffect(()=>{
        Api()
    },[])
    function Api () {
        Axios.get('https://catfact.ninja/fact').then((res)=>{
            setCat(res.data.fact)
        })
    }
  return (
    <div>
      {/* <Api /> */}
      <p>{cat}</p>
      <button className="bg-orange-500 border-none p-4 font-bold text-2xl hover:bg-orange-700"onClick={Api}>Change fetch</button>
    </div>
  )
}

export default Fetch
