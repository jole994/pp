/**1.Write a function that checks if a given string contains digit 5.
Input: “1b895abd”
Output: true
Input: “1bser9re”
Output: false */
function containing (string, digit){
    for( var i=0; i< string.length; i++){
        if(string[i]==digit){
            return true;
        }
    }
    return false;
}
result=containing("1dasgvc8b",5);
console.log(result);

//
(function containing (string, digit){
    for( var i=0; i< string.length; i++){
        if(string[i]==digit){
            console.log (true);
        }
    }
    console.log (false);
})("bavxgs54sxjxb",5);

//
function containing (string, digit){
    return function inner(){
        for( var i=0; i< string.length; i++){
            if(string[i]==digit){
                return true;
            }
        }
        return false;
    }
}
result=containing("1dasgvc8b",5)();
console.log(result);

/**2.Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!” */
function replace(string,find){
    var word="";
    var array=[];
    var newString="";
    for(var i=0; i < string.length; i++){
        if(i===string.length-1){
            word=word + string[i];
            array[array.length]=word;
        }else if(string[i] !== " "){
            word=word + string[i];
        }else{
            array[array.length]=word;
            word="";
        }
    }
    for (var j=0; j<array.length;j++){
        if(find===array[j]){
            array[j]="";
            for (var k=0; k<find.length;k++){
                array[j]+="*";
            }
        }
    }
    for(var i=0; i<array.length; i++){
       if(i!==array.length-1){
        newString+=array[i];
        newString+=" ";
        }else{
        newString+=array[i];  
        }
    }
    return newString;
}
result=replace("Programming in JS is super interesting!","JS");
console.log(result);


//fuction inside function,function that returns function and immediate func:
function makeAnArray(someString,something,arr){ 
    for(var i=0; i < someString.length; i++){
        if(i===someString.length-1){
            something=something + someString[i];
            arr[arr.length]=something;
        }else if(someString[i] !== " "){
            something=something + someString[i];
        }else{
            arr[arr.length]=something;
            something="";
        }
    }
    return arr;
}

function starWord(element,arr){  
    for (var j=0; j<arr.length;j++){ 
        if(element===arr[j]){
            arr[j]="";
            for (var k=0; k<element.length;k++){
                arr[j]+="*";
            }
        }
    }
    return arr;
}

//main function
function replace(string,find){
    var word="";
    var array=[];
    var newString="";
    array=makeAnArray(string,word,array);
    array=starWord(find, array);
    return (function makeStringOutOfArray(){
        for(var i=0; i<array.length; i++){
        if(i!==array.length-1){
            newString+=array[i];
            newString+=" ";
            }else{
            newString+=array[i];  
            }
        }
        return newString;
    })(array,newString);
}
result=replace("Programming in JS is super interesting!","JS");
console.log(result);

/**3.Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’
Output: “Good morning”       */
function insertCharacter (string,position,character){
    newString="";
    for(var i=0; i<string.length; i++){
        if(position===i+1){
            newString+=character;
            newString+=string[i];
        }else{
            newString+=string[i];
        }
    }
    return newString;
}
result=insertCharacter("hiiiiiiii",2,"a");
console.log(result);


function changeCharacter (string,position,character){
    newString="";
    for(var i=0; i<string.length; i++){
        if(position===i+1){
            newString+=character;
        }else{
            newString+=string[i];
        }
    }
    return newString;
}
result=changeCharacter("ccccccccc",2,"a");
console.log(result);


/**4.Write a function that deletes a character from the given position in the string. 
Input: “Goodd morning!”, 3 
Output: “Good morning!”      */

function deleteCharacter(string, position) {
        var newString = ""; 
        for (i = 0; i < string.length; i++) {
            if (position!==i+1) {
                newString = newString + string[i];
            }
        }
        return newString;
}
console.log(deleteCharacter("jovanajovana", 6));

/**5.Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]*/

function deleteSecondElement(array) {
    var newArray = [];
    return (function inside(){
        for (i = 0; i < array.length; i = i + 2) {
            newArray[newArray.length] = array[i];
        }
        return newArray;
    })();
}
console.log(deleteSecondElement([3, 5, 1, 8, 90, -4, 23, 1, 67]));

