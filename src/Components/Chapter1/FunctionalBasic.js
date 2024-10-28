import React, { useEffect, useState } from "react";

function initialState() {
  console.log("expensive Function" + Date.now());
  return 0;
}

let GlobCounter = 0;
export default function FunctionalBasic() {
  // const [count, setCount] = useState(() => initialState()); // initial state is used as lazy initialization and it is used only when the page is rendered once. For every click it won't work
  // const [flag,setFlag]=useState(true);
  const [obj, setObj] = useState({
    count: 0,
    flag: true,
  });
  // const addValue=()=>{
  //   setCount(count+1);
  //   console.log(count);
  // }
  const operation = (op) => {
    let tempCounter = obj.count;
    if (op === "+") {
      tempCounter++;
    } else {
      tempCounter--;
    }
    setObj({ ...obj, count: tempCounter });
  };
  const btnStyle = {
    width: "200px",
    height: "100px",
    color: "purple",
    fontSize: "25px",
    margin: "10px",
    padding: "10px",
  };

  let add = "4" + 9;
  // let msg=<h1>Hi {add}</h1>

  let msg = React.createElement("h1", { style: { color: "blue" } }, "Hello");

  useEffect(() => {
    console.log("Effect :" + GlobCounter++)
  }, [obj.count])// this obj.count means useEffect will be triggered  only when count state is changed and not with any other state 
  return (
    <div>
      <h1>{obj.count}</h1>
      {/* <button onClick={()=>setCount(i+1)}> Increment</button> */}
      {/* <button onClick={()=>setCount(i-1)}> Decrement</button> */}
      <button onClick={() => operation("+")} className="customButton">
        Increment
      </button>
      <button onClick={() => operation("-")} style={btnStyle}>
        Decrement
      </button>

      <h2>{msg}</h2>
      <h2>{obj.flag.toString()}</h2>
      <h2>{JSON.stringify(obj)}</h2>
      <button onClick={() => setObj({ ...obj, flag: !obj.flag })}>
        Toggle Flag {obj.flag.toString()}      
        </button>
    </div>
  );
}
