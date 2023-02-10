// Given an array, print the max, min and average values for that array.

function maxMinAvg(arr) {
    let min = arr[0];
    let max = arr[0];
    let sum  = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
        if(arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }
    console.log('The min is: ' + min + ' and the max is: ' + max)
    console.log('The average is: ' + (sum / arr.length))
}

maxMinAvg([4,7,34])