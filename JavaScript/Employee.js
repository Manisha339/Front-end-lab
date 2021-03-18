
function Employee(name,designation,year){
    this.name=name;
    this.designation=designation;
    this.year=year;
}

Employee.prototype.CalculateAge = function() {
    console.log("age"+(2021-this.year));
}

let employee1= new Employee("mani", "tester",1996);
employee1.CalculateAge();

let employee2= new Employee("manisha", "tester11",1999);
employee2.CalculateAge();
let employee3= new Employee("mani", "tester",1996);
employee2.CalculateAge();