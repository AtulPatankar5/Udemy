import React, { useEffect, useState } from "react";

export default function ShowXY() {
  const [strXY, setStrXY] = useState("0,0");

  const displayXY = (e) => {
    let str = e.pageX + "," + e.pageY;
    setStrXY(str);
    console.log(str)
  };

  useEffect(() => {
    window.addEventListener("mousemove", displayXY); // it acts as component did mount
    return () => {
      // this return acts are component did unmount
      window.removeEventListener("mousemove", displayXY);
    };
  });

  return (
    <div>
      <h1>{strXY}</h1>
    </div>
  );
}
