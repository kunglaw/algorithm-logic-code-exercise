/* function groupAnimals(animals) {
  // you can only write your code here!
  
  let alphabet = "";
  let alphabetArr = [];
  let isPush = true;
 
  let result = [];
  let temp = [];
  
  for(i=0;i<=animals.length-1;i++)
  {
      // arr kalau kosong , length 
    if(alphabetArr.length > 0)
    {
        //console.log("tak kosong");
        for(j=0;j<=alphabetArr.length-1;j++)
        {
            //console.log("hello");
            if(animals[i][0] == alphabetArr[j])
            {
               isPush = false;
               //console.log(animals[i][0]+" - "+alphabetArr[j]+"  & tak sama")
            }
        }

        if(isPush)
        {
            //console.log("isPush :"+isPush+"& data : "+animals[i][0]);
            alphabetArr.push(animals[i][0]);
        }
        
    }
    else
    {
        alphabetArr.push(animals[i][0]);
    }
   
  }

  
    
    for(k=0;k<=alphabetArr.length-1;k++)
    {
        for(l=0;l<=animals.length-1;l++)
        {
            //console.log(animals[l]);
            if(alphabetArr[k]== animals[l][0])
            {
                //console.log(alphabetArr[k]+" "+animals[l]);
                temp.push(animals[l])
        
            }
            //console.log(temp);
        }

        result.push(temp);
        temp = [];
    }

  return result;
}*/

function groupAnimals(animals)
{
    var temp1 = "";
    var abjad = "";
    var arrTemp1=[];
    var result = [];

    for(i=0;i<=animals.length-1;i++)
    {
        for(j=0;j<=animals.length-1;j++)
        {
            if(animals[i] < animals[j])
            {
                temp1 = animals[i];
                animals[i] = animals[j];
                animals[j] = temp1;
            }
            
        }
    }

    for(k=0;k<=animals.length-1;k++)
    {
        //console.log(k+" - "+animals[k])
        if(arrTemp1.length == 0)
        {
            arrTemp1.push(animals[k]);
            abjad = animals[k][0];
        }
        else
        {
            if(animals[k][0] == abjad)
            {
                //console.log(animals[k]+" abjad masih sama");
                arrTemp1.push(animals[k]);
                //console.log(arrTemp1);

            }
            else 
            {
                //console.log(animals[k]+" abjad sudah beda");
                result.push(arrTemp1);
                arrTemp1 = []; // hapus temp1 array 
                abjad = animals[k][0];
                arrTemp1.push(animals[k]); 
                
            }
          
        }
        // console.log("--->", result);
        // result.push(arrTemp1);
        // console.log("*****", result);
        
    }
    result.push(arrTemp1);
    return result;
    
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
//console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta' ,"ulat", 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda','kancil'], ['unta'] ]