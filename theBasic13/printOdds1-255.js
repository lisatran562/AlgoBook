// Print all odd integers from 1 to 255.

function printOdds1To255() {
    for(let i = 0; i <= 255; i++) {
        if(i % 2 === 1) {
            console.log(i)
        }
    }
}

printOdds1To255()
