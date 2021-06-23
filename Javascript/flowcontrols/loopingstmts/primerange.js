var low=21,upp=40;
for(let num=low;num<=upp;num++)
{
    let flag=0;
    for(let i=2;i<num;i++){
        if(num%i==0){
            flag++;
            break;
        }
    }
    if(flag==0)
{
    console.log(num);
}
}