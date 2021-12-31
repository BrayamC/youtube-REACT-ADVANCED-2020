import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState("Default title"); 

  const handleClick = ((e) => {
    if(text === "Default title"){
      setText("New Title");
    } else {
      setText("Default title");
    }
  });

  return (
    <>
      <h2>{text}</h2>
      <button className = 'btn' onClick = {handleClick} >Change Title</button>
    </>
  ) 
};

export default UseStateBasics;
