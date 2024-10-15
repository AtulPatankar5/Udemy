import React from "react";

function Footer() {
  console.log("Footer logs")
    const footStyle = {
    border: "1px dotted grey",
    width: "100%",
    color: "grey",
  };
  return (
    <div>
      <h4 style={footStyle}>Footer Section</h4>
    </div>
  );
}
export default React.memo(Footer);// Prevent render of whole page when only 1 component is changed
