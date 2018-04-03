function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  var deret = [];
  var hkurang = 0;
  var result = true;
  for(var i = arr.length -1;i >= 0; i--)
  {
    //console.log(arr[i]);
    // check kalau i = 0 tidak perlu di execute
    if(i > 0 )
    {
        hkurang = arr[i] - arr[i-1];
        //console.log("hkurang = "+arr[i]+"- "+arr[i-1]+" i ="+i);
        deret.push(hkurang);
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
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false