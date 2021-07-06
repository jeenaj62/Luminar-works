class Parent{
    m1(){
        console.log("first method");
    }
}
class Child extends Parent{
  m2(){
      console.log("second method");
  }
}
class SubChild extends Child{
    m3(){
        console.log("three method");
    }
}
var obj=new Parent();
obj.m1();
var obj1=new Child();
obj1.m2();
obj1.m1();
var ob2j2=new SubChild();
ob2j2.m3();
ob2j2.m2();