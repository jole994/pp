/** Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"  */

    console.log("\nZadatak 1")
    function conc(string1,string2,num){
        var string1;
        var string2;
        var num;
        var string3="";
        for(i=0; i<string1.length; i++){
            if(num===i+1){
                string3=string3+string2;
            }else if(num===undefined){
                num=1;
                string3=string3+string2;
            }
            string3=string3+string1[i];
        }
        return string3;
    }
    console.log(conc("Jovana","JS",4));


/* Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null]  */
 console.log("\nZadatak 2")
 function joinElements(arr) {
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        var ele = parseFloat(arr[i]);
        if(isFinite(ele)) {
            result += ele;
        }
    }
    return result;
}
console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));


/**Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47] */
console.log("\nZadatak 3");
function filterFalsy (arr) {
    var result = [];
    var k = -1;
    for (var i = 0; i < arr.length; i++) {
        if (!!arr[i]) {
            k++;
            result[k] = arr[i];
        }
    }
    return result;
}
console.log(filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));


/* Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number   */
console.log("\nZadatak 4");
function reverse(num){
    var num;
    var string='';
    string=string+num;
    newString='';
    for(i=string.length-1; i>=0; i--){
        newString=newString+string[i];
    }
    newString=parseInt(newString);
    return newString;
}
console.log(reverse(7865234));

/**Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2] */
console.log("\nZadatak 5")
function lastElements(arr,n){
    var arr;
    var n;
    var newArr=[];
    var k=-1;
    for(i=arr.length-n; i<arr.length; i++){
        k++;
        newArr[k]=arr[i];
    }
    return newArr;
}
console.log(lastElements([1,2,4,5,7,8,9,4],3));


/** Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null]                */
console.log("\nZadatak 6")
function eleM(koliko,sta){
    var koliko;
    var sta;
    var niz=[];
    for(i=0; i<koliko; i++){
        niz[i]=sta;
    }
    return niz;
}
console.log(eleM(5,"bla"));


/** Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.  */

console.log("\nZadatak 7")
function perfect(number){
    var number;
    var sum=0;
    for(i=1; i<=number/2; i++){
        if(number%i===0){
            sum=sum+i;
        }
    }
    if(sum===number){
        return true;
    }else{
        return false;
    }
}
console.log(perfect(30));

/** Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times" */

console.log("\nZadatak 8")
function search(string1, string2) {
    var string1;
    var string2;
    var string3 = ''; 
    var times = 0;
    var i=0
        for (var j = 0; j < string1.length; j++) {
            if (string2[i] === string1[j] ) {
                string3 = string3 + string1[j];
                i++;
                if (string3 === string2) {
                    times++; 
                    i=0;
                }
            } else {
                string3 = '';
                i=0;
            }
        }
    
    return times;
}
console.log(search('fox is brown, cat and fox are best friends', 'best friends' ));



/**Write a function to hide email address.

"myemailaddress@bgit.rs" -> "mye...@bgit.rs" */

console.log("\nZadatak 9")
function hideemail(mail){
    var mail;
    var k;
    var newE="";
    for(var i=0; i<mail.length; i++){
        if(i<3 || i>k){
            newE=newE+ mail[i];
        }else if(i===3){
            newE= newE + '...';
        }else if(mail[i]==="@"){
            k=i;
            newE=newE + mail[i];
        }
    }
    return newE;
}
console.log(hideemail('exampleofmail@gmail.com'))


/**  Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]                  */
console.log("\nZadatak 10")
function mostFrequent(arr){
    var arr;
    var mostFreq=0;
    var elem;
    for(i=0; i<arr.length; i++){
        var freq=0;
        for(j=0; j<arr.length; j++){
            if(arr[i]===arr[j]){
                freq++;
            }
        }
        if(freq>mostFreq){
            mostFreq=freq;
            elem=arr[i];
        }
       
    }
    return console.log("most frequent element is " + elem + ", which appears " + mostFreq + " times in array");
}
console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));


/**Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]   */

function switchhMinMax(arr){
    var arr;
    var min=arr[0];
    var max=arr[0];
    var indMin;
    var indMax;
    for(i=1; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i];
            indMin=i;
        }
        if(arr[i]>max){
            max=arr[i];
            indMax=i;
        }
    }
    arr[indMin]=max;
    arr[indMax]=min;
    return arr;
}
console.log(switchhMinMax([ 3, 500, 12, 149, 53, 414, 1, 19 ]));


