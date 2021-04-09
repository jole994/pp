/**1.Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U.
 */
function vowels(string) {
  var brojac = 0;
  for (i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "A" ||
      string[i] === "e" ||
      string[i] === "E" ||
      string[i] === "i" ||
      string[i] === "I" ||
      string[i] === "o" ||
      string[i] === "O" ||
      string[i] === "u" ||
      string[i] === "U"
    ) {
      brojac++;
    }
  }
  return console.log(brojac);
}
vowels("treba izbrojati sve samoglasnike");

/**2.Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]  */

function combine(arr1, arr2) {
  var newArr = [];
  var smaler = arr1;
  var bigger = arr2;
  if (arr1.length >= arr2.length) {
    smaler = arr2;
    bigger = arr1;
  }
  for (var i = 0; i < smaler.length; i++) {
    newArr[newArr.length] = arr1[i];
    newArr[newArr.length] = arr2[i];
  }
  for (k = smaler.length; k < bigger.length; k++) {
    newArr[newArr.length] = bigger[k];
  }
  return newArr;
}
console.log(combine([5, 6, 7, 1, 1, 1, 1, 1], [9, 2, 3]));

/**3.Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2] */
function rotation(arr, k) {
  var s;
  if (arr.length % k !== 0) {
    return "k is not valid number";
  }
  for (i = 0; i < arr.length - k; i += k) {
    for (j = i; j < i + k; j++) {
      s = arr[j];
      arr[j] = arr[j + k];
      arr[j + k] = s;
    }
  }

  return arr;
}
var result = rotation([1, 2, 3, 4, 5, 6], 2);
console.log(result);

/*4.Write a function that takes a number and returns array of its digits.* */
function arrOfDig(num) {
  var string = "";
  string = string + num;
  var arr = [];
  for (i = 0; i < string.length; i++) {
    arr[i] = parseInt(string[i]);
  }
  return arr;
}
var result = arrOfDig(132456798);  
console.log(result);

/**5.Write a program that prints a multiplication table for numbers up to 12. */

//result with correct values, but without corrected spaces between elements of table
function multTable(num) {
  var result = "";
  for (r = 0; r <= num; r++) {
    for (c = 0; c <= num; c++) {
      if (r === 0) {
        if (c === 0) {
          result += "* ";
        } else if (c === num) {
          result += c + " \n";
        } else {
          result += c + " ";
        }
      } else if (c === num) {
        result += c * r + " \n";
      } else if (c === 0) {
        result += r + " ";
      } else {
        result += c * r + " ";
      }
    }
  }
  return result;
}
console.log(multTable(12));

//result with correct spaces between elements in tables
function multTable(num) {
  var result = "";
  var space = "";
  space += num * num;
  br = space.length + 1;
  space = "";
  var d;
  for (r = 0; r <= num; r++) {
    for (c = 0; c <= num; c++) {
      if (r === 0) {
        if (c === 0) {
          space += "*";
          if (space.length !== br) {
            d = space.length;
            for (s = d; s <= br; s++) {
              space += " ";
            }
          }
          result += space;
          space = "";
        } else if (c === num) {
          space += c;
          if (space.length !== br) {
            d = space.length;
            for (s = d; s <= br; s++) {
              space += " ";
            }
          }
          result += space + "\n";
          space = "";
        } else {
          space += c;
          if (space.length !== br) {
            d = space.length;
            for (s = d; s <= br; s++) {
              space += " ";
            }
          }
          result += space;
          space = "";
        }
      } else if (c === num) {
        space += c * r;
        if (space.length !== br) {
          d = space.length;
          for (s = d; s <= br; s++) {
            space += " ";
          }
        }
        result += space + "\n";
        space = "";
      } else if (c === 0) {
        space += r;
        if (space.length !== br) {
          d = space.length;
          for (s = d; s <= br; s++) {
            space += " ";
          }
        }
        result += space;
        space = "";
      } else {
        space += c * r;
        if (space.length !== br) {
          d = space.length;
          for (s = d; s <= br; s++) {
            space += " ";
          }
        }
        result += space;
        space = "";
      }
    }
  }
  return result;
}
console.log(multTable(20));

/**6.Write a function to input temperature in Centigrade and convert to Fahrenheit. */
function CtoF(n) {
  return (9 / 5) * n + 32;
}
console.log(CtoF(37));

/**Write a function to find the maximum element in array of numbers. Filter out all non-number
elements. */
function filterMax(arr) {
  var filtered = [0];
  var j = 0;
  var max;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i]) && isFinite(arr[i])) {
      filtered[j] = arr[i];
      if (j === 0) {
        max = filtered[0];
      } else if (max < filtered[j]) {
        max = filtered[j];
      }
      j++;
    }
  }
  return (
    "filtered array now looks like:[" +
    filtered +
    "] \nand biggest element of array is:" +
    max
  );
}
console.log(
  filterMax(["a", "2", NaN, Infinity, 5.5, 7, 8, 19, null, true, false, 5])
);

/**8.Write a function to find the maximum and minimum elements. Function returns an array. */
function minMax(arr) {
  var mm = [];
  var min = arr[0];
  var max = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  mm[0] = min;
  mm[1] = max;
  return mm;
}
console.log(minMax([1, 2, 5, 8, 4, 7, 2, 1, 1, 1]));

