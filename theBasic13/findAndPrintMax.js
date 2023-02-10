// Given an array, find and print its largest element.

function findAndPrintMax(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }return max
}

console.log(findAndPrintMax([4, 56, 32, 78, 63]))
console.log(findAndPrintMax([14, 526, 232, 678, 363]))