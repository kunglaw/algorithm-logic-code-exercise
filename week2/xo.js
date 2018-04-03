function xo(str) {
  // you can only write your code here!
  var counterO = 0;
  var counterX = 0;
  for(i=0 ; i<= (str.length-1); i++)
  {
      if(str[i] == "o")
      {
        counterO++;
       
      }
      else if(str[i] == "x")
      {
        counterX++;
      }
  }

  if(counterO == counterX)
  {
      return true;
  }
  else if(counterO != counterX )
  {
      return false;
  }

}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true