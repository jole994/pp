/**1. Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
	Input array: [4, 5, 11, 9]
	Output array: [ 9, 5, 11, 4] */
var change=(function(arr){
    var cont=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=cont;
    return arr;
})([4, 5, 11, 9]);

console.log(change);

///

(function(arr){
    var cont=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=cont;
    console.log(arr);
})([4, 5, 11, 9]);

/**2.Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
Input: 4 5
Output: 20 */
var areaCalc=(function(a,b){
    return a*b;
})(2,3);
console.log(areaCalc);

///
(function(a,b){
    console.log (a*b);
})(2,3);

/**3.Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
	Input: prograMming
	Output: progra**ing, 2 */
(function(word){
    var newWord="";
    for(var i=0; i<word.length; i++){
        if(word[i]==="m"){
            newWord+="*";
        }else if(word[i]==="M"){
            newWord+="*";
        }else{
            newWord+=word[i];
        }
    }
    console.log(newWord);
})("prograMming");

//
var mToStar=(function(word){
    var newWord="";
    for(var i=0; i<word.length; i++){
        if(word[i]==="m"){
            newWord+="*";
        }else if(word[i]==="M"){
            newWord+="*";
        }else{
            newWord+=word[i];
        }
    }
    return newWord;
})("prograMming");

console.log(mToStar);


/**4.Write a function with parameters name and surname that returns a 
function that suggests an email in the form name.surname@gmail.com. 
Input: pera peric
	Output: pera.peric@gmail.com
*/
function mail(name,surname){
    console.log("Suggestion for email adress:");
    return function (){
        var mail=name+"."+surname+"@gmail.com";
        return(mail);
    }
}
console.log(mail("jovana","obradovic")());


//self invoked outer function
(function mail(name,surname){
    console.log("Suggestion for email adress:")
    return function (){
        var mail=name+"."+surname+"@gmail.com";
        console.log(mail);
    }
})("jovana","obradovic")();


//self invoked inner function
function mail(name,surname){
    console.log("Suggestion for email adress:")
    return (function (){
        var mail=name+"."+surname+"@gmail.com";
        return(mail);
    })();
}
console.log(mail("jovana","obradovic"));


/**5.Write a function that returns a function that calculates a decimal value of the given octal number. 
Input: 034
Output: 28
 */
function octalDecimal (num){
    return (function(){
        return num;
    })();
}
result=octalDecimal(056);
console.log(result);


//string octal
function octalStringToDecimal(num){
    if(num[0]==="0"){
        return (function (){
            var k=1/8;
            var decimal=0;
            for(var i=num.length-1; i>0; i--){
                k*=8;
                decimal+=parseInt(num[i])*k;
            }
            return decimal;
        })();
    }else{
        return "please insert octal number in string"
    }
}
result=octalStringToDecimal("056");
console.log(result);


/**6.Write a function that checks if a given string is valid password.
The password is valid if it is at least 6 characters long and contains at least one digit. 
The function should receive two callbacks named successCallback and errorCallback that should be 
called in case password is correct or invalid. 
Input: JSGuru 
Output: Your password is invalid!

Input: JSGuru123
Output: Your password is cool! */

function successCallback(){
    return "Your password is cool!";
}

function errorCallback(){
    return "Your password is invalid!";
}

function isCorrectPassword(password,funcCorrect,funcError){
    if(password.length>=6){
        for(var i=0; i<password.length-1; i++){
            password[i]=parseInt(password[i]);
            if(!isNaN(password[i])){
                return funcCorrect();
            }
        }
        return funcError();
    }else{
        return funcError();
    }
}

console.log(isCorrectPassword("jovana123",successCallback,errorCallback));


/**7.Write a function that filters elements of the given array so that they satisfy 
a condition given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3]  */
function filter(array, func){
    return func(array);
}

function removeEven(arr){
    var newAr=[];
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2!==0){
            newAr[newAr.length]=arr[i];
        }
    }
    return newAr;
}

console.log(filter([2, 8, 11, 4, 9, 3],removeEven));




