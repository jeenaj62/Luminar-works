var products=[
    {code:1000,name:"garlic",mrp:120,aval_qty:10},
    {code:1001,name:"chilly",mrp:80,aval_qty:5},
    {code:1002,name:"tomatto",mrp:35,aval_qty:20},
    {code:1003,name:"onion",mrp:40,aval_qty:37},
    {code:1004,name:"potatto",mrp:45,aval_qty:40},
    {code:1005,name:"banana",mrp:55,aval_qty:60},
    {code:1006,name:"brinjal",mrp:43,aval_qty:2},
    {code:1007,name:"beetroot",mrp:38,aval_qty:5},
    {code:1008,name:"carrot",mrp:60,aval_qty:0},
    {code:1009,name:"bittergod",mrp:50,aval_qty:5},
]
// print products names only
var product_names=products.map(item=>item.name);
console.log(product_names);
//print all names in uppercase
var p_name=products.map(item=>item.name.toUpperCase());
console.log(p_name);
//print all products whose mrp>50
var below_fifty=products.filter(item=>item.mrp>50);
console.log(below_fifty);
//print out of stock items
var stock=products.filter(item=>item.aval_qty==0);
console.log(stock);
//print product available in range of price 50 to 100
var mid_product=products.filter(item=>item.mrp>50&item.mrp<100);
console.log(mid_product);
//print all names start with b
var names_with_b=products.filter(item=>item.name[0]=='b');
console.log(names_with_b);
//if mrp>55 add offer of 5% <50 add offer :0%
products.filter(item=>item.mrp>50?item.offer="5%":item.offer="0%");
console.log(products);
var costly_product=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item1:item2);
console.log(costly_product);
var low_product=products.reduce((item1,item2)=>item1.mrp<item2.mrp?item1:item2);
console.log(low_product);

let sum=(...args)=>args.reduce((num1,num2)=>num1+num2);
console.log(sum(10,20,30,40));
var product_serach=products.find(item=>item.name=="carrot");
console.log(product_serach);
var is_available=products.some(item=>item.mrp>30&item.mrp<50);
console.log(is_available);
