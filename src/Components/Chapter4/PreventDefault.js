import React, { useState } from "react";

export default function PreventDefault() {
  // const [fname, setfName] = useState("");
  // const [lname, setlName] = useState("");
  // const [mob, setMobile] = useState("");
  const [data, setData] = useState("data");

  const [obj, setObj] = useState({
    fname: "",
    gender: false,
    mob: "",
    // data:""
  });

  // const fNameHandler = (e) => {
  //   // setfName(e.target.value);
  //   setObj({...obj, fname:e.target.value})
  // };
  // const lNameHandler = (e) => {
  //   // setlName(e.target.value);
  //   setObj({...obj, lname:e.target.value})
  // };

  // const mobHandler = (e) => {
  //   // setMobile(e.target.value);
  //   setObj({...obj, mob:e.target.value})// dynamic key
  // };

  const inputChangeHandler = (e) => {
    // setObj({ ...obj, [e.target.name]: e.target.value });
    setObj((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const inputCheckHandler = (e) => {
    // setObj({ ...obj, [e.target.name]: e.target.checked });
    setObj((prevState) => {
      return { ...prevState, [e.target.name]: e.target.checked };
    });
  };

  const getData = (e) => {
    e.preventDefault();
    setData(obj.fname + "," + obj.lname + "," + obj.mob);
    // setObj(data:obj.fname)
    // console.log("Form Submitted");
  };
  return (
    <div>
      <form onSubmit={getData}>
        <input
          type="text"
          name="fname"
          placeholder="Enter FIRST NAME"
          // onChange={fNameHandler}
          onChange={inputChangeHandler}
        />
        <br />
        Gender:
        <input
          type="checkbox"
          name="gender"
          placeholder="Gender"
          // onChange={lNameHandler}
          onChange={inputCheckHandler}
        />
        <br />
        <input
          type="text"
          name="mob"
          placeholder="Enter MOBILE"
          // onChange={mobHandler}
          onChange={inputChangeHandler}
        />
        <br />
        <input type="submit" value="Submit" onChange={getData} />
      </form>
      {data}
      <br />
      {JSON.stringify(obj)}
    </div>
  );
}
