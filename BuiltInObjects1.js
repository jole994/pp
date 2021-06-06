/**1.Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1] */
function duplicateArray (arr){
    var newArr=[];
    for(var i=0; i<arr.length; i++){
        newArr.push(arr[i],arr[i]);
    }
    return newArr;
}
var duplicateThis=duplicateArray([2, 4, 7, 11, -2, 1]);
console.log(duplicateThis);

/**2.Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]  */
function noDuplicates(arr){

    var newArr=arr.filter( function (elem,ind){
        return ind === arr.indexOf(elem);
    });
    return (  newArr.sort(function (a, b) {
        return a - b;
        })  )

}
console.log(noDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]))

/**3.
a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true*/
function isItOdd(arr){
    return ((arr.length-1)%2  === 0)
}
/*console.log(isItOdd([1, 9, 2, 1]));*/

/* 
b. Write a function that counts the number of elements less than the middle element.
If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4
*/
function countingElementsLessThanMid(arr){
    var arrOfMatchingEl=[];
    var odd=isItOdd(arr);
    if(!odd){
        return "error"
    }
    var midElem=arr.slice((arr.length)/2,(arr.length+1)/2);
    arrOfMatchingEl=arr.filter(function(elem){
        return (elem < midElem);
    });
    return (arrOfMatchingEl.length)
}
console.log(countingElementsLessThanMid([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

/**4.Write a function that finds the smallest element of a given array. 
The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 }
*/

function smallestOfElements(arr){
    function SmallestElem(elem,ind){
        this.minValue=elem;
        this.minLastIndex=ind;
    }
    var copy=arr.filter(function (elem){return elem;});
    var sorted=copy.sort(function(a,b){
        return a-b;
    });
    var minElem=sorted[0];
    var indexLast=arr.lastIndexOf(minElem);
    var result=new SmallestElem(minElem,indexLast);
    return result;
}
console.log(smallestOfElements([1, 4, -2, 11, 8, 1, -2, 3]));

/**5.
a.Write a function that finds all the elements in a given array less than a given element. 
	Input: [2, 3, 8, -2, 11, 4], 6 
	Output: [2, 3, -2, 4]*/
function lessThan(arr,elem){
    var newArr=arr.filter(function(item){
        return item < elem;
    });
    return newArr;
}
/*console.log(lessThan([2, 3, 8, -2, 11, 4], 6))*/
/*
b.Write a function that finds all the elements in a given array that start with the “pro” substring. 
The function should be case insensitive. 
		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
	Output: [’Programming’, ‘product’] */
function startWithPro(arr){
    var result=arr.filter(function(element){
        return element.toLowerCase().indexOf("pro") === 0;
    });
    return result;
}
//console.log(startWithPro(['JavaScript', 'Programming', 'fun', 'product'] ))
/*
c.Write a function that expects an array and a callback function that filters out some of the elements. 
Use functions defined in a) or b) to test it. 
*/
function callBackAndArray(funct,arr){
var modifiedArr=funct(arr,arr[0]);
return modifiedArr;
}
console.log(callBackAndArray(lessThan,[2, 3, 8, -2, 11, 4]));


/**6.Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. 
 * For example,
[
{name: ‘apples’, price: 100}, 
{name: ‘milk’, price: 80}, 
{name:’bananas’, price: 150}
]
Write a function that calculates the total price of your shopping list. 

Write a function that calculates the average product price of your shopping list. 
Print this value with the precision of three decimals. 

Write a function that prints out the name of the most expensive product on your shopping list.
Write the name in uppercase. 
*/
var listOfProducts=[
	{name: 'apples', price: 200}, 
	{name: 'milk', price: 350}, 
	{name:'bananas', price: 150}
];
function totalPrice(array){
	var sum = 0;
	for (var i = 0; i < array.length; i++){
		sum = sum + array[i].price;
	}
	return sum;
}
function averagePrice(array){
	var sum = 0;
	for (var i = 0; i < array.length; i++){
		sum = sum + array[i].price;
	}
	return (sum / array.length).toFixed(3);
}
function mostExpensive(array){
	var price = array[0].price;
	var index = 0;
	for (var i = 0; i < array.length; i++){
		if (price < array[i].price){
			price = array[i].price;
			index = i;
		}
	}
	return 'Most expensive product is:' + array[index].name.toUpperCase();
}

var output = totalPrice(listOfProducts);
console.log(output);
var output1 = averagePrice(listOfProducts);
console.log(output1);
var output2 = mostExpensive(listOfProducts);
console.log(output2);


/**7.
a. Write a function that checks if a given string is written in all capitals.
b. Write a function that checks if a given string contains any digits.
c. Write a function that checks if a given string is a valid hexadecimal color.
d. Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
e. Write a function named validator that returns an object with properties stringValidator, 
passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).
*/
function checkIsAllCapitals(string) {
    return string === string.toUpperCase();
}
function checkForAnyDigits(string) {
    for (var i = 0; i < string.length; i++) {
      if (!isNaN(parseInt(string[i]))) {
        return "String contains number";
      }
    }
    return "String dont have numbers";
}
function isValidHexadecimal(string) {
    if (string[0] !=='#' || string.length !== 7 ){
         return false;
    }else{
        var checking=checkIsAllCapitals(string);
        if(!checking){
            return false;
        }
        var checking2=["A","B","C","D","E","F"];
        [...string].forEach(function(letter){
            var checking3=checkForAnyDigits(letter);
            if(!checking3){
                var checkig4=checking2.includes(letter);
                if(!checkig4){
                    return false;
                }
            }
        })

    }
    return true;
}
var input = "#FS5733";
// var output = checkForAnyDigits(input);
// console.log(output);

//var output1 = checkIsAllCapitals(input);
//console.log(output1);

var output2 = isValidHexadecimal(input);
console.log(output2);

/**8.Write a function that calculates a number of days to your birthday.
Input: 25 February 
Output: 5 days */

function birdthDay(inputDate){
    var newInput=new Date(inputDate);
    var today=new Date();
    return Math.round((newInput.getTime()-today.getTime()) / (1000 * 3600 * 24));
}
var result=birdthDay("2021 06 09");
console.log(result);

//second way
function daysToBirthday (input){
    var day1 = new Date();
    var day2 = new Date(input)
    
    return Math.round(Math.abs(day2 - day1)/(1000*3600*24)); 
}
   
console.log(daysToBirthday('07/17/2021'));

/**9.Write a function that for a given departure and arrival time
calculates the time the trip takes.
Input: 8:22:13 11:43:22
Output: 3 hours 21 minutes 9 seconds */
function departureToArrival(dep, ar){
    var arrayDep=String(dep).split(":").map( function(elem){
        return elem=parseInt( elem);
    } );
    var arrayArr=String(ar).split(":").map( function(elem,ind){
        return elem=parseInt( elem );
    } );
    secDep=arrayDep[2] + arrayDep[1]*60 + arrayDep [0]*3600;
    secArr=arrayArr[2] + arrayArr[1]*60 + arrayArr [0]*3600;
    sec=secArr-secDep;
    hours=Math.floor(sec/3600);
    minutes=Math.floor(  (sec-hours*3600)/60  );
    seconds=sec-(hours*3600+minutes*60);
    if(arrayDep[0]<arrayArr[0]){
        return hours + ":" + minutes + ":" + seconds;
    }else{
        return (hours+24) + " hours " + minutes + " minutes " + seconds + " seconds";
    }
}
var result=departureToArrival("23:59:59", "04:00:00");
console.log(result);



