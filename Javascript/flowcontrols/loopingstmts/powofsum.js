var n=123,rem,sum=0;
while(n!=0)
{
    rem=n%10;
    sum=sum+(rem*rem*rem);
    n=Math.floor(n/10);
}
console.log(sum);
