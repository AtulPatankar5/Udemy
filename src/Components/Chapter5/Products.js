import React, { useState } from "react";

export const Products = (props) => {
  const [items, setItems] = useState([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ]);

  const prodItem = items.map((item, i) => {
    return <li key={i}>{item.name}</li>;
  });

  return <>{props.admin && prodItem}</>;
  //   switch (props.admin) {
  //     case true:
  //       return prodItem;
  //       break;
  //     case false:
  //       return <h1>No Data found</h1>;
  //       break;
  //     default:
  //       return null;
  //   }
  //   return props.admin ? prodItem : <h1>No Data found</h1>;

  // if (props.admin) {
  //     return (
  //         <>
  //             {items.map((item, i) => {
  //                 return (
  //                     <li key={i}>{item.name}</li>
  //                 )
  //             })}
  //         </>
  //     )
  // } else {
  //     return (
  //         <h1>No Data found</h1>
  //     )
  // }
};
