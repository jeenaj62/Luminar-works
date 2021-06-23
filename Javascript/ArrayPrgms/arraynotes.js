var expenses=[30000,25000,27000,25000,25000]
for(let val of expenses)
{
    console.log(val);
}
var totalexp=0;
for(let exp of expenses){
    totalexp+=exp;
}
console.log("Total exp=",totalexp);

for(let exp of expenses)
{
    if(exp>25000){
        console.log(exp);
    }
}
var count=0;
for(let exp of expenses){
    if(exp>25000){
        count++;
    }
}
console.log(count);
var max_exp=0;
for(let exp of expenses){
    if(exp>max_exp){
        max_exp=exp;
    }
}
console.log("highest exp=",max_exp);