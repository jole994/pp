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

/*5.Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:*/

var a=10;
var s="";
function square(){
    for(i=1; i<=a; i++){            //for rows
                                    console.log("row number: "+ i)  //check iteration
        if(i===1 || i===a){         //if first row or last one
            for(j=1; j<=a; j++) {   //from first to last column
                s=s+ "*";
            }
            s=s+ "\n";
        }else{                      //rows between first and last one
            for(k=1; k<=a; k++){    //from first to last column
                if(k===1 || k===a){ //first/last of columns
                    s=s+"*";
                }else{              //inside columns
                    s=s+" ";
                }
            
            }
            s=s+"\n";               //new line
        }
                                    console.log("output:" + s);   // check output
    }
    return s;
}

console.log(square(a,s));



/*6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:*/

var a=3;
var b=5;
var c=7;
function starChartTriple (a,b,c) {
    var horizontal="";

        for (i=1; i<=a; i++){
            horizontal+=" *"
        }
        horizontal=horizontal + "\n"
                      
        for (j=1; j<=b; j++){
            horizontal+=" *"
        }
        horizontal=horizontal + "\n"
                        
        for (i=1; i<=c; i++){
            horizontal=horizontal+ " *"
        }
        
    return horizontal;
}
console.log(starChartTriple(a,b,c))



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



/*10.Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.*/
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



/*11.Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc.*/
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













