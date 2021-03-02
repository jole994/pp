/**Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is - */
var a=3;
var b=0;
var c=7;
if (a*b*c > 0 ) {
    console.log('result is positive, result:' + a*b*c);
}else if (a*b*c < 0 ){
    console.log('result is negative, result:' + a*b*c);
}else{
    console.log('result is zero');
}

/**Write a conditional statement to find the largest of five numbers. Display the result in the
console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0 */
var a1=1;
var a2=2;
var a3=3;
var a4=4;
var a5=4;
    if (a1>=a2 && a1>=a3 && a1>=a4 && a1>=a5) {
        console.log(a1);
    }else if (a2>=a1 && a2>=a3 && a2>=a4 && a2>=a5){
        console.log(a2);
    }else if (a3>=a2 && a3>=a1 && a3>=a4 && a3>=a5) {
        console.log(a3);
    }else if (a4>=a2 && a4>=a1 && a4>=a3 && a4>=a5){
        console.log(a4);
    }else if (a5>=a2 && a5>=a1 && a5>=a3 && a5>=a4){
        console.log(a5);
    }

/**Write a conditional statement to print three numbers as sorted number list. */
var a=1;
var b=3;
var c=2;
var max=0;
var sre=0;
var min=0;


if (a>b && a>c) {
     max=a
    if(b>c) {
         sre=b
         min=c
    } else {
         sre=c
         min=b
    }
};
if (b>a && b>c) {
     max=b
    if(a>c) {
         sre=a
         min=c
    } else {
         sre=c
         min=a
    }
};
if (c>a && c>b) {
     max=c
    if(a>b) {
         sre=a
         min=b
         } else {
         sre=b
         min=a
     }
};
console.log(max,sre,min);

/**Write a program to check if the variable is a number and if it’s a number, check if it is
divisible by 2. If it is, print the result, if not, show “X”. */
var a=2;
if (typeof(a)==="number") {
        if(a%2==0) {
            console.log("number is divisible by 2,result of dividing with 2 is "+ a%2 )
        }else{
            console.log("X")
        }
}else{
    console.log("variable is not number")
}

/**Write a program that compares two numbers and displays the larger. Display the result in
the console. */
var a=1;
var b=3;
var maksimalniBroj=0;
if (a>b) {
    maksimalniBroj=a;
}else {
    maksimalniBroj=b;
}
console.log(maksimalniBroj);

/**Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] */
