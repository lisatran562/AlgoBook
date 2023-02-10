// Return the given array, after setting any negative values to zero.

function zeroOut(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            newArr.push(0);
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(zeroOut([3, -5, 4, -11, 43, -34]))