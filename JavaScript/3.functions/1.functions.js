function greetings(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greetings(); // Hello, Guest!
greetings("Anna"); // Hello, Anna!

//Ananymouse function

const sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(3, 4)); // 7

//other way to assign an ananymouse function

const greetings = (name) => {
  console.log("Hello, " + name + "!");
};

//insanely simple function

const calculateArea = (width, height) => width * height;
