///PRE-DEFINED FUNCTIONS 
var c=parseInt(undefined);
console.log(c);
console.log(typeof (c));

d=isNaN(c);
console.log(d);
console.log(typeof (d));

var f=isFinite(1);
console.log(f);
console.log(typeof (f));
///



/* 1. Write a function to check whether the `input` is a string or not.
&quot;My random string&quot; -&gt; true
12 -&gt; false*/

function String(a){
    var a;
    var check=false;
    if(typeof(a)==="string"){
        return true;
    }
    return false;
}
console.log(String('2'));



/* 2. Write a function to check whether a string is blank or not.
&quot;My random string&quot; -&gt; false
&quot; &quot; -&gt; true
12 -&gt; false
false -&gt; false */

var stringCheck ="My random string"

function blank(string) {
    var countSpace = 0;
    var countChar = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            countSpace ++;
        }
        else {
            countChar ++;
        }
    }
    if (countSpace !== 0 && countChar === 0) {
        return true
    }
    else {
        return false
    }
} 

console.log(blank(stringCheck));


/*Write a function that concatenates a given string n times (default is 1).
&quot;Ha&quot; -&gt; &quot;Ha&quot;
&quot;Ha&quot;, 3 -&gt; &quot;HaHaHa&quot; */

function conc(what, times){
    var what;
    var times;
    var string="";
    for (i=1; i<=times; i++){
        string=string + what;
    }
    return string;
}
console.log(conc('ha',3));

/*Write a function to count the number of letter occurrences in a string.
&quot;My random string&quot;, &quot;n&quot; -&gt; 2  */

function Occ(string,letter){
    var string;
    var letter;
    var num=0;
    for(i=0; i<string.length; i++){
        if(letter===string[i]){
            num++;
        }
    }
    return num;
}
console.log(Occ('Jovana Obradovic', 'o'))

/* Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1.  */

function Occ(string,letter){
    var string;
    var letter;
    var position=-1;
    var char=false;
    for(i=0; i<string.length; i++){
        if(letter===string[i] && char!==true){
            char=true;
            position=i;
        }
    }
    return position;
}
console.log(Occ('Jovana Obradovic', 'k'))

/* Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1. */
function Occ(string,letter){
    var string;
    var letter;
    var position=-1;
    for(i=0; i<string.length; i++){
        if(letter===string[i]){
            position=i;
        }
    }
    return position;
}
console.log(Occ('Jovana Obradovic', 'a'))

/* Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
&quot;My random string&quot; -&gt; [&quot;M&quot;, &quot;y&quot;, null, &quot;r&quot;, &quot;a&quot;]
&quot;Random&quot; -&gt; [&quot;R&quot;, &quot;a&quot;, &quot;n&quot;, &quot;d&quot;, &quot;o&quot;, &quot;m&quot;] */
 function strToArr(string){
     var string;
     var arr=[];
     for(i=0; i<string.length; i++){
         if(string[i]==" "){
             arr[i]=null;
         }else{
             arr[i]=string[i];
         }
     }
     return arr;
 }
 console.log(strToArr("Jovana Obradovic "));

 /* Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself. */

function prime(num){
    var num;
    for (i=2; i<num/2; i++){
        if (num%i == 0){
            return true;
        }
    }
    return false;
}
console.log(prime(8));



/** Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
&quot;My random string&quot;, &quot;_&quot; -&gt; &quot;My_random_string&quot;
&quot;My random string&quot;, &quot;+&quot; -&gt; &quot;My+random+string&quot;
&quot;My random string&quot; -&gt; &quot;My-random-string&quot; */

function separ(string,sep){
    var string;
    var sep;
    var newString='';
    for(i=0; i<string.length; i++){
        if(string[i]===" " && sep!==undefined){
            newString+=sep;
        }else if (sep===undefined && string[i]===" "){
            newString+="-";
        }else{
            newString+=string[i];
        }
    }
    return newString;
}
console.log(separ("Is this working?")); 


/** Write a function to get the first n characters and add “...” at the end of newly created string. */

function dot(string,n){
    var string;
    var n;
    var newString='';
    for (i=0; i<n; i++){
        newString+=string[i];
    }
    newString+='...';
    return newString;
}
console.log(dot('Some string here',7));



/* Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
[&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity] -&gt; [1, 21, 42, 1000] */

function stringToNumber(arr){
    var arr;
    var newArray=[];
    var k=-1;
    for(i=0; i<arr.length; i++){
        if(isFinite(arr[i]) && !isNaN(parseInt(arr[i]))){
            k+=1;
            newArray[k]=parseInt(arr[i]);
        }
    }
    return newArray;
}
console.log (stringToNumber(["1", "21", undefined, "42", "1e+3", Infinity,null,true]));


/** Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed.**/
 function retirement(sex,Ybirth,Ytoday){
     var sex;
     var Ybirth;
     var Ytoday;
     if(sex==="male"){
         if(Ytoday-Ybirth<65){
             return console.log("Sir, you will be retired in " + (65-(Ytoday-Ybirth)) + " years")
         }else{
             return ("Already retred")
         }
     }else if(sex==="female"){
        if(Ytoday-Ybirth<60){
            return console.log("Madam, you will be retired in " + (60-(Ytoday-Ybirth)) + " years")
        }else{
            return ("Already retred")
        }
     }
 }
 console.log(retirement('female',1994,2021));

 

/**Write a function to humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th. */
function ordNum(num){
    var num;
    var stringNum='';
    stringNum += num;
    var result;
    if (stringNum[stringNum.length-1]==='1' && stringNum!=='11'){
        result=stringNum + "st";
    }else if (stringNum[stringNum.length-1]==='2' && stringNum!=='12'){
        result=stringNum + "nd";
    }else if (stringNum[stringNum.length-1]==='3' && stringNum!=='13'){
        result=stringNum + "rd";
    }else{
        result=stringNum + "th";
    }
    return result;
}
console.log(ordNum(32));



