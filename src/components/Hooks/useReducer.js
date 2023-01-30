import React from "react";
import './style.css';
import { useState, useEffect, useReducer } from "react";


const reducer = (state, action)=>{
  if(action.type === "INCREMENT"){
    state = state+1;
  }
  return state;
}
const UseReducer = () => {

  const initialData= 1;

// const [count, setCount] = useState(0);

// useEffect(()=>{
//     document.title = `chats (${count})`
// });
 
// const incrementHandlere = ()=>{
//     setCount(count+1);
// }

const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <div className="center_div">
        <p>Clicks = {state}</p>
        <div className="button2" onClick={()=>dispatch({type:"INCREMENT"})} >
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

export default UseReducer;
