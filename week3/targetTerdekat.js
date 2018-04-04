function targetTerdekat(arr) {
    // you can only write your code here!
    var o = "o";
    var x = "x";
    
    var intO = 0;
    var intX = [];
    var res1 = [];
    var res2 = 0;

    var result;
    
    // cari posisi x dan o masing2 disimpan kedalam array 
    for(i=0; i<=arr.length-1; i++)
    {
       if(arr[i] == o)
       {
          intO = i;
       }

       if(arr[i] == x)
       {
          intX.push(i);
       }
    }
   
    // kurangkan masing2 posisi x dengan posisi o, simpan hasilnya kedalam array
    for(j=0;j<=intX.length-1;j++)
    {
        if(intO < intX[j])
        {
           res2 = intX[j] - intO;
           res1.push(res2); 
        }
        else if(intO > intX[j])
        {
           res2 = intO - intX[j];
           res1.push(res2);
        }
    }

    // urutkan array 
    for(k=0;k <= res1.length-1; k++)
    {
        for(l=0;l <= res1.length-1;l++)
        {
            if(res1[k] < res1[l])
            {
                var temp1 = res1[k];
                res1[k] = res1[l];
                res1[l] = temp1;
            }
            
        }
    }

    result = 0;
    if(res1.length > 0)
    {
        result = res1[0];
    }

    return result;

}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2