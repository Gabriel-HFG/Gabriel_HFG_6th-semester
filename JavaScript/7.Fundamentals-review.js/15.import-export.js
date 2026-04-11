//in one file you have:

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

const PI = 3.14159;
export { PI };

//in the other you acess by:

import { add, subtract, PI } from './math.js';

console.log(add(5, 3));        // Outputs: 8
console.log(subtract(10, 4));  // Outputs: 6
console.log(PI);               // Outputs: 3.14159

//if you want to import everything:

import * as Math from './math.js';

console.log(Math.add(5, 3));        // Outputs: 8
console.log(Math.subtract(10, 4));  // Outputs: 6
console.log(Math.PI);               // Outputs: 3.14159


//here is how that all looks like:

// In math.js
export default function multiply(a, b) {
    return a * b;
}

// In app.js
import multiply from './math.js';

console.log(multiply(4, 5));  // Outputs: 20