/**9.Write a function to find the median element of array. */
function median(arr) {
  var medianByValue;
  var medianByPosition = [];
  var mid = 0;
  var dif;
  for (i = 0; i < arr.length; i++) {
    mid += arr[i];
  }
  mid = mid / arr.length;
  for (i = 0; i < arr.length; i++) {
    if (i === 0) {
      dif = (arr[i] - mid) * (arr[i] - mid);
      medianByValue = arr[0];
    } else if (dif > (arr[i] - mid) * (arr[i] - mid)) {
      dif = (arr[i] - mid) * (arr[i] - mid);
      medianByValue = arr[i];
    }
  }
  if (arr.length % 2 === 0) {
    medianByPosition[0] = arr[arr.length / 2 - 1];
    medianByPosition[1] = arr[arr.length / 2];
    return (
      "value median:" +
      medianByValue +
      "\nposition median:" +
      medianByPosition[0] +
      " " +
      medianByPosition[1]
    );
  } else if (arr.length % 2 !== 0) {
    medianByPosition[0] = arr[(arr.length + 1) / 2 - 1];
    return (
      "value median:" +
      medianByValue +
      "\nposition median:" +
      medianByPosition[0]
    );
  }
}

console.log(median([1, 3, 2]));

/**10.Write a function to find the element that occurs most frequently. */
function mostFrq(arr) {
  var mostFreq = 0;
  var whichElement;
  for (i = 0; i < arr.length; i++) {
    var freq = 0;
    for (j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        freq++;
      }
    }
    if (mostFreq < freq) {
      mostFreq = freq;
      whichElement = arr[i];
    }
  }
  return (
    "most frequent elemet is:" +
    whichElement +
    "  that appears " +
    mostFreq +
    " times"
  );
}
console.log(mostFrq([1, 2, 1, 4, 7, 1, 7, 1, 6, 4, 1]));

/**11.Write a function to find and return the first, middle and last element of an 
 array if the array has odd number of elements. If number of elements is even, 
 return just the first and the last. In other cases (empty array), input array should be returned. */
 function FirstMidLast(arr){
   if(arr.length===0){
      return ("input array");
   }else if(arr.length%2===0){
      return ("first element: " + arr[0] + "\nlast element: " + arr[arr.length-1]);
   }else if(arr.length%2!==0){
     return ("first element: " + arr[0] + "\nmiddle element: " + arr[(arr.length+1)/2-1] + "\nlast element: " + arr[arr.length-1]);
   }
 }
 console.log(FirstMidLast([1,2,3,4,5]));

 /**12. Write a function to find the average of N elements.
 Make the function flexible to receive dynamic number or parameters.*/
 function avg(arr){
   var sum=0;
   for(i=0; i<arr.length;i++){
     sum += arr[i];
   }
  return (sum/arr.length);
 }
 console.log(avg([1,2,3,4,5,6,7,8]));

 /**13.Write a function to find all the numbers greater than the average. */
 function avg(arr){
  var s=0;
  var higher=[];
  for(i=0; i<arr.length;i++){
    s += arr[i];
  }
  s=s/arr.length;
  for (i=0; i<arr.length;i++){
      if(arr[i]>s){
          higher[higher.length]=arr[i];
      }
  }
 return higher;
}
console.log(avg([1,2,3,4,5,6,7,8]));

/**14.The body mass index (BMI) is the ratio of the weight of a person (in kilograms)
to the square of the height (in meters). Write a function that takes two parameters, weight and height,
computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40  */
function BMI(w,h){
  var B=w/(h*h);
  if(B<15){
    return ("Starvation-Your BMI=" + B)
  }else if(B<17.5){
    return("Anorexic-Your BMI=" + B)
  }else if(B<18.5){
    return("Underweight-Your BMI=" + B)
  }else if(B<25){
    return("Ideal-Your BMI=" + B)
  }else if(B<30){
    return("Overweight-Your BMI=" + B)
  }else if(B<40){
    return("Obese-Your BMI=" + B)
  }else if(B>=40){
    return("Morbidly obese-Your BMI=" + B)
  }
}
console.log(BMI(65,1.70));

/**15.Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********          */

function rectString(arr){
  var maxElem;
  var numC=0;
  var result="";
  for(var i=0;i<arr.length;i++){
    if(arr[i].length>numC){
      numC=arr[i].length;
      maxElem=arr[i];
    }
  }
  for( var r=0; r< arr.length+2; r++){
    var j=0;
    for( var c=0; c<numC+4; c++){
      if(r===0 || r===arr.length+1 ){
        result+="*";
        if(c===numC+3){
          result+="\n";
        }
      }else if(c===0 ){
        result+="*";
      }else if(c===numC+3){
        result+="*\n"
      }else if(c===1 || c===numC+2){
        result+=" ";
      }else{
      
          if(c<arr[r-1].length+2){
            result+=arr[r-1][j];
          j++;
          }else{
            result+=" ";
          }
        
      }
    }
  }
  return result;
}
console.log(rectString(["This", "Is", "Array", "Which", "Will", "Be","Printed","Inside","Rectangle"]));





