// Create an array with all the odd integers between 1 and 255 (inclusive).

function arrWithOdds() {
    let arr = [];

    for(let i = 1; i <= 255; i+=2) {
        arr.push(i)
    }
    return arr;
}

console.log(arrWithOdds())