/* Implement generateCoinChange(cents)​ that accepts a parameter for the number of cents, and
computes how to represent that amount with the smallest number of coins. Console.log the result.
*/

function generateCoinChange(cents) {
    const coins = [25, 10, 5, 1]; // create an array coins with all possible coins
    let change = []; // create an array that will hold the possible coins

    for (let i = 0; i < coins.length; i++) { // loop through all the possible coins
        while (cents >= coins[i]) { // while the cents is greater or equal each coin
            change.push(coins[i]); // push that coin into the change array
            cents -= coins[i]; // subtract the amount of the coin from the cents value
            // console.log(cents, change)
        }
    }

    console.log(change); // print the all the coins that make up the cents value
}
generateCoinChange(77)
