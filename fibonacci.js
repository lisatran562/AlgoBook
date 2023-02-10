/* Implement the Fibonacci function, a famous mathematical equation that generates a numerical
sequence such that each number is the sum of the previous two. The Fibonacci numbers at index 0
and 1, coincidentally, have values of 0 and 1. Your function should accept an argument of which
Fibonacci number.
Examples: fibonacci(2)​ = 1, fibonacci(3)​ = 2, fibonacci(4)​ = 3, fibonacci(5)​ = 5, etc.
*/

function fibonacci(index) {
    if (index === 0) {
        console.log(`The number at index 0 is 0.`);
        return 0;
    }
    if (index === 1) {
        console.log(`The number at index 1 is 1.`);
        return 1;
    }
    console.log(`Calculating fibonacci(${index - 1}) + fibonacci(${index - 2}).`);
    const result = fibonacci(index - 1) + fibonacci(index - 2);
    console.log(`The number at index ${index} is ${result}.`);
    return result;
}

console.log(fibonacci(5))
// console.log(fibonacci(12))