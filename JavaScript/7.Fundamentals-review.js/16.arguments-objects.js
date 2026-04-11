function logArgs() {
  for (const arg of arguments) {
    console.log(arg);
  }
}

logArgs(1, 2, 3);
// result:
// 1
// 2
// 3

logArgs("example"); // "example"

//Access arugments at specific indexes:

function getArg() {
  return arguments[1];
}

console.log(getArg(2, 4, 6)); // 4

//Length works:

function getArgs() {
  return arguments.length;
}

console.log(getArgs("Example")); // 1
console.log(getArgs("Another", "Example")); // 2

//It is still not an array and does not accept array functions:

function hasCat() {
  return [...arguments].includes("cat");
}

console.log(hasCat("dog", "chicken", "cat")); // true
console.log(hasCat("dog", "chicken", "horse")); // false

//while the methods above are valid mordern use of synthax is more of the following:

function logArgs(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}

logArgs(1, 2, 3);
// result:
// 1
// 2
// 3

//you can set the arguments that you might have this way:

function exampleFunction(a, b, ...restOfArgs) {
  // some code here
}

function anotherFunction(x, y, ...theArgs) {
  // some code here
}

// Won't work

function badFunction(...args, ...moreArgs) {
  // some code here
}

//Cannot have a default value or else it will throw a Synthax error:

 function badFunction(...args = [1,2]){
  // some code here
}

//The difference between rest synthax and arg synthax


function hasCat(...args) {
  return args.includes("cat");
}

console.log(hasCat("dog", "chicken", "cat")); // true
console.log(hasCat("dog", "chicken", "horse")); // false




