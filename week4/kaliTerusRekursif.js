function kaliTerusRekursif(angka) {
  // you can only write your code here!
  let str     = angka.toString(); 
  let panjang = str.length;
  let hasil_kali = 1;

  if(panjang > 1)
  {
    for(i=0;i<=panjang-1;i++)
    {
        var a = parseInt(str[i]);
        hasil_kali *= a;
        //console.log("hasil_kali = "+hasil_kali);
    } 

    return kaliTerusRekursif(hasil_kali);
  }
  else
  {
    return angka;
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6