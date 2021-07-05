/**1.Write a function that capitalizes the first letter of each string argument it receives.  
Function arguments: ['hello', 'there', 'ES', 6]
Output: ['Hello', 'There', 'ES']*/

let capitalizeFirst=(...args) =>{
    let newArr=[];
    args.forEach(e => {
            if(typeof e ==="string"){
                let newElem=e[0].toUpperCase() + e.slice(1,e.length);
                newArr.push(newElem);
            }
        })
    return newArr;

}

console.log(capitalizeFirst('hello', 'there', 'ES', 6));

/**2.Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set 
a fixed value of the tax rate (i.e. 20% in Serbia). 
Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
Output2: [ 24, 20 ] // tax only
*/

class Product{
    constructor(name,price){
        this.name=name,
        this.price=price
    }
    getInfo(){
        return `{ name: '${this.name}', price: ${this.price} }`
    }
}
var banana=new Product("Banana","120");
var orange=new Product("Orange","100");
var milk=new Product("Milk","75");
var butter=new Product("Butter","140");
var beer=new Product("Beer","160");
var vegetableOil=new Product("VegetableOil","450");
var water=new Product("Water","160");
const arrayOfProducts=[banana,orange,milk,butter,beer];

let calculateSaleTax=(arr)=>{
    const tax=0.20;
    const arrOfProductsWithTax=[];
    arr.forEach(el=>{
        let newElement=new Product(el.name,el.price*(1+tax));
        newElement=newElement.getInfo()
        arrOfProductsWithTax.push(newElement)
    })
    console.log(arrOfProductsWithTax)

}
calculateSaleTax(arrayOfProducts)


/**3. Write a function that increases each element of the given array by the given value. If the value is
omitted, increase each element of the array by 1.
Input: [4, 6, 11, -9, 2.1], 2
Output: [6, 8, 13, -7, 4.1]**/
let increaseThis=(arr,numberr=1)=>{
    let newArr=[];
    arr.map(el=>{
        newElement=el + numberr;
        newArr.push(newElement);
    })
    return newArr;
}
console.log(increaseThis([1,2,1,2,3],5))



/**4.Write a function that filters all even elements of the array.
Input: [6, 11, 9, 0, 3]
 Output: [6, 0]**/
let filterEven=(arr)=>{
    let newArr=arr.filter(el=>{
        if(el%2===0){return true}
    })
    return newArr;
}

console.log(filterEven([6, 11, 9, 0, 3]))


/**5.Write a function that filters all the strings from the given array that contain substring JS or js.
Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
Output: ['babel.js, 'JS standard' */
filterIfContainsJS=(arr)=>{
    let newArr=arr.filter(el=>{
        console.log(el)
        if(el.indexOf("js") !==-1 || el.indexOf("JS")!==-1){
            return true;
        }
    })
    return newArr;
}
console.log(filterIfContainsJS(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']))

/**6.
Write a function that filters all integer numbers from the given array. 
Input: [1.6, 11.34, 9.23, 7, 3.11, 8] */

filterIfInteger=(arr)=>{
    let newArr=arr.filter(el=>{
        if(parseInt(el)===el){
            return el;
        }
    })
    return newArr;
}
console.log(filterIfInteger([1.6, 11.34, 9.23, 7, 3.11, 8]))




/**7.Write a function that filters all integer arguments that contain digit 5.
Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
Output: [45, 553] */
filterIfIntegerContain5=(...arr)=>{
    let newArr=arr.filter(el=>{
        let stringElement=el.toString();

        if(parseInt(el)===el && stringElement.indexOf("5")!==-1 ){
            return el;
        }
    })
    return newArr;
}
console.log(filterIfIntegerContain5(23, 11.5, 9, 'abc', 45, 28, 553))


/**8.Write a function that returns indexes of the elements greater than 10. 
	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
	Output: 1, 2, 5
*/
greatherThan10=(arr)=>{
    let newArr=[];
    arr.forEach((el,ind)=>{
        if(el>10){
            newArr.push(ind)
        }
    })

    return (newArr);
}
console.log(greatherThan10([1.6, 11.34, 29.23, 7, 3.11, 18]))


/**9.Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals. 
Write a function that prints out the names of persons older than 25. 
Write a function that check if there is a person older than 40.
Write a function that checks if all persons are older than 20.   
 */

const arrObj=[
    {name:"Jovana", age:27},
    {name:"Strahinja", age:27},
    {name:"Stefan", age:7},
    {name:"Jelena", age:41},
    {name:"Vera", age:30}
]

let personOlderthan25=(arrObj) =>{
    
console.log(`
Name of persons older than 25:`)
    let older=arrObj.filter(person=>{
        if(person.age>25){
            return true;
        }
    })        
    older.forEach(element => {
        console.log(element.name)
    })
}


let personOlderthan40=(arrObj) =>{
    console.log(`
Name of persons older than 40:`)
    let older=arrObj.filter(person=>{
        if(person.age>40){
            return true;
        }
    })
    older.forEach(element => {
        console.log(element.name)
    });
}


let personOlderthan20=(arrObj) =>{
    console.log(`
Name of persons older than 20:`)
    let older=arrObj.filter(person=>{
        if(person.age>20){
            return true;
        }
    })
    older.forEach(element => {
        console.log(element.name)
    });
}
personOlderthan20(arrObj)
personOlderthan25(arrObj)
personOlderthan40(arrObj)


/**10.Write a function that checks if the given array is an array of positive integer values. 
	Input: [3, 11, 9, 5, 6]
	Output: yes

	Input: [3, -12, 4, 11]
	Output: no

*/
allPositive=(arr)=>{
    let check="yes"
    arr.forEach(el=>{
        if(el<0){
            check="no";
        }
    })
    return check;
}
console.log(allPositive([-3, 11, 9, 5, 6]))


/**11.Write a function that calculates the product of the elements of the array. 
Input: [2, 8, 3]
Output:  48 */
