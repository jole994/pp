/** Create several variables using different letter cases and beginning characters. Check if they
still exist if you refer to them in different case - does case matter here? Try to declare a variable
starting with number as the first character. */
var jovana=3;
var JoVana=4;
var JOVANA=5;
console.log(JoVana);

/**Save a string (text) describing your current mood in a variable and print it out in console. */
var mood='Sleepy';
console.log(mood);
console.log(typeof(mood));

/**Play around in the console: add, subtract, multiply and divide some numbers. Use numbers
stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3.
Why do we get these results? */
var a=1.5;
var b=4;
var c=0.5;
console.log(a*b/c);
console.log(a-b-c);
console.log(a+b/c);

/**How many grams weight 1.2kg of bananas? */
var banasKg=1.2;
console.log('1.2kg bananas weight '+ banasKg*1000 +"g");

/**How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What
about Tom who is being late half an hour? It is hard to be on time these days… */
var ANA=5;
var TOM=30;
console.log('Ana is late ' +ANA*60+ ' seconds' + " and Tom is late "+TOM*60+' seconds');

/**How many MB of additional memory we have if we buy a 4GB USB stick? How many news
articles each in size 98KB can fit in it? */
var USB=4;
var USBinMB=USB*1024;
var articles=98;
console.log(USBinMB/(98/1024));

/**Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7? */
var a=2
console.log(a*=2);
var b=1;
console.log(b+=3);
var c=10;
console.log(c/=5);
var d=7;
console.log(d-=7);

/**Create the following variables:
- a variable containing your name,
- a variable containing your age,
- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types. */
var name="Jovana";
var age=27;
var cat= true;
console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(cat));

/**Check which type are these values:
- “number”
- true
- null
- “false”
- 56 */
var a= 'number' ;
var b=true  ;
var c=null ;
var d='false' ;
var e=56 ;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));

/**Check how good you are at guessing the Boolean equivalent of different values using the
console. Do you remember how to check for a Boolean equivalent of a value?*/
var a= 'number' ;
var b=true  ;
var c=null ;
var d='false' ;
var e=56 ;
console.log(!!a);
console.log(!!b);
console.log(!!c);
console.log(!!d);
console.log(!!e);

/**Use the console to check the results you think should go in the following table:

p q p &amp;&amp; q p || q
true true
true false
false true
false false */
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

/**If the variable age stores the information about user’s age, how we can check whether it
contains a correct value? Write expressions for checking:
● Is age negative value
● Is age greater than 120 */
var age=20;
console.log(age>0  && age<120);

/**Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
we store the current speed value in the variable speed. Write an expression which will check if
we are driving drive safely or not? (true if we are driving safe and false if not) */
var speed=100;
console.log(speed>60 && speed<120);