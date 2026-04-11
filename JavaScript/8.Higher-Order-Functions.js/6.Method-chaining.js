//example of chaining:

const result = "  Hello, World!  "
  .trim()
  .toLowerCase()
  .replace("world", "JavaScript");

console.log(result); // "hello, JavaScript!"

//Chaining using filer, map and reduce:

const transactions = [
  { amount: 100, type: "credit" },
  { amount: 20, type: "cash" },
  { amount: 150, type: "credit" },
  { amount: 50, type: "cash" },
  { amount: 75, type: "credit" }
];

const totalCreditWithBonus = transactions
  .filter((transaction) => transaction.type === "credit")
  .map((transaction) => transaction.amount * 1.1)
  .reduce((sum, amount) => sum + amount, 0);

console.log(totalCreditWithBonus); // 357.5

//another chaining example:


let obj = {
    value: 1,
    increment: function() {
        this.value++;
        return this;
    },
    double: function() {
        this.value *= 2;
        return this;
    },
    getValue: function() {
        return this.value;
    }
};

let result = obj.increment().double().increment().getValue();
console.log(result);


