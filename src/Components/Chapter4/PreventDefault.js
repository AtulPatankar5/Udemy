import React from 'react'

export default function PreventDefault() {
  const getData=(e)=>{
    e.preventDefault();
    console.log("Form Submitted");
  }
    return (
    <div>
      <form onSubmit={getData}>
        <input type="text" placeholder="Enter FIRST NAME"/><br/>
        <input type="text" placeholder="Enter LAST NAME"/><br/>
        <input type="text" placeholder="Enter MOBILE"/><br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}
