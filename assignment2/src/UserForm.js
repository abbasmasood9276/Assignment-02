// src/UserForm.js
import React, { useState } from 'react';

const UserForm = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ name, age, email });
  };

  const handleReset = () => {
    setName('');
    setAge('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Age: </label>
        <input type="number" value={age} onChange={handleAgeChange} />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default UserForm;
