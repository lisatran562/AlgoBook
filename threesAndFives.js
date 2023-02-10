/* Create function ThreesFives()​ that adds each value from 100 and 4000000 (inclusive) if that value
is evenly divisible by 3 or 5 but not both. Display the final sum in the console
*/

function threesAndFives() {
    let sum = 0;

    for(let i = 100; i < 4000001; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
            // console.log('The current number divisible by 3 or 5 is: ' + i + ' and the current sum is: ' + sum)
        }
    }
    return sum;
}

console.log(threesAndFives())

/* ​ Change your function to make a BetterThreesFives(start,end)​where start and end
values are customizable. You can think of the above ThreesFives()​ function as
BetterThreesFives(100,4000000)​.
*/

function betterThreesFives(start, end) {
    let sum = 0;

    for(let i = start; i < end+1; i++){
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
            // console.log('The current number divisible by 3 or 5 is: ' + i + ' and the current sum is: ' + sum)
        }
    }
    return sum;
}

console.log(betterThreesFives(0, 100))
