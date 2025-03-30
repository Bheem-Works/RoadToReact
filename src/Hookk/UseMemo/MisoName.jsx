import React,{useState,useMemo} from 'react'
function MisoName() {
    const [miso,setMiso] = useState ('');

   const eggs = useMemo (()=>{
    return <h3>Hello {miso} </h3>
   },[miso]);
  return (
    <div>
        <label >
            <input type="text"
             value = {miso}
              onChange = {(e) => setMiso (e.target.value)} />
            {eggs}
        </label>
    </div>
  )
}

export default MisoName
