function cariModus(arr) {
    /* let temp1 = 0;
    let temp2 = [];
    let angkaArr = [];
    let groupsAngka = [];
    let angka = 0;
    let result;
   
    // you can only write your code here!
    for(i=0;i<=arr.length-1;i++)
    {
        for(j=0;j<=arr.length-1;j++)
        {
            if(arr[i] < arr[j])
            {
                temp1 = arr[i];
                arr[i] = arr[j];
                arr[j] = temp1;
            }
        }
    }

    for(k=0;k<=arr.length-1;k++)
    {
        if(arr[k] != angka) 
        {
            //check jika angkaArr kosong atau tidak 
            if(angkaArr.length > 0)
            {
                groupsAngka.push(angkaArr);
            }

            angkaArr = [];
            angka = arr[k];
            angkaArr.push(arr[k]);
        }
        else
        {
            angkaArr.push(arr[k]);
        }
    }

    for(l=0;l<=groupsAngka.length-1;l++)
    {
        for(m=0;m<=groupsAngka.length-1;m++)
        {
            if(groupsAngka[l].length > groupsAngka[m].length)
            {
                temp2 = groupsAngka[l];
                groupsAngka[l] = groupsAngka[m];
                groupsAngka[m] = temp2;
            }
        }
    }
    return groupsAngka[0][0];*/

    let arrAngka = [];
    let arrJml = [];
    let isPush = true;
    let temp1 = 0;
    let temp2 = 0;

    for(i=0;i<=arr.length-1;i++)
    {
       
        if(arrAngka.length == 0)
        {
            arrAngka.push(arr[i]);
            arrJml.push(1);
        }
        else
        {
            for(j=0;j<=arrAngka.length-1;j++)
            {
              if(arr[i] == arrAngka[j]){
                isPush = false;
                arrJml[j] = arrJml[j] + 1;
              }
            }

            if(isPush)
            {
                arrAngka.push(arr[i]);
                arrJml.push(1);
            }
        }
    }

   if(arrAngka.length == arr.length || arr.length == arrJml[0])
   {
        result = -1;
      
   }
   else 
   {
       for(k=0;k<=arrJml.length-1;k++)
       {
         for(l=0;l<=arrJml.length-1;l++)
         {
            if(arrJml[k] > arrJml[l])
            {
                temp1 = arrJml[k];
                arrJml[k] = arrJml[l];
                arrJml[l] = temp1;

                temp2 = arrAngka[k];
                arrAngka[k] = arrAngka[l];
                arrAngka[l] = temp2; 

            }
         }
       }
       
       result = arrAngka[0];

       //console.log(arrAngka);
       //console.log(arrJml);
   }

   return result;

}

// TEST CASES
console.log(cariModus([2, 3,5,2,4,3,6,3,7,3])); //
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1