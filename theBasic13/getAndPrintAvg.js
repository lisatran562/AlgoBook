// Analyze an array’s values and print the average.

function printAvg(arr) {
    let sum = 0; 

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum / arr.length)
}

printAvg([1, 5, 9, 34])