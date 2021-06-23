var arr=[1,2,3,4];
var low=0,upp=arr.length-1;
var element=6;
while(low<upp){
let total=arr[low]+arr[upp];
if(element==total){
    console.log(arr[low],arr[upp]);
    low++;
}
else if(element>total)
{
    low++;
}
else if(element<total){
    upp--;
}
}
