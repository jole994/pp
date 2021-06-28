"use strict";

(function (){

    function Person(name,surname){
        if( !name || !surname){
            throw new Error("ERROR!You have to insert name and surname!")
        }
        this.name=name;
        this.surname=surname;
        this.getData=function(){
            return (`${name} ${surname}`);
        }
    }

    function Seat( number=(Math.floor( 91 * Math.random() + 10)),category="e"){

        if( !number ){
            throw new Error("ERROR!You have to insert number!")
        }
        if(category !== 'e' && category !=='b'){
            throw new Error("ERROR!You have to insert 'b' or 'e' category!")
        }
        this.number=number;
        this.category=category;
        this.getData=function(){
            return (`${this.number}, ${this.category}`);
        }
    }

    function Passenger(person,seat){
        if( !person || !(person instanceof Person) || !seat || !(seat instanceof Seat)){
            throw Error("invalid input")
        }
        this.person=person;
        this.seat=seat;
        this.getData=function (){
            return `${seat.getData().toUpperCase()}, ${person.getData()}`;
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
            let day=this.date.getDate();
            let month=this.date.getMonth() + 1;
            let year=this.date.getFullYear();
            let result= `   ${day}.${month}.${year}, ${relation} 
    `
            this.listOfPassengers.forEach(  function(elem){
                result +=`  ${elem.getData()}
    `
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
            let count=0;
            this.listOfFlights.forEach( function(element){
                count += element.listOfPassengers.length;
            })
            let result= `Airport: ${this.name}, total passengers:${count}
`;
            this.listOfFlights.forEach(  function(elem){
                result+=`${elem.getData()}
`;
            } )
            return result;
        }
    }

    function createFlight(relation,date){
        return new Flight(relation,date);
    }

    function createPassenger(firstName, lastaName, seatnumber, category){
        let p=new Person(firstName,lastaName);
        let s=new Seat(seatnumber,category);
        return new Passenger(p,s);
    }

    try {
		let nikolaTesla = new Airport()
		let belgradeNY = createFlight("Belgrade - New York", "Oct 25 2017")
		let barcelonaBelgrade = createFlight("Barcelona - Belgrade", "Nov 11 2017")
		let passenger1 = createPassenger("John", "Snow", 1, "b")
		let passenger2 = createPassenger("Cersei", "Lannister", 2, "b")
		let passenger3 = createPassenger("Daenerys", "Targaryen", 14)
		let passenger4 = createPassenger("Tyrion", "Lannister")
		belgradeNY.addPassenger(passenger1)
		belgradeNY.addPassenger(passenger2)
		barcelonaBelgrade.addPassenger(passenger3)
		barcelonaBelgrade.addPassenger(passenger4)
		nikolaTesla.addFlight(belgradeNY)
		nikolaTesla.addFlight(barcelonaBelgrade)

		console.log(nikolaTesla.getData());
	} catch (error) {
		console.log(`Error message: + ${error.message}`);
	}

})();


