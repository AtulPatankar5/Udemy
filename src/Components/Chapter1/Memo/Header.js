import React from "react";

function Header() {
  console.log("Header Rendered");
  const headStyle = {
    border: "2px solid black",
    width: "100%",
    color: "Blue",
  };
  return (
    <div>
      <h4 style={headStyle}> Header Section</h4>
    </div>
  );
}


export default React.memo(Header);