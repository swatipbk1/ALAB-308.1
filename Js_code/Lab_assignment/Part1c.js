/*Part1 Problem (c)-Accomplish the following arithmetic chain:
Subtract the first number from the second number.
Multiply the result by the third number.
Find the remainder of dividing the result by the fourth number.*/

let count = 1;
let diff = 0;

while (count < 5) {
    let n = prompt("enter the numbers to manipulate")
    if (count ===1) {
        diff = n;
    }
    else if (count === 2) {
        diff = diff - n;
    } else if (count == 3) {
        diff = diff * n;
    } else if (count === 4) {
        diff = diff % n;
    }
    count++;
   console.log(diff);
}
