import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setIsError(!isError)}>Toggle Error</button>
      {isError ? (<p>Error</p>) : (<p>OK</p>)}
    </>
  );
};

export default ShortCircuit;

/*
  const firstValue = text || 'hello world'; // if true(not empty), returns text
  const secondValue = text && 'hello world'; // returns hello world, if text is true(not empty)
        {isError && <h1>Error...</h1>}
*/