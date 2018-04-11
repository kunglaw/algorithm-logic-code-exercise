function patternx()
{
    let crash = "#";
    let space = " ";
    let row = "";
    let height = 10; // panjang dn tangga

    for(i=0;i<height;i++)
    {
        for(j=0;j<=height;j++)
        {
            row += crash;
        }
    }
}

console.log(patternx());

