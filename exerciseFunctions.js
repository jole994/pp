//example
function sum () {
    var sum=0;
    for (var i =0; i<arguments.length; i++){
        sum+=arguments[i];
    }
    return sum;
}
var result = sum(1, 2, 3)
console.log (result);

//1.Write a program that calculates the maximum of two given numbers.
function max(a, b) {
    if (a >b) {
        return a;
    }else if (b>a){
        return b;
    }else{
        return "numbers are equal!"
    }
}
var result=max(10, 4);
console.log(result);

//2. Write a program that checks if a given number is odd.
function odd(a) {
    if (a % 2 !== 0) {
        return "number is odd!";
    }else{
        return "number is even!";
    }
}
var result=odd(8);
console.log(result);

//3. Write a program that checks if a given number is a three digit long number.
function threeDig (num) {
    if (num-999<=0 && num-999>=-899){
            return "it IS three digit number";
    }else{
        return "it is NOT three digit number";
    }
}
console.log(threeDig(100));

//4. Write a program that calculates an arithmetic mean of four numbers.
function aritmMean() {
    var sum=0;
    for (var i =0; i<arguments.length; i++){
        sum+=arguments[i];
    }
    return sum/arguments.length;
}
var result=aritmMean(2,4,6,8)
console.log(result);

//7.Write a program that calculates a number of digits of a given number.

function numDig(a) {
    var string=a + "";
    return string.length;
}
console.log (numDig(7825259));

//8. Write a program that calculates a number of appearances of a given number in a given array.
var e = 7;
var a = [2, 4, 7, 8, 7, 7, 1];

function numOfAppearances () {
    var k=0;
    for (i=0; i < a.length; i++){
        if (e === a[i]) {
            k = k + 1;
        }
    }
    return k;
}
console.log(numOfAppearances(e,a))

//9.Write a program that calculates the sum of odd elements of a given array.
var array = [1, 2, 3, 4, 5, 6]
var sum = 0

function sumOfOddElements () {
    
    for (i=0;i<array.length; i = i+2) {
        sum = sum + array[i]
    }
    return sum;
}
console.log(sumOfOddElements(array))

//Write a program that calculates the number of appearances of a letter a in a given string.
//Modify the program so it calculates the number of both letters a and A.
var string = 'Aleksandrija';  
var letter1 = 'a'
var letter2 = 'A'

function numOfAppearances () {
    var num = 0;
    for (i=0; i <string.length; i++) {
       if (letter1 === string[i] || letter2 === string[i]) {
            num = num + string[i];
       }
    }
    return num;    

}      
console.log(numOfAppearances(string));

//Write a program that concatenates a given string given number of times. For example, if
//“abc” and 4 are given values, the program prints out abcabcabcabc.
var string = 'abc';
var conc = '';
var num = 4;

function numberOfTimes() {
    for (i =0; i < num; i++) {
        conc = conc + string;
    }
    return conc;
}
console.log(numberOfTimes(conc, string))













