/*Write a program that will iterate from 0 to 10 and display squares of numbers.*/
var i=0;
while(i<=10) {
    console.log(i*i);
    i++;
}


var i=-1;
do{
    i++;
    console.log( i*i );
}while( i < 10 );



for (var i=0;i<=10;i++){
    console.log(i*i);
}

/** Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.*/
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



var i=-1;
do{
    i++;
    if(i===0){
        console.log("nula")
    }else{
            if(i%2===0){
                console.log("paran broj:"+i)
            }else{
                console.log("neparan broj:"+i)
            }
    }
}while(i <= 10);


for (var i=0; i<=10; i++){
    if(i===0){
        console.log("nula")
    }else{
        if(i%2===0){
            console.log("paran broj:" + i);
        }else{
            console.log("neparan broj:" + i);
        }
    }    
}

/**Write a program to sum the multiples of 3 and 5 under 1000. */
var sum=0;
for(var i=0;sum<1000;i++) {
    sum+=3*5;
}
sum=sum-3*5;
console.log("(3*5) *" + (i-1) + "=" + sum)

/**Write a program to compute the sum and product of an array of integers. */
var niz=[1,2,3,4,5,6,7];
var duzina=niz.length;
var sum=0;
for(i=0; i<=duzina-1; i++){
    sum= sum + niz[i];
}
console.log(sum);

/**Write a program which prints the elements of the following array as a single string. */
var x = ['1','A','B','c','r', true, NaN, undefined];
var duzina=x.length
var string=" ";
for(i=0; i<duzina-1; i++){
    string+=x[i];
}
console.log(string)