//**6.Write a function that replaces the elements of the given array between two positions with their doubled values. 
//Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
//Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]/

    function replaceElements(array, position, numOfElements) {
        var newArray = [];
        for (var i = 0; i < array.length; i++) {
            if (i >= position && i < numOfElements + position-1) {
                newArray[i] = array[i] *2;
            }else {
                newArray[i] = array[i];
            }
        }    
        return newArray;
    }
    console.log(replaceElements([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 ));




/**8.Write a function that checks if every element of the first array is contained in the second
array. Be careful with repetitions!
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true  */
function subset (arr1,arr2){
    function inner(param1,param2){
        var k=0;
        for (var i=0; i<param1.length; i++){
            for(var j=0; j<param2.length; j++){
                if(param1[i]===param2[j]){
                    param2[j]="match!"
                    k++
                    if(k===param1.length){
                        return true;
                    }
                }
            }
        }
        return false;
    }
    return "Is this array subset of another one?" + inner(arr1,arr2);
}
var result=subset([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]);
console.log(result);


/**9.Write a function that sorts an array of strings by the number of appearances of the letter
‘a’ or ‘A’.
Input: [‘apple’, ‘tea’, ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’] */
function numOfApperances (string,letter1,letter2){
    num=0;
    for(var i=0; i<string.length; i++){
        if(string[i]===letter1 || string[i]===letter2){
            num++;
        }
    }
    return num;
}

function sortingFunc(array,char1,char2){
    var arr=[];
    for(var i=0; i<array.length; i++){
        arr[arr.length]=numOfApperances (array[i],char1,char2);
    }
    return (function(){
        var cont;
        for(var i=0; i<arr.length; i++){
            for(var j=i+1; j<arr.length; j++){
                if(arr[i]>=arr[j]){
                    cont=arr[i];
                    arr[i]=arr[j];
                    arr[j]=cont;
                    cont=array[i];
                    array[i]=array[j];
                    array[j]=cont;
                }
            }
        }
        return array;
    })();
}
var result=sortingFunc(["float", "array","hahahaha", "hoisting", "assignment", "JavaScript"],"a","A");
console.log(result);




/**10.Write a function that prints out the date of the next day. 
Output:  25. 10. 2018.  */
/**11.Write a function that prints out the date of the previous day.
Output: 23. 10. 2018. */
function nextDay(date) {
	var arrayDate=arrayOfStrings(date); 
	arrayDate=translateStringElementsToNumberAndDateFormat(arrayDate);
    if(typeof(arrayDate)!=="object"){
        return arrayDate;
    }
    day=arrayDate[0];
    month=arrayDate[1];
    year=arrayDate[2];
    check=wachOutForNumOfDaysInMonth(day,month,year);
    if(check===true){

        return (function finalCalc(d,m,y){ 
            if( (m===1 && d===31) || (m===3 && d===31) || (m===5 && d===31) || (m===7 && d===31) ||  
            (m===8 && d===31) || (m===8 && d===31) || (m===10 && d===31) || (m===4 && d===30) || (m===6 && d===30) || (m===9 && d===30) || (m===11 && d===30)){ 
                d=1; 
                m+=1; 
                return "Next day in calendar is: " + d + "." + m + "." + y +"."; 
            }else if(m===12 && d===31){ 
                d=1; 
                m=1; 
                y+=1; 
                return "Next day in calendar is: " + d + "." + m + "." + y +"."; 
            }else{ 
                var c="Next day in calendar is: " + (d+1) + "." + m + "." + y +".";
                var a="Next day in calendar is:1.3." + y + ".";
                var b="Next day in calendar is:1.3." + y + ".";
                return isItFebruary(d,m,y,a,b,c);
            } 
        })(day,month,year); 
            

    }else{
        return check;
    }
}
console.log(nextDay("31.12.2021"))  ///insert here!


function previousDay(date) {
	var arrayDate=arrayOfStrings(date); 
	arrayDate=translateStringElementsToNumberAndDateFormat(arrayDate);
    if(typeof(arrayDate)!=="object"){
        return arrayDate;
    }
    day=arrayDate[0];
    month=arrayDate[1];
    year=arrayDate[2];
    check=wachOutForNumOfDaysInMonth(day,month,year);
    if(check===true){

        return (function finalCalc(d,m,y){ 
            if( d===1 && (m===2 || m===4 || m===6 || m===8 || m===9 || m===11)  ){ 
                d=31; 
                m--; 
            }else if(  d===1 && (m===5 || m===7 || m===10 || m===12)  ){ 
                d=30; 
                m--; 
            }else if(d===1 && m===1){
                d=31;
                m=12;
                y--;
            }else if(d===1 && m===3){
                var a="Previous day in calendar is:29.2." + y + ".";
                var b="Previous day in calendar is:28.2." + y + ".";
                return isItMarch(d,m,y,a,b);
            }else{ 
                d--;
            } 
            return "Previous day in calendar is: " + d + "." + m + "." + y +"."; 
        })(day,month,year); 
            

    }else{
        return check;
    }
}
console.log(previousDay("31.12.2021"))  //insert here!


function arrayOfStrings(string){
	var arr=[];
	var elem="";
	for(var i=0; i<string.length; i++){
		if(string[i]==="." ){
			arr[arr.length]=elem;
			elem="";
		}else if(i===string.length-1){
            elem+=string[i];
            arr[arr.length]=elem;
        }else{
            elem+=string[i];
        }
	}
	return arr;
}


function translateStringElementsToNumberAndDateFormat(arr){
	if(arr.length!==3 || arr[0].length!==2 || arr[1].length!==2 || arr[2].length!==4){
	    return "Not valid format of date! Please insert format:dd.mm.yyyy";
	}
	if( arr[2][0]==="0" ){
	    return "Error!You have to input year between 1000 and 9999";
	}
	if( isNaN(parseInt(arr[0][0])) || isNaN(parseInt(arr[0][1])) || isNaN(parseInt(arr[1][0])) || 
    isNaN(parseInt(arr[1][1])) || isNaN(parseInt(arr[2][0])) || isNaN(parseInt(arr[2][1])) || 
    isNaN(parseInt(arr[2][2])) || isNaN(parseInt(arr[2][3])) ){
	    return "programm does not accept characters and letters instead of numbers"
	}
	if(arr[0][0]==="0"){
		arr[0]=parseInt(arr[0][1]);
	}else{
        arr[0]=parseInt(arr[0]);
    }
	if(arr[1][0]==="0"){
		arr[1]=parseInt(arr[1][1]);
	}else{
        arr[1]=parseInt(arr[1]);
    }
	arr[2]=parseInt(arr[2])
	return arr;
}



function wachOutForNumOfDaysInMonth(d,m,y){
    if(m>12){
        return "Insert month number between 1 and 12"
    }else if( (m===1 && d>31) || (m===3 && d>31) || (m===5 && d>31) || (m===7 && d>31) || 
    (m===8 && d>31) || (m===8 && d>31) || (m===10 && d>31) || (m===12 && d>31) ){
        return "not valid number of days in defined month"
    }else if(  (m===4 && d>30) || (m===6 && d>30) || (m===9 && d===30) || (m===11 && d>30) ){
        return "Not valid number of days in defined month"
    }else{
        var a="Not valid number of days in defined month!\nHint:it's leap year!February has 29 days."
        var b="Not valid number of days in defined month!\nHint:it's not a leap year!February has 28 days."
        var c=true;
        return isItLeapYear(d,m,y,a,b,c);
    }
}


function isItLeapYear(d,m,y,a,b,c){
    if( (y%4===0 && y%100!==0) || (y%4===0 && y%100===0 && y%400===0) ){
        if(m===2 && d>29){
            return a;
        }
    }else{
        if(m===2 && d>28){
            return b;
        }
    }
    return c;
}
//those two are different by only one sign d>29 and d===29
function isItFebruary(d,m,y,a,b,c){
    if( (y%4===0 && y%100!==0) || (y%4===0 && y%100===0 && y%400===0) ){
        if(m===2 && d===29){
            return a;
        }
    }else{
        if(m===2 && d===28){
            return b;
        }
    }
    return c;
}

function isItMarch(d,m,y,a,b){
    if( (y%4===0 && y%100!==0) || (y%4===0 && y%100===0 && y%400===0) ){
        if(m===3 && d===1){
            return a;
        }
    }else{
        if(m===3 && d===1){
            return b;
        }
    }
}


/**12. Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output:
78
111
4
4321 */
function aligningRight(arr){
    var max="";
    max+=arr[0];
    max=max.length;
    var result="";
    for(var i=0; i<arr.length; i++){
        arr[i]="" + arr[i];
        if(arr[i].length>max){
            max=arr[i].length;
        }
    }
    var emptySpace="";
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<max-arr[i].length; j++){
            emptySpace+=" ";
        }
        result+=emptySpace + arr[i] + "\n";
        emptySpace="";
    }
    return result;
}
console.log(aligningRight([45, 456, 87454, 321,45789,1,2121454,45,1]));