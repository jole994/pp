var number=10;
/**if (number===1) {
    console.log("broj je 1")
} else if (number ===2) {
    console.log("broj je 2")
} else if (number===3) {
    console.log("broj je 3")
}else if (number===4) {
    console.log("broj je 4")
}else if (number===5) {
    console.log("broj je 5")
} else {
    console.log("broj je manji od 1 ili veci od 5")
}
*/
switch (number) {
    case 1:
        console.log("broj je 1")
        break;
    case 2:
        console.log("broj je 2")
        break;
    case 3:
        console.log("broj je 3")
         break;
    case 4:
        console.log("broj je 4")
        break;
    case 5:
        console.log("broj je 5")
        break;
    default:
        console.log("broj je manji od 1 ili veci od 5")
        break;
}

/** 
1.  Write a program that shows text representation of a day in a week for a number input from
    1 to 7. Print output in console.
    For input 1, output should be “Monday”.
2.  Write a program that shows text representation of a day in a week for a number input from
    1 to 7. All other cases output a message explaining that input must be a number between 1
    and 7.*/
var day=10;
switch (day) {
    case 1:
        console.log("ponedeljak")
        break;
    case 2:
        console.log("utorak")
        break;
    case 3:
        console.log("sreda")
         break;
    case 4:
        console.log("cetvrtak")
        break;
    case 5:
        console.log("petak")
        break;
    case 6:
        console.log("subota")
        break;
    case 7:
        console.log("nedelja")
        break;
    default:
        console.log("Broj mora biti u intervalu izmedju 1 i 7")
        break;
}

/**Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”. */
var day=2;
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("It’s weekday")
        break;
    case 6:
    case 7:
        console.log("It’s weekend")
        break;
    default:
        console.log("Input must be number between 1 and 7")
        break;
}

/**Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”. */
var month=1;
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
         break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("Jun")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
         console.log("August")
         break;
    case 9:
        console.log("September")
        break;
    case 10:
    console.log("October")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
         break;
    default:
        console.log("Input must be a number between 1 and 12")
        break;
}

/**Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12. */
var month=1;
switch (month) {
    case 1:
    case 2:
    case 12:
        console.log("Winter")
         break;
    case 3:
    case 4:
    case 5:
        console.log("Spring")
        break;
    case 6:
    case 7:
    case 8:
         console.log("Summer")
         break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn")
        break;
    default:
        console.log("Input must be a number between 1 and 12")
        break;
}

/**Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A - &quot;Good job&quot;&quot;, B - &quot;Pretty good&quot;&quot;, C -
&quot;Passed&quot;&quot;, D - &quot;Not so good&quot;&quot;, F - &quot;Failed&quot;. Input different from letters A-F outputs a message
&quot;Unknown grade&quot;. */
var grade="C";
switch (grade) {
    case "A":
        console.log("Good job")
        break;
    case "B":
        console.log("Pretty good")
        break;
    case "C":
        console.log("Passed")
         break;
    case "D":
        console.log("Not so good")
        break;
    case "F":
        console.log("Failed")
        break;
    default:
        console.log("Unknown grade")
        break;
}
/**Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city&quot;. */
var city="Beograd"
switch (city) {
    case "Beograd":
    case "Novi Sad":
    case "Cacak":
    case "Nis":
        console.log("Srbija");
         break;
    case "Minhen":
    case "Berlin":
    case "Frankfurt"
        console.log("Nemacka");
        break;
    case "Budva":
    case "Podgorica":
    case "Herceg Novi":
    case "Petrovac":
        console.log("Crna Gora");
    case "Atina":
    case "Solun":
        console.log("Grcka");
    case "Rim":
    case "Milano":
    case "Venecija":
    case "Firenca":
        console.log("Italija");
    default:
        console.log("Nije definisano");
        break;
}

/**Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero! */
var a="h";
var b=0;
operator="*";
if(typeof(a)==="number" && typeof(b)==="number" ){

    switch (operator) {
        case "-":
            console.log(a-b)
            break;
        case "+":
            console.log(a+b)
            break;
        case "/":
                if (b===0) {
                console.log("b is zero")
                } 
            break;
            console.log(a/b)
            break;
        case "*":
            console.log(a*b)
            break;
    }

}else{
    console.log("nije unet broj kao vrednost varijable")
}



