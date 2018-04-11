function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  let result = [];
  let obj = {};

  let indexFrom = 0;
  let indexTo = 0;

  for(i=0;i<=arrPenumpang.length -1;i++)
  {
      for(j=0;j<=rute.length-1;j++)
      {
          if(arrPenumpang[i][1] == rute[j] )
          {
              indexFrom = j;
          }

          if(arrPenumpang[i][2] == rute[j] )
          {
              indexTo = j;
          }

      }
      
      obj.penumpang = arrPenumpang[i][0];
      obj.naikDari  = arrPenumpang[i][1];
      obj.tujuan    = arrPenumpang[i][2];
      obj.bayar     = (indexTo - indexFrom) * 2000;

      result.push(obj);
      obj = {};

      
  }
  
  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]