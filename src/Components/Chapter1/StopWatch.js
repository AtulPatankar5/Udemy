import React, { useEffect, useState } from "react";

export default function FunctionUseEffect() {
  const [cTime, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {// acts as component did update
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
  });
  return (
    <div>
      <h1>{cTime}</h1>
    </div>
  );
}
