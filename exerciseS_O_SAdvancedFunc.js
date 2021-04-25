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

