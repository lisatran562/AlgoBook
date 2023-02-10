/* Given an array, move all values forward by one index, dropping the first and leaving a '0'​ value at the
end */

function shiftArrValues(arr) {
    arr.push(0);
    arr.shift();
    return arr;
}

console.log(shiftArrValues([1, 2, 3, 4]))


