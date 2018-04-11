function changeVocals (str) {
  
    //code di sini
  let tempStr = "";
  let tempInt = 0;
  for(i=0;i<=str.length-1;i++)
  {
    if(str[i] != " ")
    {
        if((str[i] == "a" || str[i] == "i" || str[i] == "u" || str[i] == "e" || str[i] == "o"))
        {
            tempInt = str[i].charCodeAt(0);
            tempInt = tempInt + 1;
            tempStr += String.fromCharCode(tempInt);
        }
        else
        {
            tempStr += str[i];
        }
        
    }
    else
    {
        tempStr += " ";
    }
   
  }

  return tempStr;
}

function reverseWord (str) {
  //code di sini
  let temp = "";
  for(i=str.length-1;i>=0;i--)
  {
    temp += str[i];
  }
  return temp;
}

function setLowerUpperCase (str) {
  //code di sini
   // you can only write your code here!
  //let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //let alphabets = "az";
  let alpha1 = "";
  let result = "";
  for(i=0;i<=str.length-1;i++)
  {
    alpha1 = str[i].charCodeAt(0);
    //console.log(alphabets[i]+" "+alphabets[i].charCodeAt(0) ); //97
    if(alpha1 >= 65 && alpha1 <= 90)
    {
      result += str[i].toLowerCase();
    }
    else if(alpha1 >= 97 && alpha1 <= 122)
    {
      result += str[i].toUpperCase();
    }
    else
    {
      result += str[i];
    }
    
  }

  return result;

}

function removeSpaces (str) {
  //code di sini
  let temp = ""
  for(i=0;i<=str.length-1;i++)
  {
    if(str[i] != " ")
    {
        temp += str[i];
    }
  }

  return temp;
}

function passwordGenerator (name) {
  //code di sini
 // let changeVocals = changeVocals(name);
 if(name.length < 5 )
 {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
 }
 else
 {
    let cv = changeVocals(name);
    let rw = reverseWord(cv);
    let slu = setLowerUpperCase(rw);
    let rsp = removeSpaces(slu);
    return rsp;
 }
    
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'