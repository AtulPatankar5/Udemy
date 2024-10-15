import React from "react";

function ChangeState(props) {
  console.log("CS rendered");
  const btnStyle = {
    height: "50px",
    width: "150px",
    margin: "5px",
  };
  return (
    <div className="App">
      <button style={btnStyle} onClick={props.click}>
        {props.caption}
      </button>
    </div>
  );
}

export default React.memo(ChangeState);
