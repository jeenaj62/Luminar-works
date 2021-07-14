function checkAge(){
    let ag=age.value;
    let html_data="";
    if(ag>=18){
    html_data=`<p style="color:blue">eligible</p>`
    }
    else{
        html_data=`<p style="color:red">not eligible</p>`
    }
   result.innerHTML=html_data
   
}