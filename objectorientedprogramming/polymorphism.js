class Calcalution{
    add(){
        console.log("zero arguments");
    }
    add(num1){
        console.log("one arguments");
    }
    add(num1,num2){
        console.log("two arguments");
    }
   
}
var obj=new Calcalution();
obj.add();
obj.add(10);
obj.add(10,20);