/**Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ] */

function ar(arr){
    var arr;
    for(i=0; i<arr.length; i++){
        arr[i]=arr[i]/2+5;
        if(arr[i]===0){
            arr[i]=20;
        }
    }
    return arr;
}
console.log(ar([ 3, 500, -10, 149, 53, 414, 1, 19 ]));


/** Initialize two arrays. The first one should contain student names, the second one the number of points for each 
 * student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.   */

function grades(arrName,arrpoints){
    var arrName;
    var arrpoints;
    var result='';
    for(i=0; i<arrName.length; i++){
        if(arrpoints[i]<51){
            result += arrName[i]+ " acquired " + arrpoints[i] + " points and failed to complete the exam.\n"
        }else if (arrpoints[i]<=60){
            result+= arrName[i]+ " acquired " + arrpoints[i] + " points and earned 6.\n"
        }else if (arrpoints[i]<=70){
            result+= arrName[i]+ " acquired " + arrpoints[i] + " points and earned 7.\n"
        }else if (arrpoints[i]<=80){
            result+= arrName[i]+ " acquired " + arrpoints[i] + " points and earned 8.\n"
        }else if (arrpoints[i]<=90){
            result+= arrName[i]+ " acquired " + arrpoints[i] + " points and earned 9.\n"
        }else if (arrpoints[i]<=100){
            result+= arrName[i]+ " acquired " + arrpoints[i] + " points and earned 10.\n"
        }
    }
    return result;

}
console.log(grades([ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]));


/** 4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]  */

function sortArr(arrS) {
    var tempBox;
    for (var i = 0; i < arrS.length; i++) {
        for (var j = i + 1; j < arrS.length; j++) {
            if (arrS[i] > arrS[j]) {
                tempBox = arrS[i];
                arrS[i] = arrS[j];
                arrS[j] = tempBox;
            }
        }
    arrS[i] = arrS[i]*2
    }
    return arrS;
}
console.log(sortArr([ 13, 11, 15, 5, 6, 1, 8, 12 ]));

/**(skip :))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]   */
function sortArr(arrS) {
    var tempBox;
    for (var i = 0; i < arrS.length; i++) {
        for (var j = i + 1; j < arrS.length; j++) {
            if (arrS[i] < arrS[j]) {
                tempBox = arrS[i];
                arrS[i] = arrS[j];
                arrS[j] = tempBox;
            }
        }
    }
    return arrS;
}
console.log(sortArr([ 13, 11, 15, 5, 6, 1, 8, 12 ]));



/**Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000*//

function calc(num) {
    var sumEven = 0;
    var sumOdd = 0;
    for (var i = 1; i <= num; i++) {
        if (i%2 === 0) {
            sumEven += i;  
        }
        else if ( i%2 !== 0 && i <= num/2) {
            sumOdd += i;
        }
    }
    return (sumEven - sumOdd)*12.5; 
}

console.log(calc(1000));



/**Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa */

function firstTwo(arrTwo) {
    var newS = '';
    for (var i = 0; i < arrTwo.length; i++) {
        if ( typeof arrTwo[i] === 'string' && arrTwo[i].length >= 2) {
        newS += arrTwo[i][0] + arrTwo[i][1];
        }
    }
    return newS;
}

console.log(firstTwo([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]));

/**Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB  */

function descendingOrder(arr){
    var arr1 = ''
     for (var i = arr.length -1 ; i>=0; i--){
         arr1 += arr[i]
     }       
     return arr1
 }
 console.log(descendingOrder('Belgrade Institute of Technology'));

 
 /**Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...). */

 function combinatio(){
    var pom = ''
    for (var i = 1; i <= 7; i++){
        for (var j = 1; j <=7; j++){
            if (i !== j){  
                pom += '(' + i +',' + j +'), ' ;   
            }
        }
    }
    return pom
}
console.log(combinatio());


/** Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9
*/

function greatestDicisor(x, y) {
    if (x <= y) {
       var pom = x;
    }else{
        pom = y
    }

        for (var i = pom; i > 0; i--) {
            if (x % i === 0 && y % i === 0) {
                return i
            }
        }
    
}
console.log(greatestDicisor(81,9));





