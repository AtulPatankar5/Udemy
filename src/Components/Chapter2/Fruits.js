import React, { useState } from "react";
import ListItem from "./ListItem";

export default function Fruits() {
  let products = ["Apple", "JackFruits", "Watermelon", "Banana"];
  let fruitList = [
    { id: 1, pName: "Apple" },
    { id: 2, pName: "JackFruits" },
    { id: 3, pName: "Watermelon" },
    { id: 4, pName: "Banana" },
  ];
  let [prod, setProd] = useState(products);
  let [fruit, setFruit] = useState(fruitList);
  return (
    <div>
      {prod.map((ele, i) => {
        return (
          <li key={i.toString()}>{ele}</li>
        )
      })}

      <hr />
      
      {fruit.map((ele) => {
        return (
          <ListItem key={ele.id.toString()} fruitName={ele.pName} />
          // <li key={ele.id.toString()}>{ele.pName}</li>
        )
      })}
    </div>
  );
}
