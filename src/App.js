import logo from "./logo.svg";
import "./App.css";
import Person from "./Components/Chapter1/Person";
import React, { useState } from "react";
import FunctionalBasic from "./Components/Chapter1/FunctionalBasic";
import ClassComponents from "./Components/Chapter1/ClassComponents";
import FunctionUseEffect from "./Components/Chapter1/StopWatch";
import ShowXY from "./Components/Chapter1/ShowXY";
import ClassRef from "./Components/Chapter1/ClassRef";
import UseRefFunction from "./Components/Chapter1/UseRefFunction";
import Memo from "./Components/Chapter1/Memo/Memo";
import Fruits from "./Components/Chapter2/Fruits";
import DemoComponents from "./Components/Chapter3/DemoComponents";
import PreventDefault from "./Components/Chapter4/PreventDefault";
import UserForm from "./Components/Chapter4/UserForm";
import Conditionalrendering from "./Components/Chapter5/Conditionalrendering";

function App() {
  const [showData, changeState] = useState(true);
  const Student = { id: 1, SName: "Atul" };

  return (
    <div className="App">
      {/* <FunctionalBasic /> */}
      {/* <Person name="Alan" age="23" />
      <Person name="Walker" age="35" />
      <Person name="Justin" age="40" />
      <Person name="Enrikie" age="40" /> 
      <Person name="Selena" age="40" />*/}
      {/* <ClassComponents/> */}
      {/* <FunctionUseEffect/> */}

      {/* {showData ? <ShowXY /> : <h1>No Data</h1>}
      <button onClick={()=>changeState(!showData)}>Toggle </button> */}
      {/* <ClassRef/> */}
      {/* <UseRefFunction/> */}
      {/* <Memo/> */}
      {/* <Fruits /> */}
      {/* <DemoComponents value={false} value2={new Date().getFullYear()}/> */}
      {/* <DemoComponents {...Student} /> */}
      {/* <DemoComponents value={5}>Hello</DemoComponents> */}
       {/* <SyntheticEvent/> */}
       {/* <PreventDefault/> */}
       {/* <UserForm/> */}
        <Conditionalrendering/>
    </div>
  );
}

export default App;
