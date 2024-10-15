import React from "react";

 function DIsplayFlag(props) {
    console.log("DF rendered")
  return (
    <div className="App">
      <h2> Flag: {props.mflag.toString()}</h2></div>
  );
}

export default React.memo(DIsplayFlag)