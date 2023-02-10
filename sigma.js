/* Implement a function sigma(num)​ that, given a
number, returns the sum of all positive integers
from 1 up to number (inclusive). Ex.: sigma(3)
= 6 (or 1+2+3); sigma(5)​ = 15 (or 1+2+3+4+5).
*/

function sigma(num) {
    let sum = 0;
    if(num < 0) {
        console.log('Number is negative')
    }
    
    for(let i = 1; i <= num; i++) {
        sum += i
        console.log('The current number is: ' + i + ' and the current sum is: ' + sum)
    }
    return sum;
}

sigma(5)
sigma(10)
sigma(-4)