import React , {useState,createContext} from 'react'
import TwoComponent from './TwoComponent';
export const UserContext = createContext();
function Brocode() {

    const [user,setUser] = useState('Miso');

  return (
    <div className='box'>
      <h1>componentOne</h1>
      <p>{`Hello ${user}`}</p>
      <UserContext.Provider value ={user} >
    <TwoComponent user={user}/>
      </UserContext.Provider>
    </div>
  )
}

export default Brocode
