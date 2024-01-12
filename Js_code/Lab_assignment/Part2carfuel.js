/*You are planning a cross-country road trip!
The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon. */

/*user need to input the miles and speed case by case to find the ouput*/

console.log("enter the miles");

 let m= prompt("enter the miles");
let s=prompt("enter the speed");
      let gallon = 1500 / m;
      let price = gallon * 3;
      let time = 1500 / s;
      console.log("Total gas used is =" + gallon + "gallons");
      console.log("Net price is =" + price + "$");
      console.log("time taken to reach is =" + time + "hrs");