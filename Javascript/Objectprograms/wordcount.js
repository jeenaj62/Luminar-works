var text="Hello hai Hello hai are";
var words=text.split(" ");
var dict={};
for(let word of words){
    if(word in dict)
{
    dict[word]+=1;
}
else
{
    dict[word]=1;
}
}
console.log(dict);