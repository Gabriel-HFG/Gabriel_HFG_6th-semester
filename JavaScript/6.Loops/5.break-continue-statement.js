for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

//exists when i === 5

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
} //skips the rest of the code and starts the loop over again

//Example of using with nested loops

outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop;
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}

/*Output:
"i: 0, j: 0"
"i: 0, j: 1"
"i: 0, j: 2"
"i: 1, j: 0" */
