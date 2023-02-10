// Print integers from 0 to 255, and with each integer print the sum so far

function printSum0to255() {
    let sum = 0;
    for(let i = 0; i <= 255; i++) {
        sum += i;
        console.log("The current integer is: " + i, " the current sum is: " + sum )
    }
}

printSum0to255()