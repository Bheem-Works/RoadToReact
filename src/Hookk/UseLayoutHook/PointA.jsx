import React,{useState,useLayoutEffect, useEffect} from 'react';

function PointA() {
    useEffect (()=>{
        console.log('vim is not good');
        
    },[]);
    useLayoutEffect (()=>{
        console.log('Vim is Good Man. ');
    },[]);
  return (
    <div>
      <h2>Pen is important</h2>
      {Array(30).fill('').map((items,index)=>(
        <li key={index}>{Math.pow(Math.random(),10)}</li>
      ))};
    </div>
  )
}

export default PointA;
