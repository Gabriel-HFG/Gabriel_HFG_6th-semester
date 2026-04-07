/* An empty string (""), which splits the string into individual characters.
A single space (" "), which splits the string wherever spaces occur.
A dash ("-"), which splits the string at each dash. */

A single space (" "), which splits the string wherever spaces occur.

A dash ("-"), which splits the string at each dash.

let str = "hello";
let charArray = str.split("");
console.log(charArray); // ["h", "e", "l", "l", "o"]

//.reverse only works on arrays

let charArray = ["h", "e", "l", "l", "o"];
charArray.reverse();
console.log(charArray); // ["o", "l", "l", "e", "h"]

//.join() you only need to specify what will go inbetween values inside the parameter

let reversedArray = ["o", "l", "l", "e", "h"];
let reversedString = reversedArray.join("");
console.log(reversedString); // "olleh"

// all in one

let str = "coding";
let reversed = str.split("").reverse().join("");
console.log(reversed);
