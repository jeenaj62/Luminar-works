var num=2,low=8,up=26,digit=20;
var result=1;
var j=1;
while(j<=digit)
{
  result=j*2;
  j++;
  
  if(result>=low && result<=up)
  {
    console.log(result);
  }
}