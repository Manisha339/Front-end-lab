class Employee1{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }

    print(){
        console.log(`ID of Employee=${this.id} and Name of Employee=${this.name}`);
    }
}
const emp1 = new Employee1(101,"Alex");
const emp2 = new Employee1(102,"John");
emp1.print();
emp2.print();