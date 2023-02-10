/* Write a function factorial(num)​ that, given a
number, returns the product (multiplication) of all
positive integers from 1 up to number (inclusive).
For example, factorial(3)​ = 6 (or 1 * 2 * 3);
factorial(5)​ = 120 (or 1 * 2 * 3 * 4 * 5).
*/

function factorial(num) {
    let product = 1;

    if(num < 0) {
        console.log('The number is negative')
    }

    for(let i = 1; i <= num; i++) {
        product *= i;
        console.log('The current number is: ' + i + ' and its factorial is: ' + product)
    }
}

factorial(3)
factorial(6)
factorial(-4)