import React from "react";

export default function Person(props) {
  const { name, age } = props; // destructuring of data
  return (
    <div className="per">
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
}
