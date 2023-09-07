// Basically in this we are doing linkaging of the objects

/*

Ques.
Create a Person Function , Having Id, Name, Age, City
Create a Employee Function. Having Salary, Bonus, CompanyName
Make a RelationShip b/w Employee and Person
BY Using proto​​ and prototype
Hint : Use Call 

Think about how Chain RelationShip (Inheritance) and One Function Constructor call another Function Constructor like super constructor call.

*/


// Person function constrcutor

function Person(id, name, city){
    this.id = id;
    this.name = name;
    this.city = city;
}
Person.prototype.printPersonDetails = function(){
    console.log(`Id ${this.id} Name ${this.name} City ${this.city}`);
}



// Employee function constructor

function Employee(salary, bonus, dept){
    this.salary = salary;
    this.bonus = bonus;
    this.dept = dept;
}
Employee.prototype.printEmployeeDetails = function(){
    console.log(`Salary ${this.salary} Bonus ${this.bonus} Dept ${this.dept}`);
}


typeof Person;
'function'
typeof Person.prototype;
'object'

typeof Employee;
'function'
typeof Employee.prototype;
'object'


Employee.prototype.__proto__ == Object.prototype;   // connected with GOD function
true
Employee.prototype.__proto__ == Person.prototype.__proto__;   // both functions are connected with GOD function
true
Employee.prototype.__proto__ = Person.prototype    // creating linkage.
{printPersonDetails: ƒ, constructor: ƒ}printPersonDetails: ƒ ()constructor: ƒ Person(id, name, city)[[Prototype]]: Object

Employee.prototype.__proto__ == Object.prototype;   // now it's pointing to Person's Prototype instead of GOD function.
false
Employee.prototype.__proto__ == Person.prototype;  // Linkage created...
true


// Updating employee function for creating linkage...
function Employee(id, name, city, salary, bonus, dept){      // id ,name, city (Give it to the Person)
    console.log(' this is ', this);
    //var p = new Person()   // not using this, bcz we don't want to create object of person. We wan't to call person using employee Object.
    Person.call(this, id, name, city); // bind this (Employee) with Person
    this.salary = salary;
    this.bonus = bonus;
    this.dept = dept;
}
Employee.prototype.printEmployeeDetails = function(){
    console.log(`Salary ${this.salary} Bonus ${this.bonus} Dept ${this.dept}`);
}
ƒ (){
    console.log(`Salary ${this.salary} Bonus ${this.bonus} Dept ${this.dept}`);
}

Employee.prototype.__proto__ == Person.prototype;  // linkage broken..... bcz we have updated the function..
false
Employee.prototype.__proto__ = Person.prototype;   // created linkage again...
{printPersonDetails: ƒ, constructor: ƒ}
var amit =new Employee(1001, 'amit','delhi',222222,2222,'IT');
VM1319:3  this is  Employee {}
undefined
amit;  // now we are Able to access both the functions...
Employee {id: 1001, name: 'amit', city: 'delhi', salary: 222222, bonus: 2222, …}
amit.printEmployeeDetails();   // also able to access unique functions....
VM1319:11 Salary 222222 Bonus 2222 Dept IT
undefined
amit.printPersonDetails();    // also able to access unique functions....
VM642:8 Id 1001 Name amit City delhi
undefined
amit;
Employee {id: 1001, name: 'amit', city: 'delhi', salary: 222222, bonus: 2222, …}bonus: 2222city: "delhi"dept: "IT"id: 1001name: "amit"salary: 222222[[Prototype]]: PersonprintEmployeeDetails: ƒ ()constructor: ƒ Employee(id, name, city, salary, bonus, dept)[[Prototype]]: ObjectprintPersonDetails: ƒ ()constructor: ƒ Person(id, name, city)[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: PersonprintEmployeeDetails: ƒ ()constructor: ƒ Employee(id, name, city, salary, bonus, dept)[[Prototype]]: Objectget __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
amit;
Employee {id: 1001, name: 'amit', city: 'delhi', salary: 222222, bonus: 2222, …}
amit.__proto__;
Person {printEmployeeDetails: ƒ, constructor: ƒ}
amit.__proto__ == Employee.prototype;
true
amit.__proto__.__proto__ == Person.prototype;
true
amit.__proto__.__proto__.__proto__ == Object.prototype;
true
amit.__proto__.__proto__.__proto__.__proto__ == null;
true

amit.printEmployeeDetails();
Salary 222222 Bonus 2222 Dept IT
undefined
amit.printPersonDetails();
Id 1001 Name amit City delhi
undefined

Employee.prototype.printEmployeeDetails = function(){
    this.printPersonDetails();
    console.log(`Salary ${this.salary} Bonus ${this.bonus} Dept ${this.dept}`);
}
ƒ (){
    this.printPersonDetails();
    console.log(`Salary ${this.salary} Bonus ${this.bonus} Dept ${this.dept}`);
}

amit.printEmployeeDetails();
Id 1001 Name amit City delhi
Salary 222222 Bonus 2222 Dept IT
