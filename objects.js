
/**Create an object that represents your favourite coffee. Please include coffee name, 
strength, flavour, milk, sugar, … everything you like*/
var coffee = {
    name: 'Nes Caffe',
    strength: '1',
    flavour: 'classic',
    milk: 'yes',
    sugar: 'without'
}

/** Create an object that represents your favourite movie. Please include title, actors,
 director, genre, popularity.*/
var movie={
    title:'Biutiful',
    actors={
        main_actor:'Javier Bardem',
        actor1:'Maricel Álvarez',
        actor2:'Hanaa Bouchaib'
    },
    director:'Alejandro G. Iñárritu ',
    genre:'drama',
    popularity:'7.5'
}



/**Write a function that creates an object that represents a project. Each project is described by: 
 description,  programming language, git repository, boolean status that says if the project is in
 development or not. Add a method that prints out the project's repository,  a method that checks if
the project is written in JavaScript as well as a method that checks if the project is in development or not. */
function CreateObject (desc, progLang, gitRep, boolSt) {
    
    this.description= desc;
    this.programmingLanguage= progLang;
    this.gitRepository=gitRep;
    this.booleanStatus= boolSt;
    this.printGitRepository= function(){
        console.log(this.gitRepository);
    };
    this.checkingIfJS= function(){
        console.log (this.programmingLanguage === 'JavaScript');
    };
    this.checkIfITIsInDevelopment= function(){
        console.log (this.booleanStatus ? 'Project is in development': 'Project is not in development');  
    };
    
}

var miroslav = new CreateObject('prvi projekat','JavaScript', '//miroslav828/pp', false);
console.log(miroslav);
miroslav.printGitRepository();
miroslav.checkingIfJS();
miroslav.checkIfITIsInDevelopment();

var jovana=new CreateObject("second project","html", "//Jole994/pp/gitHub",false)
console.log(jovana);
jovana.printGitRepository();
jovana.checkingIfJS();
jovana.checkIfITIsInDevelopment();


/**Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared for 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients. */

function MakeMeal(name, typeCuis, compl, ingridArray, prepTimeInMinutes, instruction){
    this.name=name;
    this.typeOfCuisine= typeCuis;
    this.comlexity = compl;
    this.ingridients = ingridArray;
    this.preparingTime = prepTimeInMinutes;
    this.preparingInstruction = instruction;
    this.printIngredients=function(){
        console.log("All ingredients needed for " + this.name + " recipe:");
        console.log(this.ingridients);
    };
    this.checkingIfPreparationIsEasy=function(){
        var time=parseInt(this.preparingTime);
        var check= (time>15)? "Preparation length is longer than 15 minutes":"Preparation length is less than 15 minutes";
        console.log(check);
    };
    this.changeTypeOfCuisine=function(newCuisine){
        this.typeOfCuisine=newCuisine;
    }
    this.deleteIngredient=function(deleteThis){
        var newArr=[];
        for(var i=0;i<this.ingridients.length; i++){
            if(deleteThis!==this.ingridients[i]){
                newArr[newArr.length]=this.ingridients[i];
            }
        }
        this.ingridients=newArr;
    }

}


var pizza=new MakeMeal('pizza', 'Italian', '2', ['flour', 'eggs', 'salt', 'ham', 'cheese', 'mushrooms', 'ketchup'], '45min', 'medium');
pizza.changeTypeOfCuisine("Serbian");
console.log(pizza);
pizza.printIngredients();
pizza.checkingIfPreparationIsEasy();
pizza.deleteIngredient("eggs");
console.log(pizza);