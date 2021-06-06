"use strict";

(function (){
    function Person(name,surname){
        if( !name || !surname){
            throw new Error("ERROR!You have to insert name and surname!")
        }
        this.name=name;
        this.surname=surname;
        this.getData=function(){
            return this.name + " " + this.surname;
        }
    }

    function Seat(number,category){
        category=category || "e";
        number=number || Math.floor( 91 * Math.random() + 10 );//or seal 89
        if( !number ){
            throw new Error("ERROR!You have to insert number!")
        }
        if(category !== 'e' && category !=='b'){
            throw new Error("ERROR!You have to insert 'b' or 'e' category!")
        }
        this.number=number;
        this.category=category;
        this.getData=function(){
            return this.number + ", " + this.category;
        }
    }

    function Passenger(person,seat){
        if( !person || !(person instanceof Person) || !seat || !(seat instanceof Seat)){
            throw Error("invalid input")
        }
        this.person=person;
        this.seat=seat;
        this.getData=function (){
            return seat.getData().toUpperCase() + ", "+ person.getData();
        }       
    }

    function Flight(relation,date){
        if( !relation || !date){
            throw new Error("ERROR!You have to insert relation and date!")
        }
        this.relation=relation;
        this.date=new Date(date);
        this.listOfPassengers=[];
        this.addPassenger=function(passenger){
            if( !passenger || !(passenger instanceof Passenger) ){
                throw Error("invalid input")
            }
            this.listOfPassengers.push(passenger);
        }
        this.getData=function(){
            var day=this.date.getDate();
            var month=this.date.getMonth() + 1;
            var year=this.date.getFullYear();
            var result= "\t" + day + "." + month + "." + year + "," + relation + "\n";
            this.listOfPassengers.forEach(  function(elem){
                result +="\t\t" + elem.getData() + "\n";
            })
            return result;
        }
    }

    function Airport(listOfFlights){
        this.name="Nikola Tesla";
        this.listOfFlights=[];
        this.addFlight=function(flight){
            if( !flight || !(flight instanceof Flight )){
                throw Error("you have to insert valid data")
            }
            this.listOfFlights.push(flight);
        }
        this.getData=function(){
            var count=0;
            this.listOfFlights.forEach( function(element){
                count += element.listOfPassengers.length;
            })
            var result= this.name + ", total passengers:" + count + "\n";
            this.listOfFlights.forEach(  function(elem){
                result+=elem.getData() + "\n";
            } )
            return result;
        }
    }

    function createFlight(relation,date){
        return new Flight(relation,date);
    }

    function createPassenger(firstName, lastaName, seatnumber, category){
        var p=new Person(firstName,lastaName);
        var s=new Seat(seatnumber,category);
        return new Passenger(p,s);
    }

    try {
		var nikolaTesla = new Airport()
		var belgradeNY = createFlight("Belgrade - New York", "Oct 25 2017")
		var barcelonaBelgrade = createFlight("Barcelona - Belgrade", "Nov 11 2017")
		var passenger1 = createPassenger("John", "Snow", 1, "b")
		var passenger2 = createPassenger("Cersei", "Lannister", 2, "b")
		var passenger3 = createPassenger("Daenerys", "Targaryen", 14)
		var passenger4 = createPassenger("Tyrion", "Lannister")
		belgradeNY.addPassenger(passenger1)
		belgradeNY.addPassenger(passenger2)
		barcelonaBelgrade.addPassenger(passenger3)
		barcelonaBelgrade.addPassenger(passenger4)
		nikolaTesla.addFlight(belgradeNY)
		nikolaTesla.addFlight(barcelonaBelgrade)
		console.log(nikolaTesla.getData());
	} catch (error) {
		console.log('Error message:' + error.message);
	}

})();


