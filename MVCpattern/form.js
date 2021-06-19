//create movie 
var selectGenreNode=document.getElementById("genre");
var buttonMovieCreateNode=document.getElementById("buttonMovieCreate");
var selectMovieNode=document.getElementById("movie-select");

function handlerCreateMovie(){

    try{
        document.getElementById("movie-error").textContent="";
        var inputTextMovieTitle=document.querySelector(".title").value;
        var inputTextMovieLength=document.querySelector(".length").value;
        
        var genreObj=new Genre(selectGenreNode.value);
        var movieObj=new Movie(inputTextMovieTitle,genreObj,inputTextMovieLength);
    
        var ULOfMovies=document.getElementById('movie-list');
        var LItoAdd = document.createElement("li");
        ULOfMovies.appendChild(LItoAdd);
        LItoAdd.innerHTML =  movieObj.getData();

        document.querySelector(".title").value="";
        document.querySelector(".length").value="";
        selectGenreNode.value="";


        var optionMake = document.createElement("option");
        optionMake.textContent=movieObj.getData();
        selectMovieNode.appendChild(optionMake);
    }catch(err){
        document.getElementById("movie-error").textContent=err;
    }

}
buttonMovieCreateNode.addEventListener("click",handlerCreateMovie);



//create program
var selectDateNode=document.getElementById("date");
var buttonProgramCreateNode=document.getElementById("buttonProgramCreate");
var selectProgramNode=document.getElementById("program-select");

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
        var programObj=new Program(choosenDateCorrected,0);
        var ULOfPrograms=document.getElementById('program-list');
        
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

    }catch(err){
        document.getElementById("program-error").textContent=err;
    }

}
buttonProgramCreateNode.addEventListener("click",handlerCreateProgram);




//add movie to program
var buttonAddMovieToProgram=document.getElementById("buttonAddMovieToProgram");
function handlerAddMovieToProgram(){
    try(){

    }catch{

    }
}



buttonAddMovieToProgram.addEventListener("click",handlerAddMovieToProgram);





