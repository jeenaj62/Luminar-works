//arrow function
let add=(num1,num2)=>num1+num2;
console.log(add(10,20));
let sub=(num3,num4)=>num3-num4;
console.log(sub(50-10));
let cube=num=>num**3;
console.log(cube(3));
//create arrow function for return num odd or even
var num_chk=num=>num%2==0?"even":"odd";
console.log(num_chk(7));
//map() function
var arr=[1,5,6,7,3,4]
//print all even numbers
var evens=products.filter(num=>num%2==0);
console.log(evens);
var squares=arr.map(num=>num**2);
console.log(squares);
var cube=arr.map(num=>num**2);
console.log(cube);
var sum=arr.reduce((num1,num2)=>num1+num2);
console.log(sum);
var min=arr.reduce((num1,num2)=>num1<num2?num1:num2);
console.log(min);
var max=arr.reduce((num1,num2)=>num1>num2?num1:num2);
console.log(max);
arr.forEach(num=>console.log(num));