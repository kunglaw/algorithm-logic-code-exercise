function cariMedian(arr) {
    // you can only write your code here!
   let temp = 0;
   let temp1 = 0;
   let result = 0;
    if((arr.length % 2) == 0)
   {
      temp = (arr.length / 2); // tentukan posisi tengah
      temp1 = ( arr[temp] + arr[temp-1] ) / 2 ;
     // console.log("temp1 : "+temp1);
      result = temp1;
   }else
   {
      temp = (arr.length - 1) / 2;
      result = arr[temp];
   }

   return result;
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
