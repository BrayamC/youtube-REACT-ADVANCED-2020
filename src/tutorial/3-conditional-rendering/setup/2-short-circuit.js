import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || 'hello world'; // if true(not empty), returns text
  const secondValue = text && 'hello world'; // returns hello world, if text is true(not empty)

  return (
    <>
      <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1>
    </>
  );
};

export default ShortCircuit;
