import React from "react";
import './style.css';
import { useState } from "react";

const UseState = () => {

const [count, setCount] = useState(0);

const incrementHandlere = ()=>{
    setCount(count+1);
}

const decrementHandlere =()=>{
    setCount(count-1);
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
        <div className="button2" onClick={decrementHandlere}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Decrement
        </div>
      </div>
    </>
  );
};

export default UseState;
