import React,{useState,useEffect} from 'react'

const useLocalstorage = (key,initailValue) => {
    const [name,setName] = useState(
        localStorage.getItem(key) ? 
        localStorage.getItem(key) : 'initailValue'
    );

    useEffect (()=>{
        localStorage.setItem(key,name)
    },[name,key]);

  return [name,setName]
}

export default useLocalstorage
