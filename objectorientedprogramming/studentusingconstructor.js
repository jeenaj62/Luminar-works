class Student{
    constructor(name,rollno,course,total){
        this.name=name;
        this.rollno=rollno;
        this.course=course;
        this.total=total;
    }
    printStudent()
    {
        console.log(this.name,this.rollno,this.course,this.total);
    }
}
var obj=new Student("jeena",20,"MeanStack",200);
obj.printStudent();