class Student{
    // instance variable
    setStudent(name,rollno,course,total)
    {
        this.name=name;
        this.rollno=rollno;
        this.course=course;
        this.total=total;
    }
    printStudent(){
        console.log(this.name,this.rollno,this.course,this.total);
    }
}
var std=new Student()
std.setStudent("jeena",24,"MCA",200);
std.printStudent();