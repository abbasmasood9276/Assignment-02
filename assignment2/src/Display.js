// src/Display.js
import React from 'react';

const Display = ({ userData }) => {
  return (
    <div>
      <h2>User Data</h2>
      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default Display;
