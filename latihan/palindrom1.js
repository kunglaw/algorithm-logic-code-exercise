function palindrom1(kalimat)
{
  var result = [];
  var split1 = kalimat.split(" ");
  
  var split1Pal  = [];
  var balikkata = "";
  
  // balik katanya 
  for(i=0;i<=split1.length-1;i++)
  {
      for(j=split1[i].length-1;j>=0;j--)
      {
         balikkata += split1[i][j];
         split1Pal.push(balikkata);
      }
  }

  

}

palindrom1("aku suka kasurusak ini karena ini kesukaan mama aku");