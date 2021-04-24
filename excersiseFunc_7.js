/** Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments. */
function fortune(children, partner,location,job){
  return ("You will be a " + job + " in " + location + " , and married to " + partner + " with " + children + " kids." ) 
}
console.log(fortune(2, "Michael", "Belgrade", "biologist" ));


/**You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
*/
function calculateDogAge(Y) {
  return "Your doggie is " + Y * 7 + " years old in dog years!";
}
console.log(calculateDogAge(5));

/**3.Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
 */
function snack(age, supp) {
    var maxAge=80;
    return ( "You will need " + (maxAge-age)*365*supp +"gr of snack to last you until the ripe old age of " + maxAge )
}
console.log(snack(27, 100));



/**It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."  */

function celsiusToFahrenheit(temp){
  return 9/5 * temp +32;
}
console.log(celsiusToFahrenheit(10));

function fahrenheitToCelsius(temp){     //subtract 32 and multiply by . 5556 (or 5/9).
  return (temp-32)* 5/9
}
console.log(fahrenheitToCelsius(50));


