/* Traditional clocks are increasingly uncommon, but most can still read rotating hands of hours, minutes,
and seconds.
Create function clockHandAngles(seconds)​ that, given the number of seconds since 12:00:00, will
print the angles (in degrees) of the hour, minute and second hands. As a quick review, there are 360
degrees in a full arc rotation. Treat “straight-up” 12:00:00 as 0 degrees for all hands.
*/

function clockHandAngles(seconds) {
    for(let i = 1; i <= seconds; i++) {
        while(seconds > 60) {
            let remainder = 0;
            seconds -= 60
            remainder = seconds - remainder;
            return remainder * 6;
        }
        return seconds * 6;
    }
}
console.log(clockHandAngles(15))
console.log(clockHandAngles(75))
console.log(clockHandAngles(30))
console.log(clockHandAngles(60))
console.log(clockHandAngles(61))