//Create constructor functions with properties representing the following:
//Person: name, surname


function Person (name, surname){
    this.name = name;
    this.surname = surname;
   }
   
   //Employee: inherits Person and has job and salary
   
   function Employee (name, surname, job, salary){
       Person.call(this, name, surname);
       this.job = job;
       this.salary = salary;
   }
   Employee.prototype = Object.create(Person.prototype);
   Employee.prototype.constructor = Employee;
   
   Employee.prototype.getData = function(){
       return this.name + ', ' + this.surname + ', '+ this.salary +' Eur';
   }
   Employee.prototype.getSalary = function(){
       console.log(this.salary+ ' Eur');
   }
   Employee.prototype.increaseSalary = function(){
       this.salary = this.salary * 1.1;
   }
   //Developer: inherits from Employee and has specialization

function Developer (name, surname, job, salary, specialization){
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;  
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
    return console.log(this.specialization);
}


//Manager: inherits from Employee and has department

function Manager (name, surname, job, salary, department){
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function (){
    return console.log(this.department);
}
Manager.prototype.changeDepartment = function (newDepartment){
    return this.department = newDepartment;
}
var person1 = new Person ('Pera', 'Peric');
console.log(person1);
var employee1 =new Employee ('Pera', 'Peric', 'vozac', 500 );
console.log(employee1);
var developer1 = new Developer ('Pera', 'Peric', 'vozac', 500, 'kamion');
console.log(developer1);
var manager1 = new Manager ('Pera', 'Peric', 'vozac', 500, 'drumski');
console.log(manager1);
manager1.changeDepartment('zeleznicki');
manager1.getDepartment();
employee1.increaseSalary();
employee1.getSalary();
   