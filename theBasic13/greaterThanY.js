// Given an array and a value Y, count and print the number of array values greater than Y.

function greaterThanY(arr, value) {
    let count = 0;

    let numsGreater = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > value) {
            count++
            numsGreater.push(arr[i]);
        }
    }
    console.log('The amount of values greater than Y are: ' + count, 'and the numbers greater are: ' + numsGreater)
    return numsGreater
}

greaterThanY([1, 3, 5], 1)
greaterThanY([11, 33, 53], 3)