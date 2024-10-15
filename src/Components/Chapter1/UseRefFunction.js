import React, { useEffect, useRef } from "react";

export default function useRefFunction() {
  const iElement = useRef(null);
  useEffect(() => {
    iElement.current.focus();
  });
  return (
    <div>
      <input text="text" />
      <hr></hr>
      <input text="text" ref={iElement} />
      <hr></hr>
      <button onClick={() => iElement.current.focus()}>Focus</button>
    </div>
  );
}