function deepSum (arr) {
   
    let subtotal = 0;

    // Code disini
    
    if(arr.length == 0)
    {
        return "No Number"
    }
    else{
       
       
        for(i=0;i<=arr.length-1;i++)
        {
            
            for(j=0;j<=arr[i].length-1;j++)
            {
                //subtotal = subtotal + parseInt(arr[i][j]);
                //console.log(subtotal);
                //console.log(arr[i][j]);
              
                for(k=0;k<=arr[i][j].length-1;k++)
                {
                    
                    subtotal = subtotal + arr[i][j][k];
                    //console.log(arr[i][j]+" => "+subtotal);
                }
                //console.log("subtotal = " + subtotal);
            }
            
        
        }
    }

    return subtotal;
}
  
  //TEST CASE
  console.log(deepSum([
    [
      [4, 5, 6], // 15
      [9, 1, 2, 10], // 22
      [9, 4, 3] // 16
    ],
    [
      [4, 14, 31], // 49
      [9, 10, 18, 12, 20], //69
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])); // 316

  console.log(deepSum([
    [
      [20, 10],
      [15],
      [1, 1]
    ],
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [2],
      [9, 11]
    ],
    [
      [3, 5, 1],
      [1, 5, 3],
      [1]
    ],
    [
      [2]
    ]
  ])); // 156
  
  console.log(deepSum([])); // No number