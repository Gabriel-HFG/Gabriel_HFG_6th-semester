function sumFibs(number) {
  let fib = [0,1];
  console.log(fib);
  for (let i = 2; (fib[i-2] + fib[i-1]) <= number; i++) {
    fib.splice(i,0,(fib[i-2] + fib[i-1]))
  }
  let sum = 0;
  for (let num of fib) {
    if (num %2 !== 0) {
      sum += num
    }
  }
  return sum
}
