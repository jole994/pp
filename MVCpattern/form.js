//create movie 
var selectGenreNode=document.getElementById("genre");
var buttonMovieCreateNode=document.getElementById("buttonMovieCreate");
var selectMovieNode=document.getElementById("movie-select");
var ULOfMovies=document.getElementById('movie-list');
var listOfMoviesObjects=[];

function handlerCreateMovie(){

    try{
        document.getElementById("movie-error").textContent="";
        var inputTextMovieTitle=document.querySelector(".title").value;
        var inputTextMovieLength=document.querySelector(".length").value;
        
        var genreObj=new Genre(selectGenreNode.value);
        var movieObj=new Movie(inputTextMovieTitle,genreObj,inputTextMovieLength);
    
        var LItoAdd = document.createElement("li");
        ULOfMovies.appendChild(LItoAdd);
        LItoAdd.innerHTML =  movieObj.getData();

        document.querySelector(".title").value="";
        document.querySelector(".length").value="";
        selectGenreNode.value="";

        var optionMake = document.createElement("option");
        optionMake.textContent=movieObj.getData();
        selectMovieNode.appendChild(optionMake);

        listOfMoviesObjects.push(movieObj);

    }catch(err){
        document.getElementById("movie-error").textContent=err;
    }

}
buttonMovieCreateNode.addEventListener("click",handlerCreateMovie);



//create program
var selectDateNode=document.getElementById("date");
var buttonProgramCreateNode=document.getElementById("buttonProgramCreate");
var selectProgramNode=document.getElementById("program-select");
var ULOfPrograms=document.getElementById('program-list');
var listOfProgramObjects=[];


function handlerCreateProgram(){

    try{
        document.getElementById("program-error").textContent="";
        var choosenDate=selectDateNode.value;
        if(choosenDate!==""){

            var choosenDateCorrected="";
            for(var i=0; i<10; i++){
                if(choosenDate[i]==="-"){
                    choosenDateCorrected+=" ";
                }else{
                    choosenDateCorrected+=choosenDate[i];
                }
            }

        }


        var today=Date.now();
        var inputDate=new Date(choosenDateCorrected).getTime();
        if(today>inputDate){
            throw new Error("Can't create Program that has passed or Program that is in progress")
        }

        var programObj=new Program(choosenDateCorrected,0);
        
        for(var i=0;i<ULOfPrograms.children.length;i++){
            if(ULOfPrograms.children[i].innerHTML==programObj.getData()){
                throw new Error("You already created this program")
            }
        }
        
        var LItoAdd = document.createElement("li");
        ULOfPrograms.appendChild(LItoAdd);  
        LItoAdd.innerHTML =  programObj.getData();


        var optionMake = document.createElement("option");
        optionMake.textContent=programObj.getData();
        selectProgramNode.appendChild(optionMake);

        listOfProgramObjects.push(programObj);


    }catch(err){
        document.getElementById("program-error").textContent=err;
    }

}
buttonProgramCreateNode.addEventListener("click",handlerCreateProgram);




//add movie to program
var buttonAddMovieToProgram=document.getElementById("buttonAddMovieToProgram");

function handlerAddMovieToProgram(){
   try{
        document.getElementById("errorAddToProgram").textContent="";
        if(selectProgramNode.value==="" || selectMovieNode===""){
            throw new Error("You have to choose movie and program")
        }
        for(var j=0;j<ULOfPrograms.children.length;j++){

            if(ULOfPrograms.children[j].innerHTML.slice(0,10)===selectProgramNode.value.slice(0,10)){
            
                for(var k=0;k<ULOfMovies.children.length;k++){
                    if(ULOfMovies.children[k].innerHTML===selectMovieNode.value){
                        listOfProgramObjects[j].addMovie(listOfMoviesObjects[k])
                    }
                }
                ULOfPrograms.children[j].innerHTML=listOfProgramObjects[j].getData();

            }
        }
   }catch (err){
       document.getElementById("errorAddToProgram").textContent=err; //ovo manjaj
   }
}

buttonAddMovieToProgram.addEventListener("click",handlerAddMovieToProgram);





