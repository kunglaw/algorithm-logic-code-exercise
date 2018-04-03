function perkalianUnik(arr) {
  // you can only write your code here!
  var hasilKali =1;
  var hasilBagi = 1;
  var result = [];
  // kali dulu semua
  for(var i=0;i<=arr.length-1;i++)
  {
    hasilKali *= arr[i];
  }
  
  for(var i=0;i<=arr.length-1;i++)
  {
    hasilBagi = hasilKali / arr[i];
    result.push(hasilBagi);
  }
  return result;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]