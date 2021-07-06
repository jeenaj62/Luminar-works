var products=[
    [100,"ricepowder",30,10],
    [101,"oreo",35,100],
    [102,"darkfantacy",40,50],
    [103,"fifty",20,5],
    [104,"horlicks",200,5],
    [105,"complan",190,0],
    [106,"boost",250,10],
    [107,"item1",5,10],
    
]
console.log(products[6]);
//highest mrp product
var highest=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2);
console.log(highest);
let high=0;
for(let item of products){
if(item[2]>high){
    high=item[2];
}
}
console.log(high);