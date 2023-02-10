// Square each value in a given array, returning that same array with changed values.

function squareValues(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i]
    }
    return arr;
}

console.log(squareValues([2, 4, 6]))