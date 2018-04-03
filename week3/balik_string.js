var str = "Hello World!";
var result = "";

for(var i = (str.length-1); i >= 0 ; i-- )
{
    result += str[i];
}

console.log(result);