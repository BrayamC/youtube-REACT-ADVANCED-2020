import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  }

  // runs when rendering
  useEffect(() => {
    getUsers();
  }, []) // only runs once

  return (
    <>
      <h2>Github users</h2>;
      <ul className="users">
      {
        users.map((user) => {
          {console.log("user", user)}
          const {id, login, avatar_url, html_url} = user;
          return (
            <li key = {id}>
              <img src = {avatar_url} alt = {login} />
              <div>
                <h4>{login}</h4>
                <a href = {avatar_url}>Profile</a>
              </div>
            </li>  
          ); 
        })}
        </ul>
    </>
  );
};

export default UseEffectFetchData;
