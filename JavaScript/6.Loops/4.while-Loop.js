while (condition) {
  // code block to be executed
}

//another way to write it: this one will run the block of code once before checking the condition

do {
  // code block to be executed
} while (condition);

//simple example:

let counter = 0;
while(counter < 5) {
  console.log(counter);
  counter++;
}
