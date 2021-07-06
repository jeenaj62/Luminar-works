class Parent{
    phone(){
        console.log("Redmi");
    }
    bike(){
        console.log("passion");
    }
  
}
class Child extends Parent{
    phone(){
        console.log("Redmi 10 pro");
    }

    bike(){
        console.log("passion pro");
    }
}
var chd=new Child();
chd.phone();
chd.bike();