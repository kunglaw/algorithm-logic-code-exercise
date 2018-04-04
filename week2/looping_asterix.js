var a = 1;
var b = 1;
var i = "";

while(x<=5)
{
    console.log("*");
    x++;
}

while(y<=5)
{
    while(z<=5)
    {
        i+="*";
    }
    console.log(i);
    y++;
}

i="";

while(a<=5)
{
    while(b <= 5)
    {
        i+="*";
        console.log(i);
        b += 1;
    }
    a+=1; 
}