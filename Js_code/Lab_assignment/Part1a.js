/*Part1 (a)-Check if all numbers are divisible by 5. Cache the result in a variable.*/
let a=prompt("Enter the numbers to check if it is a multiple of 5"); 
for(const i=1;i<=10;i++)
{
    if (a%5==0) {
        console.log(a + "is a multiple of 5: Enjoy!");
      }
      else {
          console.log(a + "is not a multiple of 5: Sorry");
      }
}
