function palindrome(kata) {
    // you can only write your code here!
    var pal = "";
    var result = false;
    for(i=kata.length-1;i>=0;i--)
    {
        pal += kata[i];
    }

    if(pal==kata)
    {
        result = true;
    }

    return result;
}
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false