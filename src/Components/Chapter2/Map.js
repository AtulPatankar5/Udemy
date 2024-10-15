let arr = [6, 2, 3, 4, 5];
let result = arr.map(ele => ele * ele);

console.log(result);

let arr2 = ["Atul", "Santosh", "Patankar"];
let lengthArr = arr2.map(elem => elem.length);
let arrLength = arr2.length;
console.log(lengthArr);
console.log(arrLength);

let arr3 = [144, 25, 36, 196];
let result3 = arr3.map(ele => Math.sqrt(ele));
console.log(result3);

let prodName = [
  { pCode: 1001, pName: "Apple" },
  { pCode: 1002, pName: "JackFruits" },
  { pCode: 1003, pName: "Watermelon" },
  { pCode: 1004, pName: "Banana" },
];

let pName=prodName.map(ele=>ele.pName);
console.log(pName)