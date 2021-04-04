/**1.Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 
 */
function vowels(string) {
    var brojac = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'A' || string[i] === 'e' || string[i] === 'E' || string[i] === 'i' || string[i] === 'I' || string[i] === 'o' || string[i] === 'O' || string[i] === 'u' || string[i] === 'U') {
            brojac++
        }
        
    }return console.log (brojac);
}
vowels('treba izbrojati sve samoglasnike');


/**2.Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]  */

function combine(arr1,arr2){
    var newArr=[];
    var smaler=arr1;
    var bigger=arr2;
    if(arr1.length >= arr2.length){
        smaler=arr2;
        bigger=arr1;
    }
    for (var i=0; i<smaler.length; i++ ){
        newArr[newArr.length]=arr1[i];
        newArr[newArr.length]=arr2[i];
    }
    for(k=smaler.length; k<bigger.length; k++){
        newArr[newArr.length]=bigger[k];
    }
    return newArr;
}
console.log(combine([5, 6, 7, 1, 1, 1, 1, 1], [9,2,3]));

/**3.Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2] */
function rotation(arr, k){
    var s;
    if(arr.length%k !==0){
        return "k is not valid number"
    }
    for(i=0; i<arr.length-k; i+=k){
        for(j=i; j<i+k; j++){
            s=arr[j];
            arr[j]=arr[j+k];
            arr[j+k]=s;
        }
    }
    
        return arr;
}
var result=rotation([1,2,3,4,5,6],2);
console.log(result);


/*4.Write a function that takes a number and returns array of its digits.* */
function arrOfDig(num){
    var string="";
    string +=num;
    var arr=[];
    for(i=0; i<string.length; i++){
        arr[i]=parseInt(string[i]);
    }
    return arr;
}
var result= arrOfDig(132456798);
console.log(result);



/**5.Write a program that prints a multiplication table for numbers up to 12. */

//result with correct values, but without corrected spaces between elements of table
function multTable(num){
    var result="";
    for(r=0; r<=num; r++){
        for(c=0; c<=num; c++){
            if(r===0){
                if(c===0){
                result += '* ';
                }else if(c===num){
                result += c +' \n';
                }else{
                result += c + " ";
                }
            }else if(c===num){
                result +=(c*r)+ " \n"
            }else if(c===0){
                result += r + " ";
            }else{
                result +=(c*r) + " ";
            }
        }
    }
    return result;
}
console.log(multTable(12));

//result with correct spaces between elements in tables
function multTable(num){
    var result="";
    var space="";
    space+=(num*num);
    br=space.length+1;
    space="";
    var d;
    for(r=0; r<=num; r++){
        for(c=0; c<=num; c++){
            if(r===0){
                if(c===0){
                    space+='*';
                    if(space.length !==br){
                        d=space.length;
                        for(s=d; s<=br; s++){
                            space+=" ";
                        }
                    }
                result += space;
                space="";
                }else if(c===num){
                    space+=c;
                    if(space.length !==br){
                        d=space.length;
                        for(s=d; s<=br; s++){
                            space+=" ";
                        }
                    }
                result += space +'\n';
                space="";
                }else{
                    space+=c;
                    if(space.length !==br){
                        d=space.length;
                        for(s=d; s<=br; s++){
                            space+=" ";
                        }
                    }
                result += space ;
                space="";
                }
            }else if(c===num){
                space+=(c*r);
                if(space.length !==br){
                    d=space.length;
                    for(s=d; s<=br; s++){
                        space+=" ";
                    }
                }
                result +=space + "\n";
                space="";
            }else if(c===0){
                space+=r;
                if(space.length !==br){
                    d=space.length;
                    for(s=d; s<=br; s++){
                        space+=" ";
                    }
                }
                result += space ;
                space="";
            }else{
                space += (c*r);
                if(space.length !==br){
                    d=space.length;
                    for(s=d; s<=br; s++){
                        space+=" ";
                    }
                }
                result +=space ;
                space="";
            }
        }
    }
    return result;
}
console.log(multTable(30));

