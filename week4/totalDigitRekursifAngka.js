function totalDigitRekursif(angka) {
  // you can only write your code here!
 
  let str = angka.toString();
  let panjang = str.length;
  let idx = 0;
  let potong = 0;
  
  if(panjang > 1)
  {
     potong = parseInt(str.substr(1,panjang));
     return parseInt(str[idx]) + totalDigitRekursif(potong)
  }
  else
  {
     potong = parseInt(str[idx]);
     return potong
  }

}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5