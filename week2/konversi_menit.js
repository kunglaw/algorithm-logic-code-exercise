function konversiMenit(menit) {
  // you can only write your code here!
  var m = Math.round(menit / 60);
  var d = menit % 60;
  var nol = "";
  
  //console.log(d.toString().length);
  if(d.toString().length == 1)
  {
      nol = "0";
  }

  return m+":"+nol+d;

}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00