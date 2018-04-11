function sorting(arrNumber) {
  // code di sini
  var temp = 0;
  for(i=0;i<=arrNumber.length -1;i++)
  {
    for(j=0;j<=arrNumber.length-1;j++)
    {
        if(arrNumber[i] < arrNumber[j])
        {
            temp = arrNumber[i];
            arrNumber[i] = arrNumber[j];
            arrNumber[j] = temp;
        }
    }
  }

  return arrNumber;
}

function getTotal(arrNumber) {
  // code di sini
  let banyak = [];
  let angka = [];
  let idx = 0; // index nya array angka
  let banyakTemp = 0; // harus di reset 
  let isPush = true; // harus di reset 
  let isAdd = false; // harus di reset
  
  if(arrNumber.length > 0)
  {
    for(i=0;i<=arrNumber.length-1;i++)
    {
        if(angka.length > 0)
        {
            for(j=0;j<=angka.length-1;j++)
            {
                if(angka[j] == arrNumber[i])
                {
                    isAdd = true;
                    isPush = false;
                    idx = j;
                    
                }
            
            }

            if(isAdd)
            {
                banyak[idx] = banyak[idx] + 1;
            }

            if(isPush)
            {
                angka.push(arrNumber[i]);
                banyak.push(1);
            }
        }
        else
        {
            angka.push(arrNumber[i]);
            banyak.push(1);
        }
        isAdd = false;
        isPush = true;
    }
    
    //console.log(angka);
    //console.log(banyak);
    return ('angka paling besar adalah '+angka[angka.length-1]+' dan jumlah kemunculan sebanyak '+banyak[banyak.length-1]+' kali');
  }
  else
  {
      return "";
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  //console.log(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''