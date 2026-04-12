function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  let range = [];
  let sortedArr = arr.sort((a, b) => a - b)
  for (let i=sortedArr[0]; i < sortedArr[1] + 1; i++) {
    range.push(i);
  }
  let starter = lcm(range[0], range[1]);
  for (let j = 2; j < range.length;j++) {
    starter = lcm(starter, range[j]);
  }
  return starter
}

console.log(smallestCommons([23, 18]))
