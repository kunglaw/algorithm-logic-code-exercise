function fpb(angka1, angka2) {
    // you can only write your code here!
    let arrTemp1 = [];
    let arrTemp2 = [];
    let largest = 0;
    let temp = [];

    for(i=0;i<angka1;i++)
    {
        if(angka1 % i == 0 /*&& i > 1 && i < angka1*/)
        {
            arrTemp1.push(i);
        }
    }

    for(j=0;j<angka2;j++)
    {
        if(angka2 % j == 0 /*&& j > 1 && j < angka2*/)
        {
            arrTemp2.push(j);
        }
    }
    
    for(k=0;k<=arrTemp1.length-1;k++)
    {
        for(l=0;l<=arrTemp2.length-1;l++)
        {
            if(arrTemp1[k] == arrTemp2[l])
            {
                largest = arrTemp1[k];
            }
        } 
    }

    //temp.push(arrTemp1);
    //temp.push(arrTemp2);

    return largest;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1