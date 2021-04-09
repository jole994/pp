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

