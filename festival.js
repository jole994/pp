"use strict";
(function (){

    function Genre(name){
        if( !name){
            throw new Error("You have to insert name value");
        }
        this.name=name;
        this.getData=function (){
            return this.name[0].toUpperCase() + this.name.charAt(this.name.length-1).toUpperCase();
        }
    }

    function Movie(ti,ge,le){
        if( !ti || !ge || !le){
            throw new Error("You have to insert title,genre and length ");
        }
        if( !(ge instanceof Genre)  ){
            throw new Error("You have to insert genre which is instance of Genre ");
        }
        this.title=ti;
        this.genre=ge;
        this.length=le;
        this.getData=function (){
            return this.title + ", " + this.length + ", " + this.genre.getData();
        }
    }

    function Program(date,numberOfMovies){
        if( !date || !numberOfMovies ){
            throw new Error("You have to insert date and total number of movies ");
        }
        this.date=new Date(date);
        this.listOfMovies=[];
        this.numberOfMovies=numberOfMovies;
        this.addMovie=function(movie){
            if( !(movie instanceof Movie)  ){
                throw new Error("You have to insert movie which is instance of Movie ");
            }
            this.listOfMovies.push(movie);
        }
        this.getData=function(){
            var y=this.date.getFullYear();
            var m=this.date.getMonth() + 1;
            var d=this.date.getDate  ();
            var result= d + "." + m + "." + y + ",program duration ";
            var totalLength=0;
            var string="";
            this.listOfMovies.forEach( function(element){
            totalLength+=parseInt(element.length);
            string+="\t" + element.title + ", " + element.length + " " + element.genre.getData() +"\n"
            });
            result+=totalLength +  "min" + "\n" + string;
            return result;
        }
    }

    function Festival (name,totalNumberOfMovies){
        if( !name || !totalNumberOfMovies ){
            throw new Error("You have to insert name, number of movies in al programs");
        }
        this.name=name;
        this.listOfPrograms=[];
        this.totalnumberOfMovies=totalNumberOfMovies;
        this.addProgram=function (program){
            if( !(program instanceof Program)  ){
                throw new Error("You have to insert program which is instance of Program ");
            }
            this.listOfPrograms.push(program);
        }
        this.getData=function(){
            var result=this.name + " has ";
            var numOfMovies=0;
            this.listOfPrograms.forEach(function(element){
                numOfMovies+=element.listOfMovies.length;
            })
            result+=numOfMovies + " movie titles \n" ;
            this.listOfPrograms.forEach(function(elem){
               result+=elem.getData();
            })
            return result;
        }
    }

    function createMovie(movieTitle, movieLength,genre){
        return new Movie(movieTitle,genre,movieLength);
    }

    function createProgram(date,numberOfMovies){
        return new Program(date,numberOfMovies)
    }
////////////////////////////
 
    var zanr1=new Genre("drama");
    var zanr2=new Genre("thriller");
    var zanr3=new Genre("crime");
    // console.log(zanr1.getData());
    // console.log(zanr2.getData());
    // console.log(zanr3.getData());
    var film1=new Movie("Biutiful",zanr1,"205min");
    var film2=new Movie("21 grams",zanr2,"100min");
    var film3=new Movie("The Godfather",zanr2,"115min");
    var film4=new Movie("Mullholand Drive",zanr3,"180min");
    var film5=new Movie("The Dark Knight",zanr2,"150min");
    // console.log(film1.getData());
    // console.log(film2.getData());
    // console.log(film3.getData());
    // console.log(film4.getData());
    // console.log(film5.getData());
    var fest1=new Festival("Summer Movie Fest",3);
    var fest2=new Festival("Best Movie Fest",2);
    // console.log(fest1);
    // console.log(fest2);
    var progrf1_1=createProgram("2 5 2017",2);
    var progrf1_2=createProgram("8 7 2007",1);
    var progrf2_1=createProgram("8 7 2007",2);
    // console.log(progrf1_1);
    // console.log(progrf1_2);
    // console.log(progrf2_1);
    progrf1_1.addMovie(film1);
    progrf1_1.addMovie(film2);
    progrf1_2.addMovie(film3);
    progrf2_1.addMovie(film4);
    progrf2_1.addMovie(film5);
    // console.log(progrf1_1.getData());
    // console.log(progrf1_2.getData());
    // console.log(progrf2_1.getData());
    fest1.addProgram(progrf1_1);
    fest1.addProgram(progrf1_2);
    fest2.addProgram(progrf2_1);

    console.log(fest1.getData());
    console.log(fest2.getData());
    
})();