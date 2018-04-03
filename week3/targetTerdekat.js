function targetTerdekat(arr) {
    // you can only write your code here!
    var o = "o";
    var x = "x";
    
    // kanan
    for(i=0; i<=arr.length-1; i++)
    {
        for(j=0; j<=arr.length-1; j++)
        {
            if(arr[i] == o)
            {
                
            }
        }
    }

    //kiri
    for(i = arr.length -1 )

}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2