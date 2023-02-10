/* Implement a function sumToOne(num)​ that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result.
*/

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// total: required
// currentValue: required
// currentIndex: optional
// arr: optional

function sumToOne(num) {
    if (num < 10) return num;

    return sumToOne(num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0));

}

console.log(sumToOne(43998)) // 6