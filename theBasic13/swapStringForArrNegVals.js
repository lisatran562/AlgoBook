// Replace any negative array values with 'Dojo'​.

function swapString(arr) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            newArr.push('Dojo')
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(swapString([3, 4, -3, 9, -4]))