var num1=10,num2=10,num3=10;
if((num1>num2)&&(num1>num3))
{
    if(num2>num3)
    {
        console.log("Second Largest "+num2);
    }
    else{
        console.log("Second Largest "+num3);
    }
}
else if((num2>num1)&&(num2>num3))
{
    if(num1>num3)
    {
        console.log("Second Largest "+num1);
    }
    else{
        console.log("Second Largest "+num3);
    }
}
else if(num1>num2)
{
    console.log("Second Largest "+num1);
}
else{
    console.log("Second Largest "+num2);
}

