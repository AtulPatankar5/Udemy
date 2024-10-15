import React, { useState } from 'react'

export default function SyntheticEvent() {
  const [name, setName] = useState('Default');
  const getData = (e) => {
    setName(e.target.value)
    console.log(e.target.value);
    // console.log(e.target.innerHTML);
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={getData}>GetData</button>
      <input onChange={getData} type='text' />
    </div>
  )
}
