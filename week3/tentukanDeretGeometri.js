function tentukanDeretGeometri(arr) {
  // you can only write your code here!
   // you can only write your code here!
   var deret = [];
   var hbagi = 1;
   var result = true;
   
   for(i = arr.length - 1; i >= 0; i--)
   {
         //console.log(arr[i]);
        // check kalau i = 0 tidak perlu di execute
        if(i > 0 )
        {
            hbagi= arr[i] / arr[i-1];
            //console.log("hkurang = "+arr[i]+"- "+arr[i-1]+" i ="+i);
            deret.push(hbagi);
        } 
   }

   // check bahwa nilai di array sama semua atau beda
   for(j=0;j<=deret.length-1;j++)
   {
       if(deret[j] != deret[j+1] && j < deret.length-1)
       {
         result = false;
       }
   }
 
   return result;

}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false