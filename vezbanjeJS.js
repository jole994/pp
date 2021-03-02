/*Save a string (text) describing your current mood in a variable and print it out in console.*/
var op='pospano'
console.log(op);

/*5. How many grams weight 1.2kg of bananas?*/
var bananasKG= 1.2;
var bananasGR= bananasKG*1000;
console.log(bananasGR);

//How many MB of additional memory we have if we buy a 4GB USB stick? How many news
//articles each in size 98KB can fit in it?
var memGB=4;
var articlesKB=98;
console.log('Staje na USB'+ (memGB*1024)/(articlesKB/1024));

/*Create the following variables:
- a variable containing your name,
- a variable containing your age,
- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.*/
var name="Jovana";
var age=27;
var cat= true;
console.log(name, age, cat);
console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(cat));

/*Check how good you are at guessing the Boolean equivalent of different values using the
console. Do you remember how to check for a Boolean equivalent of a value?*/
var name="Jovana";
console.log(!!name);

var a=0;
console.log(!!a);

/*If the variable age stores the information about user’s age, how we can check whether it
contains a correct value? Write expressions for checking:
● Is age negative value
● Is age greater than 120*/

var age=27;
console.log (age<0);
console.log(age>120);

// 1

var name = "Nikola";
var age = 30;
var nickname = "Drcke";
//var 4place = 'Centar';

//console.log(4place);

// 4

var a = 15;
var b = 3;
var c = 5;
var d = 10;

var result = a - b - c;
console.log(result);

result = (a * b * c) / d;
console.log(result);

result = a / b - c * d;
console.log(result);

// 6
var min = 5;
var sec = 60;
var late = min * sec;
console.log(`Anna late ${late} seconds`);
console.log("Anna late" + late + "seconds");

min = 30;
late = min * sec;
console.log(`Tom late ${late} seconds`);

// 9

a *= 2;
b += 3;
c /= 5;
d -= 7;
console.log(a, b, c, d);

//11

console.log(typeof "number");
console.log(typeof true);
console.log(typeof null);
console.log(typeof "false");
console.log(typeof 56);

// 13

var p = true;
var q = true;
console.log(p && q, p || q);
p = true;
q = false;
console.log(p && q, p || q);
p = false;
q = true;
console.log(p && q, p || q);
p = false;
q = false;
console.log(p && q, p || q);

//15

var speed = 100;

console.log(speed > 60 && speed < 120);

