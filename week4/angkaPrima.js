function angkaPrima(angka) {
  // you can only write your code here!
  let arrTemp = [];
  result = true;

  for(i=angka;i>0;i--)
  {
    if(angka % i == 0 )
    {
        arrTemp.push(i);
    }
  }

  // check
  for(j=0;j<=arrTemp.length-1;j++)
  {
    if(arrTemp[j] != 1 && arrTemp[j] != angka)
    {
        //console.log(arrTemp[j]);
        result = false;
    }
  }

  return result;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false