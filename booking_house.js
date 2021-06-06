"use strict";
(function (){
    var continents = {
        AFRICA: "AF",
        ASIA: "AS",
        AUSTRALIA: "AU",
        EUROPE: "EU",
        NORT_AMERICA: "NA",
        SOUTH_AMERICA: "SA",
      };

    function Country(name,odds,continent){
        if( !name || !odds || !continent ){
            throw new Error("insert required values")
        }
        var continetValues=["EU", "AS", "AF", "SA", "NA", "AU"];
         if(continetValues.indexOf(continent)===-1){
            throw new Error("wrong continent value");
         } 
        this.name=name;
        this.odds=odds;
        this.continent=continent;
    }

    function Person(name,surname,dateOfBirth){ 
        if( !name || !surname || !dateOfBirth){
            throw new Error("insert required values");
        }
        this.name=name;
        this.surname=surname;
        this.dateOfBirth=new Date(dateOfBirth);
        this.getNameSurnameDate=function (){
            var y=this.dateOfBirth.getFullYear();
            var m=this.dateOfBirth.getMonth() + 1;
            var d=this.dateOfBirth.getDate();
            var result= this.name + " " + this.surname + " " + d + "." + m + "." + y;
            return result;
        }
    }

    function Player(person, betAmount, country){
        if( !person || !betAmount || !country || !(country instanceof Country)){
            throw new Error("insert required values");
        }
        this.person=person;
        this.betAmount=betAmount;
        this.country=country;
        this.getData=function(){
            for(var i=1; i<this.country.name.length-1; i++){
                var catchLetter=['a', 'e', 'i', 'o', 'u'].indexOf(this.country.name[i]);
                if(catchLetter === -1){
                    catchLetter=country.name[i];
                    break;
                }
            }
            var today=new Date();
            return this.country.name[0].toUpperCase() + catchLetter.toUpperCase() + ", " + (this.betAmount*country.odds) 
            + " eur, " + person.name + " " + person.surname + ", " + (today.getFullYear()- person.dateOfBirth.getFullYear());
        }
    }

    function Address(country,city,postalCode,street,numStreet){
        if( !country || !city || !postalCode || !street || !numStreet){
            throw new Error("insert required values");
        }
        this.country=country;
        this.city=city;
        this.postalCode=postalCode;
        this.street=street;
        this.numStreet=numStreet;
        this.getAddress=function(){
            for(var i=1; i<this.country.length-1; i++){
                var catchLetter=['a', 'e', 'i', 'o', 'u'].indexOf(this.country[i]);
                if(catchLetter === -1){
                    catchLetter=country[i];
                    break;
                }
            }
            return this.street + " " + this.numStreet + ", " + this.postalCode + " " + this.city + ", " 
            + country[0].toUpperCase()+catchLetter.toUpperCase();
        }
    }


    function BettingPlace(adress){
        if( !adress){
            throw new Error("insert required values");
        }
        this.adress=adress;
        this.listOfPlayers=[];
        this.addPlayers=function(player){
            this.listOfPlayers.push(player);
        }
        this.getData=function(){
            var saberi=0;
            this.listOfPlayers.forEach(function(elem){
                saberi += elem.betAmount*elem.country.odds;
            })
            return this.adress.street + " " + this.adress.numStreet + ", " + this.adress.postalCode + " " + this.adress.city
            + ", sum of all bets: " + saberi + 'eur';
        }
    }

    function BettingHouse(competition){
        if( !competition ){
            throw new Error("insert required values");
        }
        this.competition=competition;
        this.nummberOfPlayers=0;
        this.BettingPlaces=[];
        this.addBettingPlaces=function(place){
            this.BettingPlaces.push(place);
        }
        this.getInfo=function(){
            var counterForSerb=0;
            var countPlayers=0;
            var result=this.competition + ", " +this.BettingPlaces.length + " betting places, " ;
            this.BettingPlaces.forEach(function(element){
                countPlayers+=element.listOfPlayers.length;
            })
            result+=countPlayers + " bets\n";
            this.BettingPlaces.forEach(function(elem){
                result += "\t" + elem.getData() + "\n";
                elem.listOfPlayers.forEach(function(el){
                   result+= "\t\t" +el.getData() + '\n';
                   if(el.country.name==="Serbia"){
                       counterForSerb++
                   }
                })
            })
            return result + "There are " + (counterForSerb) + " bets on Serbia";
        }
    }

    function createPlayer(person, betAmount, country){
        return new Player(person, betAmount, country);
    }

    function createBettingPlace(adress) {
        return new BettingPlace(adress)
    }
    ////////////////////////////////////////
    var serbia=new Country("Serbia",3,continents.EUROPE);
    var italy=new Country("Italy",2,continents.EUROPE);
    var uae=new Country("United Arab Emirates",3,continents.ASIA);

    var person1=new Person("Jovana","Obradovic","Jan 1 1994");
    var person2=new Person("David","Stanic","Feb 7 1990");
    var person3=new Person("Milos","Nikolic","May 4 2000");
    var person4=new Person("Stefan","Obradovic","April 8 1985");

    
    var adress1=new Address("Serbia","Arilje",31230,"Ulica","bb");
    var adress2=new Address("Serbia","Belgrade",11000,"Ulica ulica","45");
    //console.log(adress1.getAddress())

    var place1=createBettingPlace(adress1);
    var place2=createBettingPlace(adress2);

    var player1=createPlayer(person1,2000,serbia);
    var player2=createPlayer(person2,4000,serbia);
    var player3=createPlayer(person3,8000,uae);
    var player4=createPlayer(person4,5000,italy);
    //console.log(player1.getData())

    place1.addPlayers(player2);
    place2.addPlayers(player3);
    place2.addPlayers(player1);
    place2.addPlayers(player4);
    //console.log(place1.getData())

    var house1=new BettingHouse("Sport");
    house1.addBettingPlaces(place1);
    house1.addBettingPlaces(place2);
    console.log(house1.getInfo())


})();



