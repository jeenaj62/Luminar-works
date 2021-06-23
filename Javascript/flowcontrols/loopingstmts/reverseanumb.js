var num=123;
var res="";
var num1=num;
while(num!=0)
{
 let digit=num%10;
 res+=digit;
 num=Math.floor(num/10);
}
console.log(res);
if(num1==res)
{
    console.log("number is palindrome");

}
else{
    console.log("not palindrome");
}