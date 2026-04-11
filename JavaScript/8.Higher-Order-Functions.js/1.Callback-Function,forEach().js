let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number * 2);
});

//Other way to write it:

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number * 2));

/*
2
4
6
8
10
*/

//How it works more expanded:

let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index, array) => {
  console.log(`Element ${number} is at index ${index} in array ${array}`);
});
