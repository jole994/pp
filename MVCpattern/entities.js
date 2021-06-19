function Genre(name){
    if( !name){
        throw new Error("You have to choose genre value");
    }
    this.name=name;
    this.getData=function (){
        return this.name[0].toUpperCase() + this.name.charAt(this.name.length-1).toUpperCase();
    }
}

function Movie(ti,ge,le){
    if( !ti || !le){
        throw new Error("You have to insert title and length ");
    }
    this.title=ti;
    this.genre=ge;
    this.length=le;
    this.getData=function (){
        return this.title + ", " + this.length + "min, " + this.genre.getData();
    }
}






function Program(date,numberOfMovies){
    if( !date ){
        throw new Error("You have to insert date");
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
        var result= d + "." + m + "." + y + ", " + this.numberOfMovies + " movies, program duration: ";
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

