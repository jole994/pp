/*Write a program that will iterate from 0 to 10 and display squares of numbers.*/

//while loop
var i=0;
while(i<=10) {
    console.log( i*i );
    i++;
}

//do while loop
var i=-1;
do{
    i++;
    console.log( i*i );
}while( i < 10 );


//for loop
for (var i=0; i<=10; i++){
    console.log(i*i);
}




/** Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.*/

//while loop
var i=0;
while(i<=10){

    if(i!=0){

            if(i%2===0){
                console.log("\n paran broj:" + i);
            }else{
                console.log("\n neparan broj:" + i);
            }
            i++;
    }else{
        console.log("nula")
        i++;
    }
}


//do while loop
var i=-1;
do{
    i++;
    if(i===0){
        console.log("nula")
    }else{
            if(i%2===0){
                console.log("paran broj:"+ i)
            }else{
                console.log("neparan broj:"+ i)
            }
    }
}while(i <= 10);


//for loop
for (var i=0; i<=10; i++){
    if(i===0){
        console.log("nula")
    }else{

        if(i%2===0){
            console.log("paran broj:" + i);
        }else{
            console.log("neparan broj:" + i);
        }//closed inner loop

    } //closed if
}



/**Write a program to sum the multiples of 3 and 5 under 1000. */

//shvatila ovako :D 
var sum=0;
for(var i=0; sum+3*5<1000; i++) {
    sum+=3*5;
}
console.log("3*5 can be " + i + " times added, so their sum is under 1000.Sum is=" + sum)

//ispravno je:
var sum=0;
for(var i=0; i<1000; i++){
    if (i%3===0 && i%5===0){
        sum+=i;
    }
}
console.log(sum);


/**Write a program to compute the sum and product of an array of integers. */

//for loop
var sum=0;
var product=1;
var array=[1,2,3,15,4,5,6,7];
for(i=0; i<array.length; i++){
    sum+=array[i];
    product*=array[i];
}
console.log("sum= " + sum + "  product= " + product);

//do while
var sum=0;
var product=1;
var array=[1,2,3,15,4,5,6,7];
i=-1;
do{
    i++;
    sum+=array[i];
    product=product*array[i];
}while(i<array.length-1);
console.log("sum= " + sum + "  product= " + product);



/**Write a program which prints the elements of the following array as a single string. */

//while loop
var x = ['1','A','B','c','r', true, NaN, undefined];
var string="";
var i=0;
while(i<x.length){
    string+=x[i] + " ";
    i++
}
console.log(string);

//for loop
var x = ['1','A','B','c','r', true, NaN, undefined];
var duzina=x.length
var string=" ";
for(i=0; i<duzina-1; i++){
    string+=x[i];
}
console.log(string)


/**Write a program that prints the elements of the following array.
var a = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27] ]; */

//1*
var a = [[1, 2, 1, 24],[8, 11, 9, 4],[7, 0, 7, 27]]
var duzina=a.length

for (i=0;i<=duzina-1;i++){
    console.log(i+1 +": " + "[" + a[i] + "]")    
}


//2*
var a = [[1, 2, 1, 24],[8, 11, 9, 4],[7, 0, 7, 27]]
var leng=a.length;
for(i=0; i<leng; i++) {
    for(j=0; j<a[i].length; j++){
        console.log(a[i][j]);
    }
}//for closed



/**Write a program that outputs the sum of squares of the first 20 numbers. */
sum=0;
for (i=1;i<=20;i++){
    sum+=i*i;
}
console.log(sum);



/**Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade. */
var David=80;
var Marko=77;
var Dany=88;
var John=95;
var Thomas=68;
var avg=(David+Marko+Dany+John+Thomas)/5
if (avg<60){
    console.log("F")
}else if (avg<70){
    console.log("D")
}else if (avg<80){
    console.log("C")
}else if (avg<90){
    console.log("B")
}else{
    console.log("A")
}



/**Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
&quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those). */
for(i=1; i<100; i++){
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz");
    }else if(i%3===0){
        console.log("Fizz");
    }else if(i%5===0){
        console.log("Buzz");
    }else{
        console.log(i);
    }

}

/**Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no */

//1*
var a = [5, -4.2, 3, 7];
var e=5;
var check=false;
for(var i=0; i<a.length; i++){
    if(e!== a[i] ){
        
    }else{
        check=true;
    }
}    
switch(check){
    case true:
        console.log("e is element of array");
        break;
    case false:
         console.log("e is not element of array");
         break;
}

//2*
var e=7;
var a=[5, -4.2, 3, 7];
var elem=0;
for(i=0; i<a.length; i++){
	if(e!==a[i]){
			if(i===a.length-1 && elem!==true){
				console.log("nije element")
			}
		}else{
		elem=true;
		console.log("element niza");
		} // if closed
}// for closed



