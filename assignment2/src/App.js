// src/App.js
import React, { useState } from 'react';
import './App.css';
import UserForm from './UserForm';
import Display from './Display';

function App() {
  const [userData, setUserData] = useState({ name: '', age: '', email: '' });

  const handleFormSubmit = (data) => {
    setUserData(data);
  };

  return (
    <div className="App">
      <h1>User Information Form</h1>
      <UserForm onSubmit={handleFormSubmit} />
      <Display userData={userData} />
    </div>
  );
}

export default App;
