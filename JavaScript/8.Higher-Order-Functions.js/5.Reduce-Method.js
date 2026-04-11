//turn an array into a single value:

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // 15

//If you use dont provide an acumulator value then the first number of the index will become the first value