/**Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */

var a=[-3, 11, 5, 3.4, -8];
var i;
for(i=0; i<a.length;i++){
    if(a[i]>0){
        a[i]*=2;
    }
}
console.log(a);




/**Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */
var a=[4, 2, 2, -1, 6];
min=a[0];
var ind;
for(i=0; i<a.length; i++){
    if(a[i]<=min){
        ind=i;
        min=a[i];
    }

}//for closed
console.log("index:" + ind + "  value:" + min);



/**Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1,6]
Output: 2 */

//1* sorted array:
var a=[4,-15, 3, -2, 2, 2, -1, 6, 7];
var duzina=a.length+1;
var sorted=[]
var minIndex
for(j=0; j<a.length; j++){
        var min=a[0];
        duzina-=1;
        console.log('\niteration j=' + j +"  duzina: " + duzina + "  min:" + min );
    for(i=0; i<duzina; i++){//finding minimum element
        if(a[i]<=min){ 
            min=a[i];
            minIndex=i;
        }//if closed  
    }//for i closed
    sorted[j]=min 
    console.log('Sorted array: '+ sorted);
    for(s=0; s<duzina; s++){//eliminating min element from a array
        
        if(s!==(duzina-1)){
            
            if (s<minIndex){

            }else if (s>=minIndex){
                a[s]=a[s+1];
            }//inner if closed

        }else{
        a[s]='deleted';// the delete value on last element
            
        }//if closed
    }//for s closed
    console.log('a array : '+ a);

}//for j closed
console.log("\n \nfirst element larger than minimum is: " + sorted[1]);


//2*
var a=[-17,4,-15, 3, -2, 2, 2, -1, 6, 7];
min=+100000000;  //+inf
for(i=0; i<=1; i++){
    console.log("iteration " + i )
    min2=+1000000000;  //+inf
    for(j=0; j<a.length; j++){
        
        if(min>=a[j] && i===0){
            min=a[j];
            var indMin=j;
            console.log("minimum " + min + " index " + indMin)
        }else if(min2>=a[j] && i===1 && j!==indMin){
            a[indMin]="minimum";
            min2=a[j];
            console.log("min2: " + min2 )
        }
        // if closed
    }//closed inner for
}//closed for
console.log("minimum is:" +min + " first element larger than minimum:" + min2);


/**Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */
var a=[3, 11, -5, -3, 2]
var sum=0;
for(i=0; i<a.length; i++){
    if(a[i]>0){
        sum+=a[i];
    }
}     
console.log(sum)



/**Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric. */
var a=[2, 4, -2, -2, 4, 2]
var duzina=a.length;
if (duzina%2===0){
    //paran broj elemenata u nizu
    for(i=0; i<duzina/2; i++){
        if(a[i]===a[duzina-1-i]){
            var b=true;
        }else{
            var b=false;
        }
    }
    if(b===true){
        console.log("paran brooj elemenata,simetrican");
    }else{
        console.log("paran brooj elemenata,nesimetrican");

    }
}else{
    //neparan broj elemenata u nizu
    for(i=0; i<(duzina-1)/2; i++){
        if(a[i]===a[duzina-1-i]){
            var c=true;
        }else{
            var c=false;

        }
    }
    if(c===true){
        console.log("neparan brooj elemenata,simetrican");
    }else{
        console.log("neparan brooj elemenata,nesimetrican");

    }
}



/**Write a program that intertwines two arrays. You can assume the arrays are of the same
length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/
var a=[4, 5, 6, 2];
var b=[3, 8, 11, 9];
var c=[];
var j=-1;
for(i=0; i<a.length; i++){
    j=j+1;
    c[j]=a[i];
    j=j+1;
    c[j]=b[i];
}
console.log(c);



/**Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */
//radi samo ako su iste duzine
var a=[4, 5, 6, 2];
var b=[3, 8, 11, 9];
var c=[];
for(i=0; i<a.length; i++){
    c[i]=a[i];
    c[i+a.length]=b[i];
}
console.log(c)



/**Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2] */

//with additional array
var a = [4, 6, 2, 8, 2, 2];
var j=-1;
delA=[];
e=2;
for(i=0; i<a.length; i++){
    if(e!==a[i]){
        j+=1;
        delA[j]=a[i];
    }
}
console.log(delA)

/**Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */
var e=78;
var p=3;
var a=[2, -2, 33, 12, 5, 8];
if(p<a.length && p>=0){

	for(j=a.length; j>p; j--){
		a[j]=a[j-1];
	}//for closed

}else{
console.log("error");
}//if cosed
a[p]=e;
console.log(a);



