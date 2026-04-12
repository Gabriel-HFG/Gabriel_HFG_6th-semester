function isPrime(num) { if (num <= 1) return false;
for (let i = 2; i < num; i++) { if (num % i === 0) { return false; } } return true; }

function sumPrimes(num) { let sum = 0;
for (let i = 1; i <= num; i++)
{ if (isPrime(i)) { sum += i; } } return sum }
