
   var a=14,b=63,rem;
    while(b!=0){
       rem=a % b;
       a=b;
       b=rem;
    }
    console.log("GCD of two numbers is:%d\n",a);
 
 