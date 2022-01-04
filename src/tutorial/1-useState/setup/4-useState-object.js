import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter', 
    age: 24, 
    message: 'random'
  });

  const changeMessage = () => {
    setPerson({...person, message: 'hello world'});
  };
  console.log(person)
  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button className="btn" onClick = {() => changeMessage()}> Change Message</button>
    </>
    
  );
};

export default UseStateObject;
