import React from "react";
import './style.css';
import { useState, useEffect } from "react";

const UseEffect = () => {

const [count, setCount] = useState(0);

useEffect(()=>{
    document.title = `chats (${count})`
});
 
const incrementHandlere = ()=>{
    setCount(count+1);
}

  return (
    <>
      <div className="center_div">
        <p>Clicks = {count}</p>
        <div className="button2" onClick={incrementHandlere} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Increment 
        </div>
      </div>
    </>
  );
};

export default UseEffect;
