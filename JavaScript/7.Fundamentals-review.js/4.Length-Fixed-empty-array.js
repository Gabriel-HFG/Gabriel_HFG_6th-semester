//length

const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.length); // 3

//empty spaces in an array:

const sparseArray = [1, , , 4];
console.log(sparseArray.length); // 4

//fixed length array:

const emptyArray = new Array(5);
console.log(emptyArray.length); // 5
console.log(emptyArray); // [ , , , , ]

//another way to get fixed length array:

const fixedLengthArray = Array.from({ length: 5 });
console.log(fixedLengthArray.length); // 5
console.log(fixedLengthArray); // [undefined, undefined, undefined, undefined, undefined]

//creating a array with default value

const filledArray = new Array(3).fill(0);
console.log(filledArray); // [0, 0, 0]


