import React from "react";

function DisplayCounter(props) {
  console.log("DC rendered");
  return (
    <div className="App">
      <h2>Counter: {props.counter}</h2>
    </div>
  );
}
export default React.memo(DisplayCounter);
