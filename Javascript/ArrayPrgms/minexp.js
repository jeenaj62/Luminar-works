var arr=[1000,15000,14000,10000]
var min=arr[0];
for(let exp of arr){
    if(exp<min){
        min=exp;
    }
}
console.log(min);