/* Implement a ‘die’ that randomly returns an
integer between 1 and 6 inclusive. Roll a pair of
these dice, tracking the statistics until doubles
are rolled. Display the number of rolls, min, max,
and average.
*/

function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    let rolls = []
    let numRolls = 0;
    while (true) {
        let die1 = rollDie();
        let die2 = rollDie();
        numRolls++
        rolls.push([die1, die2])

        console.log(`Roll number: ${numRolls}`);
        console.log(`Roll: ${rolls[rolls.length - 1]}`)
        console.log(`Min: ${Math.min(die1, die2)}`)
        console.log(`Max: ${Math.max(die1, die2)}`)
        console.log(`Avg: ${(die1 + die2) / 2}`)
        if (die1 === die2) {
            break;
        }
    }
    return rolls;
}

rollDice();
