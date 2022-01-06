import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [firstEmail, setFirstEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && firstEmail){
      console.log('Form submitted')
      const person = {id:new Date().getTime().toString(), firstName, firstEmail}
      setPeople((people) => {
        return[...people, person]
      });
      setFirstName('');
      setFirstEmail('');
    }else{
    console.log('Empty Values')
    }
  }

  return (
    <>
    <article>
      <form className = 'form' onSubmit = {handleSubmit}>
        <div className="form-control">
          <label htmlFor = 'firstName'> Name: </label>
          <input 
            type = 'text' 
            id='firstName' 
            name='firstName' 
            value = {firstName}
            onChange = {(e)=> setFirstName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor = 'email'> Email: </label>
          <input 
            type = 'text' 
            id='email' 
            name='email' 
            value = {firstEmail}
            onChange = {(e)=> setFirstEmail(e.target.value)}
          />
        </div>

        <button type = 'submit'>Add Person</button>
      </form>
      {
        people.map((person) => {
          const {id, firstName, firstEmail} = person;
          return  <div className = 'item' key = {id}>
            <h4>{firstName}</h4>
            <p>{firstEmail}</p>

          </div>
        })
      }
    </article>
    </>
  );
};

export default ControlledInputs;
