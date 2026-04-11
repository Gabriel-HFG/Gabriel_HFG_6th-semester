array.splice(startIndex, itemsToRemove, item1, item2)

/* startIndex specifies the index at which to begin modifying the array, while itemsToRemove is an optional parameter indicating how many elements to remove. If itemsToRemove is omitted, splice() will remove all elements from startIndex to the end of the array. The subsequent parameters (item1, item2, and so on) are the elements to be added to the array, beginning at the start index. */

// removing from the middle

let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let removed = fruits.splice(2, 2);

console.log(fruits);  // ["apple", "banana", "kiwi"]
console.log(removed); // ["orange", "mango"]

// inserting in the middle using splice

let colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "purple");

console.log(colors); // ["red", "yellow", "purple", "green", "blue"]

//inserting and removing elements

let numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 2, 6, 7, 8);

console.log(numbers); // [1, 6, 7, 8, 4, 5]

//safer way of using splice

let original = [1, 2, 3, 4, 5];
let copy = [...original];
copy.splice(2, 1, 6);

console.log(original); // [1, 2, 3, 4, 5]
console.log(copy);     // [1, 2, 6, 4, 5]

//removing items when you know their index

let fruits = ["apple", "banana", "orange", "mango"];
let indexToRemove = fruits.indexOf("orange");
if (indexToRemove !== -1) {
    fruits.splice(indexToRemove, 1);
}

console.log(fruits); // ["apple", "banana", "mango"]

//remove all elements

let array = [1, 2, 3, 4, 5];
array.splice(0);

console.log(array); // []

