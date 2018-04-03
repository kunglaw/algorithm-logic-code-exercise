function pasanganTerbesar(num) {
  // you can only write your code here!
  //console.log(num+" <br> ");
  // pasangkan terlebih dahulu, tampung ke dalam array 
  var numString = num.toString();
  var pasangkan = "";
  var psInt1;
  var arrTemp = [];
  var largest = [];
  var temp1;
                      // -2 karena angka terakhir gak perlu dipasangkan dengan apapun 
  for(var i = 0; i <= numString.length-2; i++)
  {
    pasangkan = numString[i]+numString[i+1];
    //console.log(pasangkan);
    psInt1 = parseInt(pasangkan);
    arrTemp.push(psInt1);

  }
  
  // urutkan 
  for(j=0;j<=arrTemp.length-1;j++)
  {
    for(k=0;k<=arrTemp.length-1;k++)
    {
        if(arrTemp[j] > arrTemp[k])
        {
            temp1 = arrTemp[j];
            arrTemp[j] = arrTemp[k];
            arrTemp[k] = temp1;
            //console.log("run");
        }
    }
  }

  return arrTemp[0];

  // lalu cari yg paling terbesar

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99