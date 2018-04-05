function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  //let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //let alphabets = "az";
  let alpha1 = "";
  let result = "";
  for(i=0;i<=kalimat.length-1;i++)
  {
    alpha1 = kalimat[i].charCodeAt(0);
    //console.log(alphabets[i]+" "+alphabets[i].charCodeAt(0) ); //97
    if(alpha1 >= 65 && alpha1 <= 90)
    {
      result += kalimat[i].toLowerCase();
    }
    else if(alpha1 >= 97 && alpha1 <= 122)
    {
      result += kalimat[i].toUpperCase();
    }
    else
    {
      result += kalimat[i];
    }
    
  }

  return result;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"