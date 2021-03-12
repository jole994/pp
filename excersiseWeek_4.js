var mixedArray=[3,true,6,"neki string",80, null];
var numbers=[3, 6, 80];

console.log(mixedArray[3])
var string=mixedArray[3];
console.log(string);

var multiDimArr=[["a",4,6], "string neki" , [3,true,null]]
var b=multiDimArr[[2][1]] //**da iyvucemo true vrednost */

console.log(multiDimArr.length)
var arrLength=multiDimArr.length

console.log(multiDimArr[0].length) //**ovo da izbaci duzinu niza onog sto je prvi element  */


var a=[1, 2, 3, 4, 5]
a[1]="menjam vrednost"
console.log(a)
a[10]="nije preporucljivo"
console.log(a)

var na="Jovana";
var bla= na[1] + na[2];
console.log(bla)

/**Write an array of months in a year. Using console.log display June, October and January
from the array. */
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(months[5], months[9], months[0]);

/**Write an arrays of days in a week. Using console.log display Sunday from the array. */
var week=["ponedeljak","utorak","sreda", "cetvrtak", "petak", "subota", "nedelja"];
console.log(week[6]);

/**Print all negative elements from the array [2, -4, 5, -2, -11]. */
var elements = [2, -4, 5, -2, -11];
res=" "
var duzina=elements.length;
for (var i=0; i< duzina; i++) {
    if (elements[i]<0){
        res+=elements[i] + ", ";
    }
}
console.log(res)

/**Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
72, 14, 9]. */
var Niz=[5, 15, -5, 20, 12, 18, 72, 14, 9];
console.log(Niz[1], Niz[4], Niz[5], Niz[6], Niz[8]);

/**What is the index of number 24 in the following array?
[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
10, 26, 7]];
Using console.log:
● Display the 3rd element of the array,
● Display the 2nd element of the 3rd element. */
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,10, 26, 7]];

console.log(a[0][3]);
console.log(a[2]);
console.log(a[2][1]);






