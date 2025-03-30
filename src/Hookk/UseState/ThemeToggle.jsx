import React,{useState} from 'react';

function ThemeToggle() {
    const [blackTheme,setBlackTheme] = useState(false);
    const toggleTheme=()=>{
        setBlackTheme((pretime)=>!pretime);
    };
    const theme = {
        backgroundColor: blackTheme ? "black" : "white",
        color: blackTheme ? "white" : "black",
    }
  return (
    <div style = {theme}>
      <button onClick={toggleTheme}>Toggle Color </button>
    </div>
  )
}

export default ThemeToggle
