/* Write a program that draws a triangle of a given size n. For example, if the size of triangle
is 5 the program should draw ( height is number of rows (n))
    .       1.
   . .      2.
  .   .     3.
 .     .    4.
. . . . .   5.

*/

var n=12;
var string="";
function triangle(){
    for (r=1; r<=n; r++){                                //for rows
        for(c=1; c<=(n*2-1); c++){                       //for columns
                                                         //console.log("r="+ r + "  c=" + c)
            if(r===n){
                for(b=1; b<=n; b++){
                    string=string + ". "
                }
            break;
            }else if(c===n && r===1){                     //top
                string=string + ".";
            }else if (  c===(n-r+1) || c===(n+r-1)  ){
                string=string + "."
            }else{
                string=string + " "
            }
                                                            //console.log(string)
        } 
        string=string + "\n"     
        
    }
    return string;
}
console.log(triangle(n));


/**
 Write a program that draws a rhomb of a given size n. For example, if the size of 5 the program 
 should draw:
  .     1.row
 . .    2.row
.   .   3.row
 . .    4.row
  .     5.row

 */
var n=5;
var string="";
function ROMB(){
    if(n%2!==0){
        for (r=1; r<=(n+1)/2; r++){
        //top part
            for(c=1; c<=n; c++){                                                                                                             //console.log("r=" + r + "  c=" + c)
                    if(c===(n+1)/2 && r===1){
                        string= string + ".";
                                                //console.log(string + "if condition is true")
                    }else if( (c===((n+1)/2)-r+1 && r>1) || (c===((n+1)/2)+r-1 && r>1)){
                        string= string + ".";
                                                //console.log(string + "else if condition is true")
                    }else{
                        string= string + " ";
                                                //console.log(string + "else block running")
                    }                                                       
            }             
                string=string + "\n";
        }                                           
        //bottom part
            for(r=(n+1)/2+1; r<=n; r++){
                    for(c=1; c<=n; c++){
                                                                                //console.log("r=" + r + "  c=" + c)
                        if(c===(n+1)/2 && r===n){
                            string= string + ".";
                                                                                //console.log(string + "if condition is true")
                        }else if( c===((n+1)/2)+(n-r) && r<n  ||  c===((n+1)/2)-(n-r) && r<n  ){
                            string= string + ".";
                                                                                //console.log(string + "else if condition is true")
                        }else{
                            string= string + " ";
                                                                                //console.log(string + "else block running")
                        }
                    }
                    string=string + "\n";
            }

    console.log( string);
    }else{
        string=string + "Please enter odd value"
    }
return string;
}
console.log(ROMB(n));


/*
*     *  1.
 *   *   2.
  * *    3.
   *     4.  = row
  * *    5.
 *   *   6.
*     *  7.
1234567 =column
*/

var n=11;
var string="";
function X(){
    if(n%2!==0){
        for(r=1; r<=n; r++){
            for(c=1; c<=n; c++){

                if (  r===c || r===(n+1-c)  ){
                    string=string+ "*";
                }else{
                    string=string + " ";
                }
            }
                string=string + "\n";
        }
    }else{
        string=string+"Please enter odd number!"
    }
    return string;
}
console.log(X(n));