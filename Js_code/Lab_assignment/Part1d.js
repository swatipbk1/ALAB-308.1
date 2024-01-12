/*Part 1 problem(d)-- Change the way that isOver25 calculates*/
 
let count = 1;
const m = new Boolean(false);
let n = prompt("enter any number!")
if (n <= 25) {
    m = true;
    console.log(m);
    console.log(n + "is less than 25");
} else {
    console.log(m);
    console.log(n + "is greater than 25");
}

   