import React from "react";
import { useState } from "react";

const User = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h4>Contact : {contact} </h4>
      <h2>Count = {count}</h2>
      <h2>Count2 = {count2}</h2>
      <button
        onClick={() => {
          data = count + 1;
          setCount(data);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default User;
