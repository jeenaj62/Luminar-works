class Employee{
    constructor(id,name,desig,salary,exp){
        this.id=id;
        this.name=name;
        this.desig=desig;
        this.salary=salary;
        this.exp=exp;

    }
    printEmployee()
    {
        console.log(this.id,this.name,this.desig,this.salary,this.exp);
    }

}
var emp1=new Employee(1,"jeena","Software developer","MeanStack",20000,2);
obj.printEmployee();
var emp2=new Employee(2,"Anu",20,"Software Engineer",25000,1);
obj.printEmployee();
var emp3=new Employee(3,"Anju",20,"Software Engineer",20000,3);
obj.printEmployee();
var emp4=new Employee(4,"Ashna",20,"qa",30000,4);
obj.printEmployee();
var emp5=new Employee(5,"Ashwin",20,"qa",25000,5);
obj.printEmployee();
//highest salary
employees=[];
employees.push(emp1,emp2,emp3,emp4,emp5);
let highsal=employees.reduce((obj1,obj2)=>obj1.salary>obj2.salary?obj1:obj2);
console.log(highsal);