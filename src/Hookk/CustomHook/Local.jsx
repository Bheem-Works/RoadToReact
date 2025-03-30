import React from 'react'
import useLocalstorage from './useLocalstorage'

function Local() {
   const [name,setName] = useLocalstorage('username','')
   const [id,setId] = useLocalstorage('userId','')
  return (
    <div>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Ass Name' />
      <p>Hello {name}Ass!</p>

      <input type="number" value={id} onChange={(e)=>setId(e.target.value)} placeholder='Enter Your Ass Id' />
      <p>Hello {id}Ass!</p>
    </div>
  )
}

export default Local
