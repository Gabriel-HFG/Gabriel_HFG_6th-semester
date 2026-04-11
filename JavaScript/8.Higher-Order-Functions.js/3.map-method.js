//first example of using map:

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubled); // [2, 4, 6, 8, 10]

//the map can accept 3 arguments: first: element

const numbers = [3, 4, 5, 6, 7].map((element) => {
  console.log("Element:", element);
  return element * 2;
});

//second index:

const numbers = [3, 4, 5, 6, 7].map((element, index) => {
  console.log("Element:", element);
  console.log("Index:", index);
  return element * 2;
});

//and where its being called from:

const numbers = [3, 4, 5, 6, 7].map((element, index, array) => {
  console.log("Element:", element);
  console.log("Index:", index);
  console.log("Array:", array);
  return element * 2;
});
